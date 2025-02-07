import React from 'react';
import { Users, Activity } from 'lucide-react';

export default function OnlineUsers() {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Users className="h-5 w-5 text-green-500 mr-2" />
          <span className="font-semibold">2,458</span>
          <span className="text-gray-500 ml-1">travelers online</span>
        </div>
        <div className="h-4 w-px bg-gray-200" />
        <div className="flex items-center">
          <Activity className="h-5 w-5 text-blue-500 mr-2" />
          <span className="font-semibold">847</span>
          <span className="text-gray-500 ml-1">active now</span>
        </div>
      </div>
    </div>
  );
}