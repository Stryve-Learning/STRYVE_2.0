import React from "react";
import {
  BookOpen,
  Code,
  Mic,
  Calculator,
  Users,
  Target,
  Heart,
} from "lucide-react";

const AboutPage = () => {
  const tutors = [
    {
      name: "Saisatvik Koppu",
      subjects: [
        "Competition Math 2",
        "Python Fundamentals",
        "Public Speaking",
      ],
      bio: "Hey guys! My name is Saisatvik, or “Satvik” for short, and I'm an upcoming sophomore at South Windsor High School. Since a young age, I've always been interested in Computer Science & Mathematics and always liked explaining to people how to deliver their ideas, no matter the topic. My leadership and high placement in clubs like Science Olympiad, FBLA, and numerous past mathematical competitions qualify me for this role as I know I can deliver your students a pleasurable output necessary for the future. As I have tutored students in the past, I can assure you that I am committed to making learning engaging and tailored to your strengths. I will be instructing you guys in the content of Competition Math 2, Python Fundamentals, and Public Speaking.",
      color: "bg-blue-500",
      icon: Code,
      tags: ["📊 Math", "🐍 Python", "🎤 Speaking"],
      photo: "/Personal Pictures/Saisatvik Koppu.JPEG",
    },
    {
      name: "Saikiran Radhakrishnan",
      subjects: ["Python", "Physics", "AI / Machine Learning"],
      bio: "Hi everyone, my name is Saikiran and I'm a rising sophomore at South Windsor High School and part of the class of 2028. I have an interest in math, science, and AI but I'm particularly interested in robotic engineering. I've participated in the First Lego League and the First Robotics Competition. I will be teaching Python, Physics, and AI/machine learning. I hope to see you all in class!",
      color: "bg-red-500",
      icon: Mic,
      tags: ["🐍 Python", "⚗️ Physical Science", "🧠 AI & Machine Learning"],
      photo: "/Personal Pictures/Saikiran Radhakrishnan.JPEG",
    },
    {
      name: "Vikruthya Hariharan",
      subjects: [
        "Stocks / Financial Literacy",
        "Public Speaking",
        "Cybersecurity",
      ],
      bio: "Hi everyone! Welcome to STRYVE Learning! My name is Vikruthya Hariharan, and I’m a rising sophomore at South Windsor High School. I’m incredibly passionate about giving back to the community and supporting other students. I’ve always had a strong interest in both Business and STEM, and through STRYVE, I’m excited to share what I’ve learned while also continuing to grow as a mentor and leader. I’ve participated in various FIRST robotics events and am an active member of Future Business Leaders of America (FBLA). This summer, I’ll be teaching Stocks/Financial Literacy, Public Speaking, and Cybersecurity. I’m looking forward to seeing all of you in my classes!",
      color: "bg-purple-500",
      icon: Calculator,
      tags: [
        "💼 Stocks / Financial Literacy",
        "🎤 Public Speaking",
        "🔐 Cybersecurity",
      ],
      photo: "/Personal Pictures/Vikruthya Hariharan.JPEG",
    },
    {
      name: "Rahul Esaimani",
      subjects: ["Computer-Aided Design (CAD)", "Astronomy"],
      bio: "Hey, I am Rahul! As an upcoming sophomore at South Windsor High School, I bring a strong academic focus and enthusiasm for STEM education to my role at Stryve Learning. My goal is to ignite intellectual curiosity in the students I mentor, while continuing to expand my own technical and scientific capabilities. My involvement in many different clubs and activities, such as, FBLA (Future Business Leaders of America), Robotics, and Science Olympiad has shaped my perspective on innovation, precision, and leadership. At Stryve, I specialize in Computer-Aided Design (CAD) and Astronomy. I “Stryve” to produce an engaging but intellectual learning environment.",
      color: "bg-green-500",
      icon: BookOpen,
      tags: ["🔧 Computer-Aided Design (CAD)", "🌌 Astronomy"],
    },
    {
      name: "Gian Handa",
      subjects: ["Competition Math 1", "Astronomy", "AI / Machine Learning"],
      bio: "'My name is Gian, and I am an upcoming sophomore at South Windsor High School. STRYVE is a program where we aim to build a community of like-minded individuals, where knowledge is accessible to all, and I strive to make this vision a reality. I will be teaching Astronomy and Cosmology, and AI/Machine Learning. My strengths within the realm of mathematics and applied sciences make me a well-qualified candidate for this. Additionally, I have participated in the Math Team and the Science Olympiad, both of which I have medalled and placed quite well in. I look forward to assisting in the intellectual development of many like-minded individuals, so please do give our program a try. I will be teaching Competition Math 1, Astronomy, and AI/Machine learning.",
      color: "bg-teal-500",
      icon: Calculator,
      tags: [
        "🧮 Competition Math 1",
        "🌌 Astronomy",
        "🧠 AI & Machine Learning",
      ],
    },
    {
      name: "Maanit Pande",
      subjects: ["Stocks / Financial Literacy", "Physical Science"],
      bio: "Hello, my name is Maanit Pande, and I am a rising sophomore at South Windsor High School. I am excited to have the opportunity to teach with STRYVE, as I am deeply passionate about finance and business education. I believe that financial literacy is an essential skill that supports people to make informed decisions and take control of their futures. Outside of the classroom, I am actively involved in several extracurricular organizations, including First Robotics, Future Business Leaders of America (FBLA), Model United Nations, and the Economics Club. Being part of these activities has helped me grow my leadership, creativity, and problem-solving skills, and I’m excited to bring those to my role as a teacher. I will be teaching Stocks/Financial Literacy and Physical Science.",
      color: "bg-orange-500",
      icon: BookOpen,
      tags: ["💼 Stocks / Financial Literacy", "⚗️ Physical Science"],
      photo: "/Personal Pictures/Maanit Pande.JPEG",
    },
    {
      name: "Anjani Nadimpalli",
      subjects: ["Competition Math 1", "Medicine / Biology"],
      bio: "Hi! My name is Anjani Nadimpalli and I am a rising sophomore at South Windsor High School. I am passionate and interested in teaching students skills they need for school and the real world. I compete in the Science Olympiad, First Robotics Competitions, MOEMS, AMC, MathCounts, and the SWHS math team. I’m excited to teach my knowledge and empower the younger generation!  I will be teaching Competition Math 1 and Medicine/Biology.",
      color: "bg-amber-500",
      icon: BookOpen,
      tags: ["🧮 Competition Math 1", "�� Medicine / Biology"],
      photo: "/Personal Pictures/Anjani Nadimpalli.JPEG",
    },
    {
      name: "Abhipsa Pattnaik",
      subjects: ["Computer-Aided Design (CAD)", "Medicine / Biology"],
      bio: "Hi! I’m Abhipsa Pattnaik, a rising sophomore at South Windsor High School and one of the tutors at Stryve Learning. I’ve always been passionate about STEM and science. Through Stryve, I hope to make learning fun for our students and grow my own skills. I’ve competed in various FIRST robotics events, and science olympiad invitationals. I hope to take the skills and understanding I developed, to give back to the community! I will be teaching CAD and Medicine/Biology. ",
      color: "bg-pink-500",
      icon: Code,
      tags: ["🔧 Computer-Aided Design (CAD)", "�� Medicine / Biology"],
      photo: "/Personal Pictures/Abhipsa Pattnaik.JPEG",
    },
    {
      name: "Anishka Vejendla",
      subjects: ["Competition Math 2", "Cybersecurity"],
      bio: "Hi! I’m Anishka Vejendla, a rising sophomore passionate about innovation, problem-solving, and discovering how things work. I’m especially interested in robotics and media/marketing. I enjoy coming up with new ideas and helping others understand complex topics in a simple way. Through Stryve, I’m excited to create a space where younger students can explore, grow, and have fun while learning. I will be teaching Competition Math 2 and Cybersecurity.",
      color: "bg-indigo-500",
      icon: Calculator,
      tags: ["🧮 Competition Math 2", "🔐 Cybersecurity"],
      photo: "/Personal Pictures/Anishka Vejendla.PNG",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Stryve Learning
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-blue-100">
            We're students helping students achieve their academic dreams
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Stryve Learning was founded by a group of high-achieving
                students who noticed a significant trend in the vagueness of
                other tutoring services and wanted to bridge the gap and create
                FREE online tutoring, for more niche subjects. We believe that
                peer-to-peer learning creates a unique environment where
                students feel more comfortable asking questions and taking
                risks.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small idea turned into a national success,
                amassing 4000 enrollments in our most recent year. We're not
                just tutors, we are students ourselves and know how to teach as
                we've overcame that sturggle before.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 mb-2 w-16 h-16 flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Students Helped</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 mb-2 w-16 h-16 flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">1000+</h3>
                  <p className="text-sm text-gray-600">Volunteer Hours</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                At Stryve Learning, we are a youth-led tutoring and enrichment
                non-profit organization committed to making education
                accessible, engaging, and empowering for young children. Our
                mission is to create a supportive environment where students
                feel confident, curious, and motivated to grow, both
                academically and personally. By connecting passionate teen
                mentors with eager young learners, we aim to build strong
                foundations, inspire lifelong learning, and foster meaningful
                community impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Personalized learning approaches
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">FREE programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Building confidence and academic skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Tutors */}
      <section className="py-16 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Tutors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {tutor.photo && (
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tutor.grade}</p>
                  <p className="text-gray-700 text-sm mb-4">{tutor.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {tutor.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Stryve Learning?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Student-Led Learning
              </h3>
              <p className="text-gray-600">
                Our tutors are students themselves, creating a relatable and
                comfortable learning environment with modern teaching methods
                and more simplistic ways.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                <Heart className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Accessible & Affordable
              </h3>
              <p className="text-gray-600">
                Every class is FREE, and a person can join any number of classes
                to their liking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
