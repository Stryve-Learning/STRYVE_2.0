import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/files_1556947-1751755525948-IMG_5910-removebg-preview.png"
                alt="Stryve Learning"
                className="h-32 w-32"
              />
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/stryvelearningfb/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.x.com/stryvelearning"
                target="_blank"
                rel="noopener noreferrer"
                className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/stryvelearning"
                target="_blank"
                rel="noopener noreferrer"
                className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 mr-16">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">
                  stryvelearning@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">+1 (860) 368-1538</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">South Windsor, CT, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Stryve Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
