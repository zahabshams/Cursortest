'use client';

import { MessageSquare, Palette, Building2, Home, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Share Your Vision',
    description: 'Tell us about your dream home through our AI-powered consultation or step-by-step wizard',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Palette,
    title: 'Concept & Design',
    description: 'Our architects create personalized designs that blend tradition with your lifestyle',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Building2,
    title: 'Planning & Approval',
    description: 'Complete documentation, budgeting, and regulatory approvals handled seamlessly',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Home,
    title: 'Craftsmanship',
    description: 'Expert artisans bring your heritage home to life with meticulous attention to detail',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: CheckCircle2,
    title: 'Your Legacy',
    description: 'Move into a home that will be cherished for generations to come',
    color: 'from-green-500 to-green-600'
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Journey to Your Dream Home
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A thoughtful, collaborative process that transforms your vision into architectural reality
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0">
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-gray-400">STEP {index + 1}</span>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
