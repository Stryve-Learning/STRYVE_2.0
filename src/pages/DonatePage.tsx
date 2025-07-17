import React from "react";
import {
  Heart,
  BookOpen,
  Users,
  Target,
  Gift,
  DollarSign,
  QrCode,
} from "lucide-react";

const DonatePage = () => {
  const impactStats = [
    {
      icon: Users,
      value: "4000+",
      label: "Enrollments",
      description: "Free tutoring sessions provided",
    },
    {
      icon: BookOpen,
      value: "100+",
      label: "Volunteer Hours",
      description: "Donated by our student tutors",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-pink-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-blue-100">
            Help us provide quality education to students who need it most
          </p>
        </div>
      </section>

      {/* Mission Impact */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Your Donation Matters
              </h2>
              <p className="text-gray-600 mb-6">
                Every dollar you donate directly impacts a student's educational
                journey. Your support helps us:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Provide Free Tutoring
                    </h3>
                    <p className="text-gray-600">
                      Give students access to high-quality tutoring regardless
                      of their financial situation
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Expand Our Reach
                    </h3>
                    <p className="text-gray-600">
                      Serve more students in underserved communities and rural
                      areas
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Improve Technology
                    </h3>
                    <p className="text-gray-600">
                      Upgrade our online learning platform and provide better
                      resources
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-2">
                    <Gift className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Support Student Tutors
                    </h3>
                    <p className="text-gray-600">
                      Provide materials and training for our volunteer student
                      tutors
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Our Impact So Far
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <h4 className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </h4>
                      <p className="text-sm font-semibold text-gray-700">
                        {stat.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-center mb-8">
              Donation Methods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                  <DollarSign className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">PayPal</h4>
                <p className="text-gray-600 mb-4">
                  Quick and secure online donations
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  Donate via PayPal
                </button>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-6 mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                  <QrCode className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Venmo</h4>
                <p className="text-gray-600 mb-4">@stryvelearning</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md">
                  Scan QR Code
                </button>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-6 mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                  <Gift className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Other Ways</h4>
                <p className="text-gray-600 mb-4">
                  Bank transfer, check, or crypto
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors shadow-md">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Your donation, no matter the size, helps a student achieve their
            academic dreams. Join us in building a brighter future through
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
