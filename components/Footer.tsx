import React from 'react';

interface FooterProps {
  onPrivacyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Reels Downloader. All rights reserved.
        </div>
        <div className="flex gap-6">
          <button 
            onClick={onPrivacyClick}
            className="text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-sm text-slate-300">|</span>
          <button className="text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};