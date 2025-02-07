import React from 'react';
import { Plane, Navigation, TrendingUp, Users } from 'lucide-react';

export default function TrendingSection() {
  const trendingDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      currentVisitors: 1243,
      trend: "+15%"
    },
    {
      id: 2,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      currentVisitors: 892,
      trend: "+23%"
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      currentVisitors: 1567,
      trend: "+18%"
    }
  ];

  const trendingFlights = [
    {
      id: 1,
      route: "NYC → LON",
      airline: "British Airways",
      searches: "2.3k searches/hour",
      priceChange: "-12%"
    },
    {
      id: 2,
      route: "LAX → TYO",
      airline: "ANA",
      searches: "1.8k searches/hour",
      priceChange: "-8%"
    },
    {
      id: 3,
      route: "DXB → SIN",
      airline: "Emirates",
      searches: "1.5k searches/hour",
      priceChange: "-15%"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trending Destinations */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span>Live Updates</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {trendingDestinations.map((destination) => (
              <div key={destination.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {destination.currentVisitors} travelers now
                  </div>
                </div>
                <span className="text-green-600 font-semibold">{destination.trend}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Flights */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Flights</h2>
            <div className="flex items-center text-blue-600">
              <Plane className="h-5 w-5 mr-2" />
              <span>Live Updates</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {trendingFlights.map((flight) => (
              <div key={flight.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">{flight.route}</div>
                  <div className="text-sm text-gray-500">{flight.airline}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{flight.searches}</div>
                  <div className="text-green-600 font-semibold">{flight.priceChange}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}