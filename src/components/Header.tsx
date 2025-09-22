import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './MyComponent.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Donate', href: '/donate' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="app" role="application" aria-label="Stryve Learning">
      <header>
        <div className="brand">
          <img
            className="logo"
            src="/files_1556947-1751755525948-IMG_5910-removebg-preview.png"
            alt="Stryve Learning logo"
          />
          <div>
            <div style={{ fontWeight: 800, color: 'rgb(99, 102, 241)' }}>
              Stryve Learning
            </div>
            <div
              className="muted"
              style={{ marginTop: '2px', fontSize: '12px' }}
            >
              Learn — Practice — Master
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-indigo-500 bg-blue-600/10'
                  : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-indigo-500 bg-blue-600/10'
                      : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
