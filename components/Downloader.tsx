import React, { useState, useCallback } from 'react';
import { Download, Link2, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { simulateDownload } from '../services/mockService';
import { VideoData } from '../types';

export const Downloader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  const handleDownload = useCallback(async () => {
    if (!url) {
      setError("Please paste a valid Facebook Reel URL.");
      return;
    }
    
    if (!url.toLowerCase().includes('facebook.com') && !url.toLowerCase().includes('fb.watch')) {
      setError("This doesn't look like a valid Facebook URL.");
      return;
    }

    setError(null);
    setIsLoading(true);
    setVideoData(null);

    try {
      // Simulation of API call
      const data = await simulateDownload(url);
      setVideoData(data);
    } catch (err) {
      setError("Failed to fetch video. Please check the link and try again.");
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-8">
      
      {/* Hero Text */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Facebook Reels</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Paste the link below to save reels directly to your device in high quality.
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full bg-white p-2 rounded-2xl shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center gap-2">
        <div className="flex-1 flex items-center w-full px-4 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Link2 className="text-slate-400 w-5 h-5 mr-2" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Facebook Reel link here..."
            className="w-full py-4 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400"
          />
          <button 
            onClick={handlePaste}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wide transition-colors"
          >
            Paste
          </button>
        </div>
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download</span>
            </>
          )}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-100 animate-fade-in">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Result Card */}
      {videoData && (
        <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 animate-fade-in-up">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 line-clamp-1">Reel Ready to Download</h3>
                <p className="text-slate-500 text-sm">Quality: High Definition (HD)</p>
              </div>
              <CheckCircle className="text-green-500 w-6 h-6" />
            </div>
            
            <div className="bg-slate-100 rounded-xl overflow-hidden aspect-video relative mb-6 group">
               {/* Simulation of the video preview */}
               <video 
                src={videoData.downloadUrl} 
                controls 
                className="w-full h-full object-cover"
                poster="https://picsum.photos/800/450"
               />
            </div>

            <div className="flex flex-col gap-3">
               <a 
                href={videoData.downloadUrl} 
                download="reel_video.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-green-600/20"
               >
                 <Download className="w-5 h-5" />
                 Download Video (HD)
               </a>
               <p className="text-xs text-center text-slate-400 mt-2">
                 By downloading, you agree to our Terms of Service.
               </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions / SEO Content */}
      {!videoData && (
        <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
          <FeatureCard 
            icon={<Link2 className="w-6 h-6 text-blue-600" />}
            title="Copy Link"
            description="Open the Facebook app, find the reel you like, tap Share and select 'Copy Link'."
          />
          <FeatureCard 
            icon={<CheckCircle className="w-6 h-6 text-purple-600" />}
            title="Paste & Click"
            description="Paste the link into the input field above and click the Download button."
          />
          <FeatureCard 
            icon={<Download className="w-6 h-6 text-green-600" />}
            title="Save Video"
            description="Wait for the video to process, then save it directly to your device gallery."
          />
        </div>
      )}
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
    <div className="mb-4 p-3 bg-slate-50 rounded-full">{icon}</div>
    <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);
