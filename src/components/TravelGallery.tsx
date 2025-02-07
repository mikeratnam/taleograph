import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function TravelGallery() {
  const memories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Santorini, Greece",
      date: "August 2023",
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Swiss Alps",
      date: "July 2023",
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Bali, Indonesia",
      date: "June 2023",
      likes: 421,
      comments: 67
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Travel Memories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {memories.map((memory) => (
          <div key={memory.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={memory.image}
              alt={memory.location}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{memory.location}</h3>
              <p className="text-sm text-gray-500">{memory.date}</p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-red-500">
                    <Heart className="h-5 w-5 mr-1" />
                    {memory.likes}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-500">
                    <MessageCircle className="h-5 w-5 mr-1" />
                    {memory.comments}
                  </button>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}