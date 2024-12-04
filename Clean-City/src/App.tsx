import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { WasteReportForm } from './components/waste/WasteReportForm';
import { EventList } from './components/events/EventList';
import { DashboardStats } from './components/dashboard/DashboardStats';
import { AuthProvider } from './components/auth/AuthContext';
import { AuthModal } from './components/auth/AuthModal';
import { Feedback } from './components/feedback/Feedback';

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Toaster position="top-right" />
        <Header onAuthClick={() => setIsAuthModalOpen(true)} />
        <main className="flex-grow">
          <Hero />
          <Features />
          <section id="report-waste" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                <WasteReportForm />
                <Feedback />
              </div>
            </div>
          </section>
          <section id="events">
            <EventList />
          </section>
          <section id="dashboard" className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
              <DashboardStats />
            </div>
          </section>
        </main>
        <Footer />
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </AuthProvider>
  );
}