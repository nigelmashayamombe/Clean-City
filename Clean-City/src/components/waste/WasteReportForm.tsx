import React, { useState } from 'react';
import { MapPin, Camera, Send } from 'lucide-react';
import { useGeolocation } from '../../hooks/useGeolocation';

export function WasteReportForm() {
  const [description, setDescription] = useState('');
  const { location, error: locationError } = useGeolocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Report Waste</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            rows={4}
            placeholder="Describe the waste issue..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-5 w-5 text-emerald-600" />
            {location ? (
              <span>Location detected</span>
            ) : locationError ? (
              <span className="text-red-600">Error detecting location</span>
            ) : (
              <span>Detecting location...</span>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photo
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-50">
              <Camera className="h-12 w-12 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Add a photo</span>
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          <Send className="h-5 w-5" />
          <span>Submit Report</span>
        </button>
      </form>
    </div>
  );
}