import React from 'react';
import { Video } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-2"
            onClick={onLogoClick}
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Video className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              Reels<span className="text-blue-600">Downloader</span>
            </span>
          </div>
          <div className="hidden md:block">
            <span className="text-sm text-gray-500">
              Fast & Free Facebook Video Downloader
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};