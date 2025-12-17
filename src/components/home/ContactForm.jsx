import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/components/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: '',
    helpType: '',
    subscribe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.jobTitle || !formData.country || !formData.helpType) {
      toast.error(t('contact.errorRequired'));
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success(t('contact.success'));
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        jobTitle: '',
        email: '',
        phone: '',
        country: '',
        helpType: '',
        subscribe: false,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const countries = [
    t('contact.countries.unitedStates'), t('contact.countries.unitedKingdom'), t('contact.countries.canada'), 
    t('contact.countries.australia'), t('contact.countries.germany'), t('contact.countries.france'), 
    t('contact.countries.japan'), t('contact.countries.china'), t('contact.countries.india'), 
    t('contact.countries.brazil'), t('contact.countries.other')
  ];

  const helpTypes = [
    t('contact.helpTypes.executiveSearch'), t('contact.helpTypes.leadershipDevelopment'), 
    t('contact.helpTypes.organizationalStrategy'), t('contact.helpTypes.talentAcquisition'), 
    t('contact.helpTypes.totalRewards'), t('contact.helpTypes.assessmentSuccession'), 
    t('contact.helpTypes.other')
  ];

  return (
    <section id="contact-form" className="bg-[#0055cc] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#7dd3fc] text-lg md:text-xl font-light mb-2">{t('contact.subtitle')}</p>
          <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">{t('contact.title')}</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Row 1: First Name, Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">{t('contact.firstName')}</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
            </div>
            <div>
              <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">{t('contact.lastName')}</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
            </div>
          </div>

          {/* Row 2: Company, Job Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">{t('contact.company')}</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
            </div>
            <div>
              <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">*{t('contact.jobTitle')}</label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
            </div>
          </div>

          {/* Row 3: Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">{t('contact.email')}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
            </div>
            <div>
              <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">{t('contact.phone')}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
            </div>
          </div>

          {/* Country Select */}
          <div>
            <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">*{t('contact.country')}</label>
            <div className="relative">
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00b4d8] cursor-pointer"
              >
                <option value="" className="text-[#00b4d8]">{t('contact.select')}</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
            </div>
          </div>

          {/* Help Type Select */}
          <div>
            <label className="block text-white/80 text-xs uppercase tracking-wider mb-2">*{t('contact.helpType')}</label>
            <div className="relative">
              <select
                value={formData.helpType}
                onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                className="w-full bg-[#0044aa] border-0 rounded-none py-4 px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00b4d8] cursor-pointer"
              >
                <option value="" className="text-[#00b4d8]">{t('contact.select')}</option>
                {helpTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 pt-4">
            <input
              type="checkbox"
              id="subscribe"
              checked={formData.subscribe}
              onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
              className="mt-1 w-4 h-4 bg-[#0044aa] border-white/40 rounded-none focus:ring-[#00b4d8]"
            />
            <label htmlFor="subscribe" className="text-white/70 text-xs leading-relaxed">
              {t('contact.subscribe')}{' '}
              <a href="#" className="underline hover:text-white">{t('contact.privacyPolicy')}</a> {t('common.and')}{' '}
              <a href="#" className="underline hover:text-white">{t('contact.cookiePolicy')}</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-16 py-3 bg-[#f0f8e0] text-[#0055cc] font-semibold rounded-full hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contact.submitting') : t('contact.submit')}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}