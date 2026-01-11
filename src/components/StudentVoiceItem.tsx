import React from "react";
import { Quote } from "lucide-react";

interface StudentVoiceProps {
  name: string;
  quote: string;
  color: string;
  isActive: boolean; // controls visibility
}

const StudentVoiceItem: React.FC<StudentVoiceProps> = ({ name, quote, color, isActive }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out
        ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"} 
        ${color} border-2 p-6 rounded-lg flex flex-col items-center text-center`}
    >
      <Quote className="h-6 w-6 text-gray-400 mb-2" />
      <p className="text-gray-800 mb-4 font-medium">"{quote}"</p>
      <p className="text-sm text-gray-600 font-semibold">— {name}</p>
    </div>
  );
};

export default StudentVoiceItem;
