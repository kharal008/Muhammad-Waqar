import { VideoData } from '../types';

// NOTE: In a real production app, this would call a backend API that uses 
// libraries like 'youtube-dl' or specialized RapidAPIs to parse the FB DOM.
// Browsers cannot directly fetch FB videos due to CORS and DRM policies.

export const simulateDownload = (url: string): Promise<VideoData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // We return a standard sample video for demonstration purposes
      // so the user can see the UI flow working.
      resolve({
        title: "Facebook Reel Demo Video",
        // Using a dependable CDN for sample video
        downloadUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", 
        thumbnail: "https://picsum.photos/800/450",
        duration: "00:15"
      });
    }, 2000); // Simulate 2 seconds processing time
  });
};