'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }

    // Hide banner temporarily when policy modal opens
    const handleModalOpen = () => {
      setShowBanner(false);
    };

    const handleModalClose = () => {
      // Show banner again if user hasn't made a choice
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setShowBanner(true);
      }
    };

    window.addEventListener('open-policy-modal', handleModalOpen as any);
    window.addEventListener('close-policy-modal', handleModalClose as any);

    return () => {
      window.removeEventListener('open-policy-modal', handleModalOpen as any);
      window.removeEventListener('close-policy-modal', handleModalClose as any);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Enable analytics if you have any
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
    // Disable analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
      <div className="bg-white border-t-2 border-gray-200 shadow-2xl">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <i className="fas fa-cookie-bite text-brand-blue"></i>
                We value your privacy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies to ensure our website functions properly and to analyze how you use our site. 
                By clicking "Accept All," you consent to our use of cookies. You can manage your preferences in our{' '}
                <button
                  onClick={() => {
                    // Trigger cookie policy modal
                    const event = new CustomEvent('open-policy-modal', { detail: 'cookie-policy' });
                    window.dispatchEvent(event);
                  }}
                  className="text-brand-blue hover:underline font-medium"
                >
                  Cookie Policy
                </button>.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 md:flex-nowrap">
              <button
                onClick={handleReject}
                className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-sm font-medium text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
