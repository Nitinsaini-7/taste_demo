"use client"
import React, { useState, useEffect } from 'react';
import { ChefHat, Tag } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { name: 'All', color: 'bg-red-600' },
    { name: 'Cakes', color: 'bg-orange-500' },
    { name: 'Pastries', color: 'bg-yellow-500' },
    { name: 'Breads', color: 'bg-amber-600' },
    { name: 'Custom', color: 'bg-red-500' }
  ];

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop', category: 'Cakes', title: 'Wedding Masterpiece' },
    { id: 2, src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop', category: 'Cakes', title: 'Chocolate Layer Cake' },
    { id: 3, src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop', category: 'Pastries', title: 'French Croissants' },
    { id: 4, src: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop', category: 'Custom', title: 'Gourmet Cupcakes' },
    { id: 5, src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop', category: 'Breads', title: 'Artisan Sourdough' },
    { id: 6, src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop', category: 'Cakes', title: 'Red Velvet Delight' },
    { id: 7, src: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop', category: 'Pastries', title: 'Colorful Macarons' },
    { id: 8, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop', category: 'Breads', title: 'Fresh Baguettes' },
    { id: 9, src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop', category: 'Cakes', title: 'Birthday Celebration' },
    { id: 10, src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop', category: 'Pastries', title: 'Danish Pastries' },
    { id: 11, src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop', category: 'Custom', title: 'Tiered Masterpiece' },
    { id: 12, src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', category: 'Custom', title: 'Halloween Treats' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We are The Taste. A Premium Bakery Studio.
          </h1>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                selectedCategory === category.name ? `${category.color} shadow-lg scale-105` : `${category.color} opacity-70`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`${getCategoryColor(image.category)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                      {image.category}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <Tag className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No items in this category</h3>
            <p className="text-gray-500">Try selecting a different category to see our creations</p>
          </div>
        )}

        
      </main>
    </div>
  );
};

export default Gallery;