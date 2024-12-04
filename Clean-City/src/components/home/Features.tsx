import React from 'react';
import { MapPin, Calendar, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Easy Waste Reporting',
    description: 'Quickly report waste issues in your area with our simple reporting system.'
  },
  {
    icon: Calendar,
    title: 'Community Events',
    description: 'Join or organize local cleanup events and make a difference together.'
  },
  {
    icon: BarChart3,
    title: 'Impact Tracking',
    description: 'Monitor the progress and impact of community cleanup efforts.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <feature.icon className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}