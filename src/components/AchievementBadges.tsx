import React from 'react';
import { Award, Compass, Mountain, Sunrise, Map, Anchor, Plane, Camera } from 'lucide-react';

export default function AchievementBadges() {
  const badges = [
    {
      id: 1,
      icon: Compass,
      title: "Globe Trotter",
      description: "Visited all 7 continents",
      color: "bg-purple-600"
    },
    {
      id: 2,
      icon: Mountain,
      title: "Peak Climber",
      description: "Conquered 5 major peaks",
      color: "bg-blue-600"
    },
    {
      id: 3,
      icon: Sunrise,
      title: "Culture Explorer",
      description: "Experienced 20 different cultures",
      color: "bg-orange-600"
    },
    {
      id: 4,
      icon: Map,
      title: "Path Finder",
      description: "Explored 50 hidden gems",
      color: "bg-green-600"
    },
    {
      id: 5,
      icon: Anchor,
      title: "Island Hopper",
      description: "Visited 25 islands",
      color: "bg-cyan-600"
    },
    {
      id: 6,
      icon: Plane,
      title: "Mile High",
      description: "100,000 air miles traveled",
      color: "bg-red-600"
    },
    {
      id: 7,
      icon: Camera,
      title: "Memory Maker",
      description: "1000+ travel photos shared",
      color: "bg-yellow-600"
    },
    {
      id: 8,
      icon: Award,
      title: "Local Expert",
      description: "50+ local recommendations",
      color: "bg-indigo-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Achievement Badges</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="group relative flex flex-col items-center"
          >
            <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mb-2 transform group-hover:scale-110 transition-transform`}>
              <badge.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 text-center">{badge.title}</h3>
            <div className="opacity-0 group-hover:opacity-100 absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap transition-opacity">
              {badge.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}