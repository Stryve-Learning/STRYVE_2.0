import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  GraduationCap,
  MessageCircle,
  Star,
  Quote,
} from "lucide-react";

const HomePage = () => {
  const quickActions = [
    {
      icon: Users,
      label: "Meet the Tutors",
      href: "/about",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: GraduationCap,
      label: "Enroll Now",
      href: "/courses",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: MessageCircle,
      label: "Contact Us",
      href: "/contact",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const studentVoices = [
    {
      name: "Venkatesh, Grade 7",
      quote:
        "Very useful tips and tricks to help you finish problems faster in math competitions.",
      color: "bg-purple-100 border-purple-200",
    },
    {
      name: "Joel, Grade 5",
      quote:
        "I learned a lot of important things to be aware of when writing code.",
      color: "bg-blue-100 border-blue-200",
    },
    {
      name: "Adhvika, Grade 6",
      quote: "Astronomy feels so much more fun now!",
      color: "bg-purple-100 border-purple-200",
    },
    {
      name: "Aditya, Grade 5",
      quote:
        "Learning how to analyze the market and the basics of it was interesting but cool!",
      color: "bg-blue-100 border-blue-200",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 text-gray-900 py-20 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col items-center mb-6">
              <img
                src="/6B8E992F-0885-47A0-8B1C-A8F7B8B0C908.png"
                alt="Stryve Learning Logo"
                className="h-32 md:h-40 w-auto"
              />
            </div>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-600">
              Built for Students. Designed for Parents. Powered by Passion.
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 bg-gradient-to-r from-purple-300 via-blue-200 to-purple-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.href}
                  className={`${action.color} text-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200`}
                >
                  <action.icon className="h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold">{action.label}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Student Voices */}
        <section className="py-16 bg-gradient-to-br from-blue-300 via-purple-100 to-purple-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Student Voices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {studentVoices.map((voice, index) => (
                <div
                  key={index}
                  className={`${voice.color} border-2 p-6 rounded-lg relative`}
                >
                  <Quote className="h-6 w-6 text-gray-400 mb-2" />
                  <p className="text-gray-800 mb-4 font-medium">
                    "{voice.quote}"
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    — {voice.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-700 via-blue-700 to-purple-800 text-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students who have transformed their academic
              performance
            </p>
            <Link
              to="/courses"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block shadow-md"
            >
              Explore Our Courses
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
