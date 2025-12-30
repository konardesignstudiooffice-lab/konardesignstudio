
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Mic, MicOff, Globe, MapPin as MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI, Modality, Type } from "@google/genai";

// Audio Utilities for Live API
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to Konar Design Studio! I'm your digital architectural assistant. How can I help you elevate your space today?", isBot: true, sources: [] as any[] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Live API Refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const liveSessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleLive = async () => {
    if (isLive) {
      stopLive();
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputAudioContext;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            const source = inputAudioContext.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              // CRITICAL: Solely rely on sessionPromise resolves and then call `session.sendRealtimeInput`
              sessionPromise.then(s => s.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContext.destination);
          },
          onmessage: async (message) => {
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContext.currentTime);
              const audioBuffer = await decodeAudioData(decode(audioData), outputAudioContext, 24000, 1);
              const source = outputAudioContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputAudioContext.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onclose: () => stopLive(),
          onerror: () => stopLive(),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          systemInstruction: "You are the AI assistant for Konar Design Studio. Be luxury-focused, polite, and helpful. You can discuss architecture, Vastu, and project planning in West Bengal.",
        }
      });

      liveSessionRef.current = await sessionPromise;
      setIsLive(true);
    } catch (err) {
      console.error("Live API Error:", err);
      stopLive();
    }
  };

  const stopLive = () => {
    // Correctly close the live session and release resources as per Gemini API guidelines
    if (liveSessionRef.current) {
      liveSessionRef.current.close();
      liveSessionRef.current = null;
    }
    setIsLive(false);
    audioContextRef.current?.close();
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isBot: false, sources: [] }]);
    setIsLoading(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Determine model based on query content
      const isLocationQuery = /location|nearby|restaurant|directions|where is|office|address|find/i.test(userMsg);
      const modelName = isLocationQuery ? 'gemini-2.5-flash' : 'gemini-3-flash-preview';
      
      const config: any = {
        systemInstruction: "You are the premium AI concierge for Konar Design Studio. Your goal is to assist clients with architectural, interior, and Vastu queries. Use grounding to provide accurate, up-to-date information about Durgapur and West Bengal.",
      };

      if (isLocationQuery) {
        config.tools = [{ googleMaps: {} }];
        // Try to get geolocation if possible
        try {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          config.toolConfig = {
            retrievalConfig: {
              latLng: { latitude: pos.coords.latitude, longitude: pos.coords.longitude }
            }
          };
        } catch (e) { /* Geolocation failed, proceed anyway */ }
      } else {
        config.tools = [{ googleSearch: {} }];
      }

      const response = await ai.models.generateContent({
        model: modelName,
        contents: userMsg,
        config
      });

      // The GenerateContentResponse features a .text property
      const text = response.text || "I apologize, but I am having trouble processing that request at the moment. Please contact our human staff for immediate assistance.";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = groundingChunks.map((chunk: any) => ({
        uri: chunk.web?.uri || chunk.maps?.uri,
        title: chunk.web?.title || chunk.maps?.title || "Source"
      })).filter((s: any) => s.uri);

      setMessages(prev => [...prev, { text, isBot: true, sources }]);
    } catch (err) {
      console.error("Gemini Error:", err);
      setMessages(prev => [...prev, { text: "Connection error. Please try again later.", isBot: true, sources: [] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-charcoal text-gold p-4 rounded-full shadow-2xl hover:bg-gold hover:text-charcoal transition-all border border-gold/50 flex items-center gap-2 group"
        >
          <Bot size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-xs uppercase tracking-widest whitespace-nowrap">Studio Assistant</span>
        </button>
      ) : (
        <div className="bg-white w-[320px] sm:w-[420px] h-[600px] shadow-2xl flex flex-col rounded-t-xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-charcoal p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Bot size={18} className="text-charcoal" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-xs tracking-widest uppercase">Design Concierge</span>
                <span className="text-gold text-[8px] uppercase tracking-widest">Enhanced with Gemini AI</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleLive} 
                className={`p-2 rounded-full transition-colors ${isLive ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-gold'}`}
                title={isLive ? "Stop Voice Mode" : "Start Voice Mode"}
              >
                {isLive ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gold"><X size={20} /></button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-ivory/30 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.isBot ? 'items-start' : 'items-end'}`}>
                <div className={`max-w-[85%] p-3 text-sm rounded-lg ${m.isBot ? 'bg-white text-gray-700 shadow-sm border border-gray-100' : 'bg-royalBlue text-white shadow-md'}`}>
                  {m.text}
                </div>
                {m.sources && m.sources.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.sources.map((s, idx) => (
                      <a 
                        key={idx} 
                        href={s.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-gold/10 text-gold px-2 py-1 rounded border border-gold/20 hover:bg-gold/20 transition-all flex items-center gap-1"
                      >
                        {s.uri.includes('google.com/maps') ? <MapPinIcon size={10} /> : <Globe size={10} />}
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            {isLive && (
              <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 animate-pulse">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                   <Mic className="text-gold" size={32} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal">Voice Conversation Active</p>
                <button onClick={stopLive} className="text-xs text-red-500 font-bold uppercase hover:underline">End Session</button>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {!isLive && (
            <div className="p-2 border-t border-gray-100 flex gap-2 overflow-x-auto">
              {['Vastu Tips', 'Regional Laws', 'Durgapur Office', 'Pricing Info'].map(btn => (
                <button 
                  key={btn}
                  onClick={() => setInput(btn)}
                  className="whitespace-nowrap px-3 py-1 bg-gray-50 border border-gray-200 text-[10px] font-bold uppercase tracking-wider hover:border-gold transition-colors"
                >
                  {btn}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          {!isLive && (
            <div className="p-4 border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about design, location or Vastu..."
                className="flex-grow text-sm outline-none bg-transparent"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend} 
                className={`${isLoading ? 'text-gray-300' : 'text-gold hover:text-charcoal'} transition-colors`}
                disabled={isLoading}
              >
                <Send size={20} />
              </button>
            </div>
          )}

          {/* Footer CTA */}
          <div className="bg-gold/10 p-2 text-center">
             <Link to="/booking" className="text-[10px] font-bold uppercase tracking-widest text-charcoal hover:underline">Book Professional Session →</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAgent;
