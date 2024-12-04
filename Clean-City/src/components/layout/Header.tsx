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

          {/* Mobile menu button */}
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

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <button
                  onClick={() => scrollToSection('report-waste')}
                  className="hover:text-primary-200"
                >
                  Report Waste
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="hover:text-primary-200"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('dashboard')}
                  className="hover:text-primary-200"
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
                      className="hover:text-primary-200"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={onAuthClick}
                    className="hover:text-primary-200"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('report-waste')}
                  className="hover:text-primary-200 w-full text-left"
                >
                  Report Waste
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="hover:text-primary-200 w-full text-left"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('dashboard')}
                  className="hover:text-primary-200 w-full text-left"
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
                      className="hover:text-primary-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={onAuthClick}
                    className="hover:text-primary-200 w-full text-left"
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