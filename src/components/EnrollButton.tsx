import React from 'react';
import { ExternalLink } from 'lucide-react';

interface EnrollButtonProps {
  classroomLink: string;
}

const EnrollButton: React.FC<EnrollButtonProps> = ({ classroomLink }) => {
  const handleEnroll = () => {
    window.open(classroomLink, '_blank');
  };

  return (
    <button
      onClick={handleEnroll}
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center shadow-md"
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      Enroll via Google Classroom
    </button>
  );
};

export default EnrollButton;