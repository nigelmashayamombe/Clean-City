import React from 'react';
import { EventCard } from './EventCard';
import { CleanupEvent } from '../../types';

const mockEvents: CleanupEvent[] = [
  {
    id: '1',
    title: 'Cowdray Park Cleanup Day',
    description: 'Join us for a community cleanup event in the Esigodweni area in Cowdray Park.',
    date: new Date('2024-07-20'),
    location: {
      latitude: 0,
      longitude: 0,
      address: '123 Main St, Downtown'
    },
    organizer: 'Bulawayo City Council',
    participants: ['user1', 'user2', 'user3']
  },
  {
    id: '2',
    title: 'Centenary Park Restoration Project',
    description: 'Help us restore ,rennovate and clean the local centenary park.',
    date: new Date('2024-03-25'),
    location: {
      latitude: 0,
      longitude: 0,
      address: 'Centenary Park, Bulawayo'
    },
    organizer: 'Bulawayo City Council and Environmental Management Agency',
    participants: ['user4', 'user5']
  },
  {
    id: '3',
    title: 'National Cleanup Campaign',
    description: 'Join us for a community cleanup event in the Esigodweni area in Cowdray Park.',
    date: new Date('2024-12-06'),
    location: {
      latitude: 0,
      longitude: 0,
      address: 'Bulawayo City'
    },
    organizer: 'Bulawayo City Council , EMA , Green Energy Solutions ,Ministry of Environment ,AFG',
    participants: ['user1', 'user2', 'user3']
  },
];

export function EventList() {
  const handleJoinEvent = (eventId: string) => {
    // Handle event join logic
    console.log('Joining event:', eventId);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onJoin={handleJoinEvent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}