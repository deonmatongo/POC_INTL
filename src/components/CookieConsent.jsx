import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window === 'undefined') return;
    
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show consent popup after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleDecline}
          />
          
          {/* Cookie Consent Popup */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[101]"
          >
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-[#0066ff]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t('cookies.title')}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t('cookies.description')}
                  </p>
                </div>
                <button
                  onClick={handleDecline}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="mb-4">
                <a
                  href="#"
                  className="text-sm text-[#0066ff] hover:underline mr-4"
                  onClick={(e) => {
                    e.preventDefault();
                    // You can add navigation to cookie policy page here
                  }}
                >
                  {t('cookies.learnMore')}
                </a>
                <a
                  href="#"
                  className="text-sm text-[#0066ff] hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    // You can add navigation to privacy policy page here
                  }}
                >
                  {t('cookies.privacyPolicy')}
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {t('cookies.decline')}
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2.5 bg-[#0066ff] text-white font-medium rounded-lg hover:bg-[#0055dd] transition-colors"
                >
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

