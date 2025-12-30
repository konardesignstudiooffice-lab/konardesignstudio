import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  Send, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail,
  CheckCircle2
} from 'lucide-react';
import { 
  ServiceCategory, 
  ProjectType, 
  ConsultationMode, 
  BookingDetails, 
  LeadPriority 
} from '../types';
import { BUSINESS_INFO } from '../constants';

const Booking: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const preSelectedService = location.state?.service;

  // If a service is pre-selected, start at step 2
  const [step, setStep] = useState(preSelectedService ? 2 : 1);

  const [formData, setFormData] = useState<BookingDetails>({
    service: preSelectedService || ServiceCategory.Architecture,
    projectType: ProjectType.Residential,
    area: '',
    budget: '',
    location: '',
    vastuRequired: true,
    mode: ConsultationMode.SiteVisit,
    date: '',
    timeSlot: '',
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const calculateLeadPriority = (): LeadPriority => {
    const { budget, date, timeSlot, area } = formData;
    if (budget && date && timeSlot && area) return 'HOT';
    if (budget || (date && timeSlot)) return 'WARM';
    return 'COLD';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const priority = calculateLeadPriority();
    
    const message = `New Consultation Booking – Konar Design Studio
    
Client Name: ${formData.fullName}
Phone: ${formData.phone}
City: ${formData.location}
Service Category: ${formData.service}
Project Type: ${formData.projectType}
Area: ${formData.area}
Budget: ${formData.budget}
Vastu Required: ${formData.vastuRequired ? 'Yes' : 'No'}
Consultation Mode: ${formData.mode}
Preferred Date & Time: ${formData.date} at ${formData.timeSlot}

Lead Priority: ${priority}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedMessage}`, '_blank');
    navigate('/thank-you');
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h3 className="text-2xl font-heading font-bold text-charcoal">1. Select Your Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(ServiceCategory).map(cat => (
                <button
                  key={cat}
                  onClick={() => { setFormData({...formData, service: cat}); nextStep(); }}
                  className={`p-6 border text-left transition-all ${formData.service === cat ? 'border-gold bg-gold/5 ring-1 ring-gold' : 'border-gray-200 hover:border-gold hover:bg-gray-50'}`}
                >
                  <div className="font-heading font-bold text-charcoal">{cat}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h3 className="text-2xl font-heading font-bold text-charcoal">2. Project Details</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Built-up Area (Sq.Ft)</label>
                  <input type="text" placeholder="e.g., 2500" value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} className="w-full border-b-2 border-gray-200 py-2 focus:border-gold outline-none bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Approx Budget</label>
                  <select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full border-b-2 border-gray-200 py-2 focus:border-gold outline-none bg-transparent">
                    <option value="">Select Range</option>
                    <option value="5-10L">₹5L - ₹10L</option>
                    <option value="10-25L">₹10L - ₹25L</option>
                    <option value="25-50L">₹25L - ₹50L</option>
                    <option value="50L+">₹50L+</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={prevStep} className="flex items-center text-gray-400 font-bold uppercase tracking-widest text-xs">Back</button>
              <button onClick={nextStep} className="bg-charcoal text-white px-8 py-3 font-bold uppercase tracking-widest text-xs">Next Step</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h3 className="text-2xl font-heading font-bold text-charcoal">3. Consultation Preference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Preferred Date</label>
                  <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full border-b-2 border-gray-200 py-2 outline-none bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2">Time Slot</label>
                  <select value={formData.timeSlot} onChange={e => setFormData({...formData, timeSlot: e.target.value})} className="w-full border-b-2 border-gray-200 py-2 outline-none bg-transparent">
                    <option value="">Select Time</option>
                    <option value="Morning">Morning (10AM - 1PM)</option>
                    <option value="Afternoon">Afternoon (2PM - 5PM)</option>
                    <option value="Evening">Evening (6PM - 8PM)</option>
                  </select>
                </div>
            </div>
            <div className="flex justify-between">
              <button onClick={prevStep} className="flex items-center text-gray-400 font-bold uppercase tracking-widest text-xs">Back</button>
              <button onClick={nextStep} className="bg-charcoal text-white px-8 py-3 font-bold uppercase tracking-widest text-xs">Next Step</button>
            </div>
          </div>
        );
      case 4:
        return (
          <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
            <h3 className="text-2xl font-heading font-bold text-charcoal">4. Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required type="text" placeholder="Full Name" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full border-b-2 border-gray-200 py-2 outline-none" />
                <input required type="tel" placeholder="WhatsApp Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border-b-2 border-gray-200 py-2 outline-none" />
                <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border-b-2 border-gray-200 py-2 outline-none md:col-span-2" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="flex items-center text-gray-400 font-bold uppercase tracking-widest text-xs">Back</button>
              <button type="submit" className="bg-royalBlue text-white px-10 py-4 font-bold uppercase tracking-widest text-xs">Submit & WhatsApp</button>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-ivory pt-32 pb-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal uppercase tracking-widest leading-tight">Book Consultation</h1>
        </div>
        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Booking;