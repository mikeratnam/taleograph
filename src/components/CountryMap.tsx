import React from 'react';
import { Globe } from 'lucide-react';

export default function CountryMap() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Countries Visited</h2>
          <div className="flex items-center text-blue-600">
            <Globe className="h-5 w-5 mr-2" />
            <span className="font-semibold">45 Countries</span>
          </div>
        </div>
        
        <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="World Map"
            className="w-full h-full object-cover opacity-50"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Interactive map visualization coming soon...</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600">Most Recent</h3>
            <p className="text-lg font-bold text-gray-900">Iceland</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600">Longest Stay</h3>
            <p className="text-lg font-bold text-gray-900">Italy</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600">Most Visited</h3>
            <p className="text-lg font-bold text-gray-900">Japan</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600">Next Destination</h3>
            <p className="text-lg font-bold text-gray-900">New Zealand</p>
          </div>
        </div>
      </div>
    </div>
  );
}