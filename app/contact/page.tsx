'use client';

import { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [step, setStep] = useState<'info' | 'otp'>('info');
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSubmit = () => {
    if (formData.name && formData.mobile && formData.email) {
      setStep('otp');
    }
  };

  const handleVerify = () => {
    router.push('/summary');
  };

  if (step === 'otp') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Verify OTP</h2>
          <div className="flex gap-3 justify-center mb-6">
            {otp.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => {
                  const newOtp = [...otp];
                  newOtp[i] = e.target.value;
                  setOtp(newOtp);
                }}
                className="w-12 h-14 text-center text-2xl font-bold border-2 rounded-xl focus:border-amber-500 outline-none"
              />
            ))}
          </div>
          <button onClick={handleVerify} className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold">
            Verify & Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:border-amber-500 outline-none"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                placeholder="Mobile Number"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:border-amber-500 outline-none"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:border-amber-500 outline-none"
              />
            </div>
          </div>
          <button onClick={handleSubmit} disabled={!formData.name || !formData.mobile || !formData.email} className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50">
            Continue to Verification
          </button>
        </div>
      </div>
    </div>
  );
}
