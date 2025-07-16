// ContactPage.tsx

import React, { useState } from 'react';
import { Mail, Clock, MessageCircle, HelpCircle, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactPage = () => {
  const [showHelp, setShowHelp] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'stryvelearning@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '9AM - 9PM EST',
      description: 'Monday through Sunday'
    }
  ];

  const socialMedia = [
    {
      platform: 'Instagram',
      handle: '@stryvelearning',
      icon: Instagram,
      url: 'https://instagram.com/stryvelearning',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    {
      platform: 'Twitter',
      handle: '@stryvelearning',
      icon: Twitter,
      url: 'https://twitter.com/stryvelearning',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'
    },
    {
      platform: 'Facebook',
      handle: '@stryveleaning',
      icon: Facebook,
      url: 'https://facebook.com/stryveleaning',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
    }
  ];

  const quickHelp = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Visit our Courses page and click "Enroll via Google Classroom" on any course that interests you.'
    },
    {
      question: 'How do online sessions work?',
      answer: 'We use Google Classroom and Google Meet for our online sessions. All materials are provided digitally.'
    },
    {
      question: 'How much do the sessions cost?',
      answer: 'They are all FREE!'
    },
    {
      question: 'Can I enroll in more than one course?',
      answer: 'Yes, you can enroll in how many ever courses you want!'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-blue-100">
            We're here to help you succeed. Reach out with any questions or to get started!
          </p>
        </div>
      </section>

      {/* Social Media & Contact Info */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Connect With Us</h2>
              <p className="text-gray-600 text-center mb-8">
                Follow us on social media for updates, tips, and extra fun facts!
              </p>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-4 group`}
                  >
                    <div className="bg-white/20 rounded-full p-3">
                      <social.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{social.platform}</h3>
                      <p className="text-white/90 font-medium">{social.handle}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-600">
                  <strong>Pro tip:</strong> Tag us in your posts to be featured on our story!
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-full p-3">
                        <info.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-800 font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions or get help right away
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickHelp.map((help, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{help.question}</h3>
                <p className="text-gray-600">{help.answer}</p>
              </div>
            ))}
          </div>

          {/* Floating Help Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
            >
              <HelpCircle className="h-6 w-6" />
            </button>
            {showHelp && (
              <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-80 border">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We're here to help! Choose how you'd like to get in touch:
                </p>
                <div className="space-y-2">
                  <button className="w-full text-left text-purple-600 hover:bg-purple-50 p-2 rounded text-sm">
                    📧 Send us an email
                  </button>
                  <button className="w-full text-left text-purple-600 hover:bg-purple-50 p-2 rounded text-sm">
                    📞 Schedule a call
                  </button>
                  <button className="w-full text-left text-purple-600 hover:bg-purple-50 p-2 rounded text-sm">
                    💬 Live chat (coming soon)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
