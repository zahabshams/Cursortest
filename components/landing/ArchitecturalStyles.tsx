'use client';

import { useState } from 'react';
import Image from 'next/image';

const styles = [
  {
    id: 'chettinad',
    name: 'Chettinad',
    description: 'Grand mansions with ornate pillars and courtyards',
    category: 'Traditional South',
    features: ['Athangudi Tiles', 'Burma Teak', 'Open Courtyards', 'Pillared Halls'],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Sloped roofs with wooden architecture and traditional charm',
    category: 'Traditional South',
    features: ['Sloped Roofs', 'Wooden Elements', 'Nalukettu', 'Verandah'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop'
  },
  {
    id: 'haveli',
    name: 'Haveli',
    description: 'Rajasthani grandeur with intricate jharokhas and courtyards',
    category: 'Traditional North',
    features: ['Jharokhas', 'Inner Courtyards', 'Carved Walls', 'Chhatris'],
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&auto=format&fit=crop'
  },
  {
    id: 'colonial',
    name: 'Colonial',
    description: 'British colonial elegance with high ceilings and symmetry',
    category: 'Heritage',
    features: ['High Ceilings', 'Columns', 'Symmetry', 'Verandahs'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop'
  },
  {
    id: 'rajput',
    name: 'Rajput',
    description: 'Fort-like architecture with royal elements',
    category: 'Traditional North',
    features: ['Stone Walls', 'Turrets', 'Jalis', 'Royal Elements'],
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800&auto=format&fit=crop'
  },
  {
    id: 'modern-heritage',
    name: 'Modern Heritage',
    description: 'Contemporary design with traditional soul',
    category: 'Modern Fusion',
    features: ['Clean Lines', 'Traditional Elements', 'Natural Materials', 'Smart Features'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop'
  },
];

export default function ArchitecturalStyles() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'Traditional South', 'Traditional North', 'Heritage', 'Modern Fusion'];
  
  const filteredStyles = selectedCategory === 'all' 
    ? styles 
    : styles.filter(style => style.category === selectedCategory);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Architectural Styles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore timeless architectural traditions from across India, each telling a unique story
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Styles' : category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStyles.map((style) => (
            <div
              key={style.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-amber-700">
                  {style.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {style.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {style.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {style.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
