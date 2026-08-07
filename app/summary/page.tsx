'use client';

import { Download, Mail, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useWizardStore } from '@/lib/store';

export default function SummaryPage() {
  const router = useRouter();
  const { requirements } = useWizardStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-2">Project Summary</h1>
            <p className="text-amber-100">Your personalized architectural consultation summary</p>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">📍 Location</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-700">
                  {requirements?.location?.city}, {requirements?.location?.state}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Budget</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-amber-700">
                  ₹{((requirements?.budget || 5000000) / 10000000).toFixed(2)} Cr
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Lead Score</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Score: 92/100</span>
                <span className="font-semibold text-amber-700">Highly Qualified</span>
              </div>
            </div>
          </div>

          <div className="border-t p-8 bg-gray-50 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-xl border-2 hover:border-amber-500">
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-xl border-2 hover:border-amber-500">
              <Mail className="w-5 h-5" />
              Email PDF
            </button>
            <button onClick={() => router.push('/booking')} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl">
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
