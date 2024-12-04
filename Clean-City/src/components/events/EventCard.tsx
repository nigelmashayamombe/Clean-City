import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { CleanupEvent } from '../../types';

interface EventCardProps {
  event: CleanupEvent;
  onJoin: (eventId: string) => void;
}

export function EventCard({ event, onJoin }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location.address}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-2" />
            {event.participants.length} participants
          </div>
        </div>

        <button
          onClick={() => onJoin(event.id)}
          className="mt-4 w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          Join Event
        </button>
      </div>
    </div>
  );
}