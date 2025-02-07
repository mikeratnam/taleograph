import React, { useState } from 'react';
import { MapPin, Compass, Users } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  image: string;
}

const popularDestinations: Destination[] = [
  { id: 1, name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "New York, USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Machu Picchu, Peru", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Dubai, UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
];

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    travelStyle: '',
    interests: [] as string[],
    dreamDestinations: [] as number[]
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit data and redirect to subscription
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleDestinationToggle = (id: number) => {
    setFormData(prev => ({
      ...prev,
      dreamDestinations: prev.dreamDestinations.length < 5 || prev.dreamDestinations.includes(id)
        ? prev.dreamDestinations.includes(id)
          ? prev.dreamDestinations.filter(d => d !== id)
          : [...prev.dreamDestinations, id]
        : prev.dreamDestinations
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Compass className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Welcome to TaleoGraph</h2>
          <p className="mt-2 text-gray-600">Let's personalize your travel experience</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex items-center ${s < step ? 'text-blue-600' : s === step ? 'text-gray-900' : 'text-gray-400'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  s < step ? 'bg-blue-600 text-white' : s === step ? 'border-2 border-blue-600' : 'border-2 border-gray-200'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-full h-1 mx-2 ${s < step ? 'bg-blue-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">How do you prefer to travel?</label>
                <select
                  value={formData.travelStyle}
                  onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select your travel style</option>
                  <option value="solo">Solo Adventure</option>
                  <option value="couple">As a Couple</option>
                  <option value="family">With Family</option>
                  <option value="friends">With Friends</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Interests */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">What interests you most while traveling?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Culture & History',
                  'Food & Cuisine',
                  'Nature & Outdoors',
                  'Photography',
                  'Adventure Sports',
                  'Local Experiences',
                  'Relaxation',
                  'Nightlife'
                ].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-4 rounded-lg border-2 text-left ${
                      formData.interests.includes(interest)
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Dream Destinations */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Choose up to 5 dream destinations
                <span className="text-sm text-gray-500 ml-2">
                  ({formData.dreamDestinations.length}/5 selected)
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {popularDestinations.map((destination) => (
                  <button
                    key={destination.id}
                    onClick={() => handleDestinationToggle(destination.id)}
                    className={`relative overflow-hidden rounded-lg ${
                      formData.dreamDestinations.includes(destination.id)
                        ? 'ring-2 ring-blue-600'
                        : ''
                    }`}
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="text-white font-medium">{destination.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mr-4 px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              {step === 3 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}