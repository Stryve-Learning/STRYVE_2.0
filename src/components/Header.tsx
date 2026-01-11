import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./MyComponent.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header role="banner" className="flex items-center justify-between px-4 py-3 border-b">
      {/* Logo */}
      <div className="brand flex items-center gap-1">
        <img
          className="logo w-12 h-12 rounded-lg bg-transparent filter grayscale brightness-200 contrast-100"
          src="/CAPITAL S.png"
          alt="Stryve Learning logo"
        />
        <div>
          <div style={{ fontWeight: 600, color: "#ffffffff", fontSize: "20px" }}>
            Stryve Learning
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
<div className="hidden md:flex items-center flex-1">
  {/* Navigation links centered */}
  <nav className="flex items-center gap-6 mx-auto pl-16">
    {navigation.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive(item.href)
            ? "text-indigo-500"
            : "text-white hover:text-indigo-500"
        }`}
      >
        {item.name}
      </Link>
    ))}
  </nav>

  {/* Auth Buttons on the right */}
  <div className="flex items-center gap-2 ml-auto">
    <Link
      to="/login"
      className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-500 hover:border-indigo-600"
    >
      Login
    </Link>
    <Link
      to="/signup"
      className="px-3 py-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-400"
    >
      Get Started
    </Link>
  </div>
</div>


      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-indigo-500 bg-blue-600/10"
                    : "text-gray-700 hover:text-indigo-500 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col space-y-2 mt-4">
          {/* Login button */}
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>

          {/* Get Started button */}
          <Link
            to="/signup"
            className="px-4 py-2 rounded-md bg-[#1F4E79] text-white hover:bg-[#163C5A] font-semibold transition-colors duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
