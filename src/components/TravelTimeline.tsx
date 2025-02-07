import React from 'react';
import { Plane, Train, Ship, Calendar } from 'lucide-react';

export default function TravelTimeline() {
  const timeline = [
    {
      id: 1,
      date: "December 2023",
      title: "Northern Lights Adventure",
      location: "Iceland",
      description: "Chasing the aurora borealis through Iceland's winter wonderland",
      icon: Plane,
      images: ["https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"]
    },
    {
      id: 2,
      date: "October 2023",
      title: "Trans-Siberian Journey",
      location: "Russia",
      description: "Epic train journey from Moscow to Vladivostok",
      icon: Train,
      images: ["https://images.unsplash.com/photo-1520766439748-c98f4cc1b1c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"]
    },
    {
      id: 3,
      date: "August 2023",
      title: "Mediterranean Cruise",
      location: "Greece & Italy",
      description: "Island hopping through the crystal waters of the Mediterranean",
      icon: Ship,
      images: ["https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Travel Timeline</h2>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
        
        {timeline.map((event, index) => (
          <div key={event.id} className="relative mb-12">
            <div className="flex items-center mb-4">
              <div className="flex-1 text-right pr-8">
                <div className="flex items-center justify-end">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  <time className="text-sm text-gray-500">{event.date}</time>
                </div>
              </div>
              
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <event.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex-1 pl-8">
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>
            </div>
            
            <div className="ml-20 bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}