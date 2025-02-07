import React from 'react';
import { Camera, Coffee, Map, Book } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Camera,
      title: "Photography Tours",
      description: "Professional photography tours in scenic locations",
      price: "$150/hour"
    },
    {
      id: 2,
      icon: Coffee,
      title: "Local Experience",
      description: "Authentic local experiences and hidden gems",
      price: "$80/person"
    },
    {
      id: 3,
      icon: Map,
      title: "Custom Itineraries",
      description: "Personalized travel planning and itineraries",
      price: "From $200"
    },
    {
      id: 4,
      icon: Book,
      title: "Travel Guides",
      description: "Digital travel guides for popular destinations",
      price: "$25/guide"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Travel Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm p-6">
            <service.icon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{service.description}</p>
            <p className="text-blue-600 font-semibold">{service.price}</p>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}