import React from 'react';
import { User, Users, Heart, Home, Briefcase, Globe } from 'lucide-react';

export default function TravelCategories() {
  const categories = [
    {
      id: 1,
      title: "Solo Adventurers",
      icon: User,
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "12.5k travelers",
      description: "Find fellow solo travelers and share experiences"
    },
    {
      id: 2,
      title: "Couples Getaway",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "8.3k couples",
      description: "Romantic destinations and couple-friendly guides"
    },
    {
      id: 3,
      title: "Family Adventures",
      icon: Home,
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "15.2k families",
      description: "Kid-friendly activities and family travel tips"
    },
    {
      id: 4,
      title: "Friend Groups",
      icon: Users,
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "9.7k groups",
      description: "Group travel planning and shared experiences"
    },
    {
      id: 5,
      title: "Digital Nomads",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "11.8k nomads",
      description: "Work-friendly destinations and nomad communities"
    },
    {
      id: 6,
      title: "Cultural Explorers",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: "14.1k explorers",
      description: "Immersive cultural experiences and local connections"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Travel Your Way</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-48">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <category.icon className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-semibold">{category.count}</span>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}