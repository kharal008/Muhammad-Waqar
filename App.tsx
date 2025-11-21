import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Downloader } from './components/Downloader';
import { PrivacyPolicy } from './components/PrivacyPolicy';

// Simple view state management
export enum ViewState {
  HOME = 'HOME',
  PRIVACY = 'PRIVACY'
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const navigateToPrivacy = () => {
    setCurrentView(ViewState.PRIVACY);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView(ViewState.HOME);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar onLogoClick={navigateToHome} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-start">
        {currentView === ViewState.HOME && <Downloader />}
        {currentView === ViewState.PRIVACY && <PrivacyPolicy />}
      </main>

      <Footer onPrivacyClick={navigateToPrivacy} />
    </div>
  );
}