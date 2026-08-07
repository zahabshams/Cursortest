'use client';

import { useState } from 'react';
import { Calendar, Video, Phone, Check } from 'lucide-react';

export default function BookingPage() {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [booked, setBooked] = useState(false);

  const types = [
    { id: 'video', label: 'Video Call', icon: Video },
    { id: 'phone', label: 'Phone Call', icon: Phone },
  ];

  const times = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'];

  if (booked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Consultation Booked!</h2>
          <p className="text-gray-600 mb-6">You will receive a confirmation email shortly</p>
          <button onClick={() => window.location.href = '/'} className="px-6 py-3 bg-amber-600 text-white rounded-xl">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Book Your Consultation</h1>
          <p className="text-xl text-gray-600">Schedule a meeting with our experts</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Select Type</h3>
            <div className="grid grid-cols-2 gap-4">
              {types.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className={`p-6 rounded-xl ${type === t.id ? 'bg-amber-600 text-white' : 'bg-gray-50'}`}
                >
                  <t.icon className="w-8 h-8 mx-auto mb-2" />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Select Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 focus:border-amber-500 outline-none"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Select Time</h3>
            <div className="grid grid-cols-4 gap-3">
              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`py-3 rounded-xl ${time === t ? 'bg-amber-600 text-white' : 'bg-gray-50'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setBooked(true)}
            disabled={!type || !date || !time}
            className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
