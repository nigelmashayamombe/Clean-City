import React, { useState } from 'react';
import { Trash2, Menu, X } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

interface HeaderProps {
  onAuthClick: () => void;
}

export function Header({ onAuthClick }: HeaderProps) {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trash2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">MyCleanCity</h1>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <button
                  onClick={() => scrollToSection('report-waste')}
                  className="hover:text-primary-200 transition-colors"
                >
                  Report Waste
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="hover:text-primary-200 transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('dashboard')}
                  className="hover:text-primary-200 transition-colors"
                >
                  Dashboard
                </button>
              </li>
              {user ? (
                <>
                  <li className="hover:text-primary-200">
                    Welcome, {user.name}
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="hover:text-primary-200 transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={onAuthClick}
                    className="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('report-waste')}
                  className="hover:text-primary-200 transition-colors w-full text-left"
                >
                  Report Waste
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="hover:text-primary-200 transition-colors w-full text-left"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('dashboard')}
                  className="hover:text-primary-200 transition-colors w-full text-left"
                >
                  Dashboard
                </button>
              </li>
              {user ? (
                <>
                  <li className="hover:text-primary-200">
                    Welcome, {user.name}
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="hover:text-primary-200 transition-colors w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={onAuthClick}
                    className="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors w-full"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}