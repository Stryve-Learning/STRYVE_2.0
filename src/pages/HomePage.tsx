import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import StudentVoiceItem from "../components/StudentVoiceItem";
import MathBackground from "../components/MathBackground";
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
      name: "Savir, Grade 4, Current Stryve Student",
      quote:
        "Stryve Learning helped me understand some of the harder math that middle schoolers learn.",
      color: "bg-blue-900 border-blue-800",
    },
    {
      name: "Joel, Grade 5",
      quote:
        "I learned a lot of important things to be aware of when writing code.",
      color: "bg-violet-900 border-violet-800",
    },
    {
      name: "Adhvika, Grade 6",
      quote: "Astronomy feels so much more fun now!",
      color: "bg-blue-900 border-blue-800",
    },
    {
      name: "Aditya, Grade 5",
      quote:
        "Learning how to analyze the market and the basics of it was interesting but cool!",
      color: "bg-violet-900 border-violet-800",
    },
  ];

const StudentVoicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const scrollAccumulator = useRef(0);
  const lastWheelTime = useRef(0);
  const unlocking = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || unlocking.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const viewportHeight = window.innerHeight;

      // Check if section is entering viewport from above
      const isEnteringFromTop = sectionTop <= 100 && sectionTop >= -50 && !isLocked;
      
      // Lock when scrolling down into the section
      if (isEnteringFromTop && e.deltaY > 0) {
        e.preventDefault();
        setIsLocked(true);
        setActiveIndex(0); // Start at first quote
        scrollAccumulator.current = 0;
        return;
      }

      // Handle locked state
      if (isLocked) {
        e.preventDefault();
        e.stopPropagation();

        // Throttle wheel events
        const now = Date.now();
        const timeSinceLastWheel = now - lastWheelTime.current;
        if (timeSinceLastWheel < 100) {
          return;
        }
        lastWheelTime.current = now;

        // Accumulate scroll delta
        scrollAccumulator.current += e.deltaY;
        const threshold = 100;

        // Scrolling down
        if (scrollAccumulator.current > threshold) {
          if (activeIndex < studentVoices.length - 1) {
            // Move to next quote
            setActiveIndex(prev => prev + 1);
            scrollAccumulator.current = 0;
          } else {
            // At last quote - unlock and allow continued scrolling
            unlocking.current = true;
            setIsLocked(false);
            scrollAccumulator.current = 0;
            
            // Allow a brief moment before re-enabling lock detection
            setTimeout(() => {
              unlocking.current = false;
            }, 500);
          }
        } 
        // Scrolling up
        else if (scrollAccumulator.current < -threshold) {
          if (activeIndex > 0) {
            // Move to previous quote
            setActiveIndex(prev => prev - 1);
            scrollAccumulator.current = 0;
          } else {
            // At first quote - unlock and allow continued scrolling
            unlocking.current = true;
            setIsLocked(false);
            scrollAccumulator.current = 0;
            
            // Allow a brief moment before re-enabling lock detection
            setTimeout(() => {
              unlocking.current = false;
            }, 500);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, isLocked]);

  // Lock body scroll when carousel is active
  useEffect(() => {
    if (isLocked) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Lock the body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      // Get the scroll position that was stored
      const scrollY = document.body.style.top;
      
      // Unlock the body
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      
      // Only restore position if we have a stored value
      // This is KEY - we restore the position we were at when we locked
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isLocked]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-indigo-500 bg-center min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

      <div className="flex-container flex flex-row justify-between items-center w-full">
        <h2 className="text-3xl mb-12 relative z-20 font-helvetica text-white div1 ml-4 mt-4">
        Hear directly from our<br/><span className="text-indigo-500">learners</span> about their<br/><span className="text-indigo-500">experiences</span> and <span className="text-indigo-500">growth</span><br/>with Stryve Learning.
        <br/><br/>
        <p className="text-base mb-8 relative z-10 font-helvetica text-white">Discover the experiences of our learners as <br/>they <span className="text-violet-700">explore</span> new subjects, <span className="text-violet-700">overcome</span> <br/>challenges, and grow both <span className="text-violet-700">academically</span> and<br/><span className="text-violet-700">personally</span> with Stryve Learning.</p>
        
        <Link
  to="/about"
  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-400 hover:shadow-md transition-all duration-200 inline-block text-sm"
>
  Learn More
</Link>

      </h2>
        {/* 3D Carousel Container */}
      <div className="flex-1 flex justify-center">
      <div className="relative w-full max-w-4xl px-4 h-96 flex items-center justify-center" style={{ perspective: '1000px' }}>
        <div className="relative w-full h-full flex items-center justify-center">
          {studentVoices.map((voice, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            
            // Calculate position and scale
            let transform = '';
            let opacity = 0;
            let zIndex = 0;
            
            if (offset === 0) {
              // Active - center and large
              transform = 'translateX(0%) scale(1.1) translateZ(0px)';
              opacity = 1;
              zIndex = 30;
            } else if (offset === 1) {
              // Next - slightly right and back
              transform = 'translateX(70%) scale(0.85) translateZ(-100px) rotateY(-15deg)';
              opacity = 0.6;
              zIndex = 20;
            } else if (offset === -1) {
              // Previous - slightly left and back
              transform = 'translateX(-50%) scale(0.85) translateZ(-100px) rotateY(15deg)';
              opacity = 0.6;
              zIndex = 20;
            } else if (offset > 1) {
              // Far right
              transform = 'translateX(120%) scale(0.7) translateZ(-200px) rotateY(-25deg)';
              opacity = 0.3;
              zIndex = 10;
            } else {
              // Far left
              transform = 'translateX(-85%) scale(0.5) translateZ(-200px) rotateY(25deg)';
              opacity = 0.3;
              zIndex = 10;
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out ${voice.color} border-2 p-8 rounded-xl shadow-2xl`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  width: '80%',
                  maxWidth: '500px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <Quote className={`h-6 w-6 text-white mb-3 transition-all duration-500 ${isActive ? 'scale-100' : 'scale-75'}`} />
                  <p className={`text-white mb-4 font-medium transition-all duration-500 ${isActive ? 'text-lg' : 'text-base'}`}>
                    "{voice.quote}"
                  </p>
                  <p className={`text-sm text-white font-semibold transition-all duration-500 ${isActive ? 'text-base' : 'text-xs'}`}>
                    — {voice.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      </div>

      

      {/* Progress indicator */}
      <div className="flex gap-3 mt-12 relative z-40">
        {studentVoices.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeIndex ? "bg-purple-600 w-12" : "bg-purple-300 w-2"
            }`}
          />
        ))}
      </div>

      {/* Visual hint */}
      {isLocked && (
        <div className="absolute bottom-8 text-center text-purple-700 text-sm font-medium animate-pulse">
          {activeIndex < studentVoices.length - 1 
            ? "Scroll to see more voices" 
            : "Scroll to continue"}
        </div>
      )}
    </section>
  );
};

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
      <section className="relative">
      
      {/* Background video */}
      <div className="video-bg">
        <div className="video-foreground">
          <iframe
            src="https://www.youtube.com/embed/VkBnNxneA_A?autoplay=1&mute=1&controls=0&start=0&end=150&loop=1&playlist=VkBnNxneA_A"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Hero content */}
      <div className="hero-content bg-transparent text-gray-900 py-20 border-b border-gray-200 justify-center md: justify-center flex flex-col items-center inset-0 md:mt-10 mt-10">
        <div className="max-w-7xl mx-auto h-96 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-6xl font-light mb-8 text-white font-martina">
            Every <span className="text-indigo-500">Student.</span> <br />Every <span className="text-indigo-500">Step.</span> <br />Every <span className="text-indigo-500">Success.</span>
          </p>

        <p className="text-base md:text-base text-white mb-6 font-helvetica">
          You push your limits in the classroom.<br />Push your potential with Stryve Learning.
        </p>

      <Link
        to="/courses"
        className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-gray-800 hover:shadow-xl transform transition-all duration-300 inline-block"
      >
        Get Started
      </Link>

        </div>
      </div>

    </section>


        {/* Student Voices */}
        <StudentVoicesSection />

        {/* Our Guarantee */}
      <section className="relative py-12 bg-indigo-500 pb-18 border-t">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        <div className="absolute inset-0 z-0">
          <MathBackground />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-4xl md:text-4xl font-extrabold text-white text-center mb-16 leading-tight">
            <span className="block">Stryve Education</span>
            <span className="block text-violet-400">Guarantee</span>
          </h2>



          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 text-center">

            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-violet-600/20"><img src="https://uxwing.com/wp-content/themes/uxwing/download/education-school/education-icon.png"
                  alt="Personalized Learning Icon" className="w-12 h-12 mb-4 mt-3"/></div>
            <p className="text-white font-semibold text-lg mb-1">
                Personalized Learning
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Tailored lessons that meet each student’s pace and goals.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-violet-600/20"><img src="https://static.thenounproject.com/png/5331137-512.png"
                  alt="Expert Guidance Icon" className="w-12 h-12 mb-4 mt-4"/></div>
            <p className="text-white font-semibold text-lg mb-1">
                Expert Guidance
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Clear explanations and actionable feedback from top tutors.
              </p>
            </div>


            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-violet-600/20"><img src="https://uxwing.com/wp-content/themes/uxwing/download/education-school/education-study-icon.png"
                  alt="Comprehensive Support Icon" className="w-12 h-12 mb-4 mt-3"/></div>
            <p className="text-white font-semibold text-lg mb-1">
                Comprehensive Support
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Help with academics and skill development throughout your journey.
              </p>              
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-violet-600/20"><img src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/institution-university-college-location-outline-icon.png"
                  alt="Always Accessible Icon" className="w-12 h-12 mb-4 mt-3"/></div>
            <p className="text-white font-semibold text-lg mb-1">
                Always Accessible
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Available help whenever students need it - anytime, anywhere.
              </p>                 
            </div>

          </div>
        </div>
      </section>


        {/* Call to Action */}

          <section className="border-t border-b relative py-16 bg-violet-800 min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-20 max-w-7xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12">
    
    {/* LEFT: STATS */}
    <div className="flex flex-col gap-8 text-center md:text-left pl-40">
      <div>
        <p className="text-8xl font-bold text-white">10+</p>
        <p className="text-l uppercase tracking-wide text-violet-300">
          Courses Taught
        </p>
      </div>

      <div>
        <p className="text-8xl font-bold text-white">3.5</p>
        <p className="text-l uppercase tracking-wide text-violet-300">
          Avg Classes per Student
        </p>
      </div>

      <div>
        <p className="text-8xl font-bold text-white">600+</p>
        <p className="text-l uppercase tracking-wide text-violet-300">
          Total Enrollments
        </p>
      </div>
    </div>

    {/* RIGHT: TEXT — RIGHT ALIGNED */}
    <div className="max-w-xl text-center pr-40">
      <h2 className="text-3xl font-helvetica text-white mb-6">
        Ready to Start Your<br />
        <span className="text-indigo-600">Learning</span> Journey?
      </h2>

      <p className="text-base font-helvetica text-white mb-8">
        Join <span className="text-indigo-600">hundreds</span> of students from around the<br/>
        <span className="text-indigo-600"> world</span> and begin your 
        <span className="text-indigo-600"> personalized</span> learning <br/>journey today.
        Explore new subjects, build <br/>valuable skills, and grow both 
        <span className="text-indigo-600"> academically</span><br/> and 
        <span className="text-indigo-600"> personally</span> with Stryve Learning.
      </p>

      <Link
        to="/courses"
        className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-400 hover:shadow-md transition-all duration-200 inline-block text-sm"
      >
        Explore Our Courses
      </Link>
    </div>

  </div>
</section>


        
      </main>
    </div>
  );
};

export default HomePage;
