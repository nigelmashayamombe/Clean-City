import React from 'react';
import { ImageCarousel } from './ImageCarousel';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-primary-700">
      <ImageCarousel />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Together for a Cleaner Community
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Join our mission to keep our city clean and sustainable. Report waste, organize cleanup events, and make a difference in your community.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('report-waste')}
                className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Report Waste
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Join Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}