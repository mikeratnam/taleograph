import React from 'react';
import { MapPin, Calendar, Award, Users } from 'lucide-react';

export default function ProfileHero() {
  return (
    <div className="pt-16">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Cover"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="flex items-end space-x-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            alt="Profile"
            className="h-36 w-36 rounded-full border-4 border-white shadow-lg"
          />
          
          <div className="pb-4 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">Sarah Adventure</h1>
                <p className="text-gray-200 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  Based in New York, USA
                </p>
              </div>
              <div className="flex space-x-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">2018</p>
                  <p className="text-sm text-gray-300">Traveling since</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-white">45</p>
                  <p className="text-sm text-gray-300">Countries</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-white">2.5k</p>
                  <p className="text-sm text-gray-300">Followers</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
