import React from 'react';
import { Globe, Map, Star, Trophy } from 'lucide-react';

export default function TravelStats() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Countries Visited</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Travel Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.9</p>
            </div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Cities Explored</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </div>
            <Map className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Travel Rank</p>
              <p className="text-2xl font-bold text-gray-900">#42</p>
            </div>
            <Trophy className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}