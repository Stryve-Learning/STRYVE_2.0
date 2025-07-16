import React, { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import EnrollButton from "../components/EnrollButton";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [showFAQ, setShowFAQ] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Competition Math 1",
      ageGroup: "Recommended: Grades 3-5",
      description:
        "This course is for students who are eager to grow their skills in competitive math, timed math, and improve their knowledge on mathematical skills as a whole. This course will go over the different math competitions and what to do for them, like Math Kangaroo, North South Foundation, and MOEMS. Math can be really rewarding when you see yourself winning that shiny trophy in NSF, to getting those pins in MOEMS. Math is the foundation for many more concepts in the future, like programming, data science, analytics, statistics, and more. ",
      schedule: "Tuesdays, 2:00-3:00 PM",
      duration: "5 weeks",
      color: "bg-blue-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1Mzk1MTE4?cjc=hh3o7sav",
      image: "/classroom-banners/comp_math_1_banner.png",
    },
    {
      id: 2,
      title: "Competition Math 2",
      ageGroup: "Recommended: Grades 6-8",
      description:
        "If you’re in middle school, or an aspiring 5th grader who wants to compete in high level competitions like MathCounts, AMC 8, New England Math League, and Math Kangaroo, this course is for you! We will be teaching crucial concepts and tips/tricks to help you achieve higher scores on these competitions. This course is taught by teachers who have ranked highly in these competitions, so you’re in good hands.",
      schedule: "Mondays, 3:00 PM-4:00 PM",
      duration: "5 weeks",
      color: "bg-blue-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1NjAwODIw?cjc=wdehboeq",
      image: "/classroom-banners/comp_math_2_banner.png",
    },
    {
      id: 3,
      title: "Stocks/Financial Literacy",
      ageGroup: "Recommended: Grades 4-8",
      description:
        "This course provides students with a practical foundation in personal finance and investing. Through interactive lessons and real-world scenarios, students will develop essential skills in saving, budgeting, spending wisely, banking, credit, and exploring the fundamentals of investing and entrepreneurship. The course empowers students to make informed financial decisions and equips them with the tools to manage their money now and in the future confidently.",
      schedule: "Wednesdays, 2:00-3:00 PM",
      duration: "5 weeks",
      color: "bg-red-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1NzA5ODgz?cjc=27pgvqhn",
      image: "/classroom-banners/stocks_banner.png",
    },
    {
      id: 4,
      title: "Fundamentals of Python",
      ageGroup: "Recommended: Grades 4-8",
      description:
        "This course is a beginner-friendly introduction to programming with Python, designed to help students build a strong foundation in coding. It covers core concepts such as data types (like integers, strings, and booleans), variables, user input and output, conditional statements, loops (for and while), and basic data structures including lists and dictionaries. The course emphasizes logical thinking, problem-solving skills, and writing clear, readable programs. No prior coding experience is required, making it ideal for those who are new to programming and looking to gain confidence in Python. This will be a fun introductory course to the language and incorporate fun aspects of coding with real life experien",
      schedule: "Fridays, 2:00-3:00 PM",
      duration: "5 weeks",
      color: "bg-red-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1Nzc2NjAy?cjc=kowwfevq",
      image: "/classroom-banners/python_banner.png",
    },
    {
      id: 5,
      title: "Astronomy",
      ageGroup: "All Ages",
      description:
        "This course is a beginner friendly introduction to astronomy, focusing on the basic science behind how the universe works. Students will learn about things like gravity, how planets move, why stars shine, and what black holes are. The class explains big space ideas using simple language and basic physics. We will look at how the Sun, Moon, planets, and stars behave, and how forces like gravity are an essential force that holds everything in place. No hard stuff, just a curiosity and a love for space. This course is perfect for anyone who wants to understand the universe a little better, even if they’ve never studied science before.",
      schedule: "Tuesdays, 11:00 AM-12:00 PM",
      duration: "5 weeks",
      color: "bg-purple-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1NzE1ODgz?cjc=hlxptmhy",
      image: "/classroom-banners/astronomy_banner.png",
    },
    {
      id: 6,
      title: "Public Speaking",
      ageGroup: "Recommended: Grades 5-8",
      description:
        "This course is designed to help students feel more comfortable and confident when speaking in front of others. Through supportive practice and interactive activities in a no-judgement zone, students will learn how to organize their ideas, speak clearly, and connect with their audience. Whether presenting in class or sharing ideas in everyday conversations, students will build essential communication skills. We are hoping that by the end of this course, students will feel more at ease expressing themselves and be empowered to speak with confidence in any setting.",
      schedule: "Mondays, 2:00-3:00 PM",
      duration: "5 weeks",
      color: "bg-green-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1NzYzNDI3?cjc=uddjx3pl",
      image: "/Screenshot 2025-07-11 at 11.03.02 PM.png",
    },
    {
      id: 7,
      title: "Cybersecurity for Kids",
      ageGroup: "Recommended: Grades 3-6",
      description:
        "In an increasingly connected world, understanding how to stay safe online is more important than ever. This course introduces students to the fundamentals of cybersecurity, including why it matters and how it impacts our daily lives. Students will explore the importance of strong passwords, how to recognize phishing attempts through emails, links, and pop-ups, and how to identify and handle online risks. Through engaging lessons and real-world examples, students will develop strong digital habits and gain the confidence to navigate the internet safely and responsibly in a fun manner.",
      schedule: "Tuesdays, 3:00-4:00 PM",
      duration: "5 weeks",
      color: "bg-blue-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc2MDIxMDg3?cjc=5mlsbi2v",
      image: "/Screenshot 2025-07-11 at 11.05.57 PM.png",
    },
    {
      id: 8,
      title: "Physical Science: Forces & Motion",
      ageGroup: "Recommended: Grades 5-8",
      description:
        "This course introduces middle school students to the basics of forces and motion in physical science. Students will explore the concept of forces, their effects on motion, and the distinctions between contact and non-contact forces, as well as kinetic and potential energy. They will learn Newton’s three laws of motion, covering inertia, the relationship between force, mass, and acceleration, and action-reaction pairs, and apply these concepts to understand real-life phenomena like friction, momentum, speed, and velocity. Along the way, students will also practice using free-body diagrams and energy flow charts to visualize forces and motion.",
      schedule: "Mondays, 11:00 AM-12:00 PM",
      duration: "5 weeks",
      color: "bg-green-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc2MDU2NzQ5?cjc=4gchkjgp",
      image: "/classroom-banners/physics_banner.png",
    },
    {
      id: 9,
      title: "Medicine/Biology",
      ageGroup: "Recommended: Grades 5-8",
      description:
        "This course works to get students interested about the world of Healthcare and Medicine. Students will work to explore various different career paths and specialties, researching what piques their own interest, all while growing their own knowledge on the human body and all of its systems.",
      schedule: "Thursdays, 3:00-4:00 PM",
      duration: "5 weeks",
      color: "bg-green-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1ODA5Mzc4?cjc=n7qafgk4",
      image: "/Screenshot 2025-07-11 at 11.06.06 PM.png",
    },
    {
      id: 10,
      title: "3D Modeling",
      ageGroup: "Recommended: Grades 6-8",
      description:
        "This course covers a variety of topics including the importance and relevance of CAD/ 3D Design in a real world point of view. Students get to learn and explore possible career paths containing the art of computer aided design and understand its crucial relevancy. This course also walks through a beginner friendly program on OnShape teaching students the fundamentals of 3D Design. Through step-by-step walk throughs and interactive practice models, this course is an engaging and fun start into the world of Engineering.",
      schedule: "Thursdays, 11:00 AM-12:00 PM",
      duration: "5 weeks",
      color: "bg-green-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1Nzk2NTA5?cjc=7fclrzof",
    },
    {
      id: 11,
      title: "Intro to AI & Machine Learning",
      ageGroup: "Recommended: Grades 6-8",
      description:
        "In this course, students will explore how machines “learn” from data, the basics of neural networks, and real-world applications like image recognition and chatbots. Through hands-on projects and fun challenges, students will gain a solid foundation in how AI works with no prior coding experience needed! Whether you are interested in building smart apps or just curious about the future of technology, this class is your launchpad into the world of artificial intelligence and is an investment for your future.",
      schedule: "Wednesdays, 11:00 AM-12:00 PM",
      duration: "5 weeks",
      color: "bg-green-500",
      classroomLink:
        "https://classroom.google.com/c/Nzg4NTc1ODY4NDk2?cjc=aa3dn3uy",
    },
  ];

  const faqs = [
    {
      question: "How do I enroll my child in a course?",
      answer:
        'Click the "Enroll via Google Classroom" button on any course card. This will take you directly to the Google Classroom where you can join the class and access all course materials.',
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most beginner courses have no prerequisites. For intermediate and advanced courses, we recommend having completed the prerequisite skills or previous courses. Check the course description for specific requirements.",
    },
    {
      question: "What if my child misses a class?",
      answer:
        "All classes are recorded and available in Google Classroom. Students can catch up on missed content and submit assignments at their own pace.",
    },
    {
      question: "How much do the courses cost?",
      answer:
        "We offer sliding scale pricing starting at $15 per session. Many courses are also available for free through our scholarship program. Contact us for financial assistance options.",
    },
    {
      question: "Can I get a refund if my child doesn't like the course?",
      answer:
        "Yes! We offer a 100% refund within the first week of any course. We want every student to find the right fit for their learning style.",
    },
  ];

  const grades = [
    "all",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "All Ages",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesGrade = false;
    if (selectedGrade === "all") {
      matchesGrade = true;
    } else if (course.ageGroup === "All Ages") {
      matchesGrade = true; // All Ages courses show for any grade selection
    } else if (selectedGrade === "All Ages") {
      matchesGrade = course.ageGroup === "All Ages";
    } else {
      // Extract grade numbers from the course's ageGroup (e.g., "Grades 3-5" or "Grades 6-8")
      const gradeMatch = course.ageGroup.match(/Grades?\s+(\d+)(?:-(\d+))?/);
      if (gradeMatch) {
        const startGrade = parseInt(gradeMatch[1]);
        const endGrade = gradeMatch[2] ? parseInt(gradeMatch[2]) : startGrade;
        const selectedGradeNum = parseInt(selectedGrade.replace("Grade ", ""));
        matchesGrade =
          selectedGradeNum >= startGrade && selectedGradeNum <= endGrade;
      }
    }

    return matchesSearch && matchesGrade;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Courses
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-blue-100">
            Choose from our comprehensive range of courses designed to help
            students excel
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="all">All Grades</option>
                {grades.slice(1).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {course.image ? (
                  <div className="h-32 relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-800 font-medium">
                      {course.ageGroup}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${course.color} h-32 flex items-center justify-center relative`}
                  >
                    <div className="text-white text-center">
                      <h3 className="text-base font-bold">{course.subject}</h3>
                      <span className="text-sm opacity-90">{course.level}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                      {course.ageGroup}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.schedule}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {course.capacity} • {course.duration}
                    </div>
                  </div>

                  <EnrollButton classroomLink={course.classroomLink} />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Click to join the class directly
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <Filter className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg">
                  No courses found matching your criteria
                </p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setShowFAQ(showFAQ === index ? false : index)}
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {showFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {showFAQ === index && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stryve Learning 2.0 Logo at Bottom */}
      <div className="flex justify-center py-12">
        <img
          src="/STRYVE Learning 2.0.png"
          alt="STRYVE Learning 2.0 Logo"
          className="max-w-xs md:max-w-md lg:max-w-lg w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default CoursesPage;
