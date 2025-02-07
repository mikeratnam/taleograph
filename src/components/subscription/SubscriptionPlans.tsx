import React from 'react';
import { Check, Star, Compass, Globe } from 'lucide-react';

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    features: [
      'Basic travel profile',
      'Join public travel groups',
      'View community posts',
      'Basic destination guides'
    ],
    icon: Compass,
    color: 'border-gray-200'
  },
  {
    name: 'Adventurer',
    price: '$9.99/mo',
    features: [
      'All Explorer features',
      'Create private travel groups',
      'Access premium guides',
      'Trip planning tools',
      'Priority support'
    ],
    icon: Star,
    color: 'border-blue-600',
    popular: true
  },
  {
    name: 'Globetrotter',
    price: '$19.99/mo',
    features: [
      'All Adventurer features',
      'Exclusive travel deals',
      'Personal travel concierge',
      'Advanced analytics',
      'Custom itineraries',
      'Business networking'
    ],
    icon: Globe,
    color: 'border-purple-600'
  }
];

export default function SubscriptionPlans() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Travel Journey</h2>
        <p className="text-gray-600 mb-12">Select the plan that best fits your travel style</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm p-8 border-2 ${plan.color} ${
                  plan.popular ? 'transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-blue-600' : 'bg-gray-100'
                }`}>
                  <PlanIcon className={`h-6 w-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">{plan.price}</p>
                <p className="mt-1 text-sm text-gray-500">per month</p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full px-6 py-3 rounded-full ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}