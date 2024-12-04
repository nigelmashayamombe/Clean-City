export interface WasteReport {
    id: string;
    description: string;
    location: {
      latitude: number;
      longitude: number;
    };
    imageUrl?: string;
    status: 'pending' | 'in-progress' | 'resolved';
    createdAt: Date;
    userId: string;
  }
  
  export interface CleanupEvent {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: {
      latitude: number;
      longitude: number;
      address: string;
    };
    organizer: string;
    participants: string[];
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'authority' | 'admin';
  }