import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
        <Shield className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-6">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
        <p className="text-slate-600 mb-6">
          Welcome to <strong>Reels Downloader</strong>. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we handle your information when you use our website.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
        <p className="text-slate-600 mb-6">
          We do not require you to create an account to use Reels Downloader. When you use our service to download Facebook Reels, we may process the URL you provide solely for the purpose of retrieving the video content. We do not store the videos or the URLs you submit after the session is complete.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3">3. Cookies and Analytics</h2>
        <p className="text-slate-600 mb-6">
          We may use standard cookies to enhance user experience and analyze website traffic. These cookies do not contain personally identifiable information. You can choose to disable cookies through your browser settings.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3">4. Third-Party Links</h2>
        <p className="text-slate-600 mb-6">
          Our service interacts with third-party platforms (Facebook). We are not affiliated with Facebook or Meta Platforms, Inc. Please review the privacy policies of any third-party sites you visit.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3">5. Changes to This Policy</h2>
        <p className="text-slate-600 mb-6">
          We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Us</h2>
        <p className="text-slate-600">
          If you have any questions about this Privacy Policy, please contact us at support@reelsdownloader.demo.
        </p>
      </div>
    </div>
  );
};