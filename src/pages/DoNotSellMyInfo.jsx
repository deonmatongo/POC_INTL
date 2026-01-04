import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Check, Lock, Eye, FileText } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function DoNotSellMyInfoContent() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.title = t('pages.doNotSellMyInfo.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.doNotSellMyInfo.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save preference
    localStorage.setItem('doNotSellInfo', 'true');
    localStorage.setItem('doNotSellInfoEmail', email);
    localStorage.setItem('doNotSellInfoDate', new Date().toISOString());
    setSubmitted(true);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/Home#contact-form');
  };

  const rights = [
    { icon: Shield, text: t('pages.doNotSellMyInfo.right1') },
    { icon: Eye, text: t('pages.doNotSellMyInfo.right2') },
    { icon: FileText, text: t('pages.doNotSellMyInfo.right3') },
    { icon: Lock, text: t('pages.doNotSellMyInfo.right4') },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
        <main>
          <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
            <div className="max-w-2xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 shadow-xl border border-green-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t('pages.doNotSellMyInfo.successTitle')}</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{t('pages.doNotSellMyInfo.successMessage')}</p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Do Not Sell My Info Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Privacy and data protection"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/70 via-[#0d2444]/65 to-[#1a3a5c]/60" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-white/90" />
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-light mb-6 italic leading-tight">
            {t('pages.doNotSellMyInfo.heroTitle')}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('pages.doNotSellMyInfo.heroSubtitle')}
          </motion.p>
          <div className="w-24 h-1 bg-[#00b4d8] mx-auto mt-6"></div>
        </motion.div>
      </div>
    </section>

    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0066ff]/5 to-[#0088ff]/5 rounded-2xl p-8 md:p-10 border border-[#0066ff]/20 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0066ff] to-[#0088ff] rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{t('pages.doNotSellMyInfo.overviewTitle')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  {t('pages.doNotSellMyInfo.overviewContent1')}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('pages.doNotSellMyInfo.overviewContent2')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                {t('pages.doNotSellMyInfo.emailLabel')}
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-[#0066ff] transition-all"
                  placeholder={t('pages.doNotSellMyInfo.emailPlaceholder')}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-[#0066ff] to-[#0088ff] text-white font-semibold text-lg rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {t('pages.doNotSellMyInfo.submitButton')}
            </button>
          </motion.form>

          {/* Rights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">{t('pages.doNotSellMyInfo.rightsTitle')}</h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              {t('pages.doNotSellMyInfo.rightsContent')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#0066ff]/30 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
                    <right.icon className="w-5 h-5 text-[#0066ff]" />
                  </div>
                  <p className="text-gray-700 font-medium">{right.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.doNotSellMyInfo.contactTitle')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              {t('pages.doNotSellMyInfo.contactContent')}
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0055dd] transition-colors"
            >
              {t('pages.doNotSellMyInfo.contactLink')}
            </button>
          </motion.div>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function DoNotSellMyInfo() {
  return (
    <LanguageProvider>
      <DoNotSellMyInfoContent />
    </LanguageProvider>
  );
}
