'use client';

import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Architectural Legacy?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Begin your journey towards a home that reflects your heritage, 
            celebrates your culture, and creates lasting memories for generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/wizard"
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/booking"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Book a Meeting
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12 pt-12 border-t border-white/10">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Call Us</div>
                <div className="text-lg font-semibold">+91 98765 43210</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Email Us</div>
                <div className="text-lg font-semibold">hello@heritage.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
