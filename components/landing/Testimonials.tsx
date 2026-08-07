'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Jaipur, Rajasthan',
    project: 'Heritage Haveli',
    rating: 5,
    text: 'They transformed our vision of a traditional haveli into reality. Every detail reflects our cultural roots while providing modern comfort. A true masterpiece that our children will inherit with pride.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop'
  },
  {
    name: 'Meera Iyer',
    location: 'Chennai, Tamil Nadu',
    project: 'Chettinad Mansion',
    rating: 5,
    text: 'The attention to traditional Chettinad architecture was remarkable. From the Athangudi tiles to the Burma teak pillars, every element was carefully sourced and crafted. Our home is a work of art.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop'
  },
  {
    name: 'Vikram Patel',
    location: 'Ahmedabad, Gujarat',
    project: 'Modern Heritage Villa',
    rating: 5,
    text: 'Perfect blend of tradition and modernity. The team understood our need for a contemporary lifestyle while maintaining the essence of traditional architecture. The courtyard is our favorite spot.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop'
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories from Our Families
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those who have entrusted us with their architectural legacy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-xs text-amber-700 font-semibold mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
