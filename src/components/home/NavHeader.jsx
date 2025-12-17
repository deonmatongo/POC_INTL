import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/LanguageContext';
import SearchModal from '@/components/SearchModal';

export default function NavHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, switchLanguage, t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const handleContactClick = (e) => {
    e.preventDefault();
    const isHomePage = location.pathname === '/' || location.pathname === '/Home';
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        window.location.hash = 'contact-form';
        scrollToContact();
      }, 100);
    } else {
      scrollToContact();
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), key: 'home', page: 'Home' },
    { label: t('nav.expertise'), key: 'expertise' },
    { label: t('nav.solutions'), key: 'solutions' },
    { label: t('nav.about'), key: 'about' },
    { label: t('nav.contact'), key: 'contact' }
  ];
  
  const expertiseMenu = [
    { title: t('expertise.leadThroughChange'), description: t('expertise.leadThroughChangeDesc') },
    { title: t('expertise.transformForGrowth'), description: t('expertise.transformForGrowthDesc') },
    { title: t('expertise.findKeepTopTalent'), description: t('expertise.findKeepTopTalentDesc') },
  ];

  const solutionsMenu = [
    { title: t('solutions.organizationalTransformation'), page: 'OrganizationalTransformation', items: [{ title: t('solutions.employeeEngagement'), page: 'EmployeeEngagement' }] },
    { title: t('solutions.performanceOptimization'), page: 'PerformanceOptimization', items: [{ title: t('solutions.leadershipDevelopment'), page: 'LeadershipDevelopment' }] },
    { title: t('solutions.customerExperience'), page: 'CustomerExperience', items: [{ title: t('solutions.dataManagementInsights'), page: 'DataDrivenInsights' }] },
  ];
  
  const aboutMenu = [{ title: t('about.ourStory'), page: 'OurStory' }];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0d1117]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center" aria-label="POC International Home">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942d82489e40d47754bcee1/6a076a8d3_Po.png" 
              alt="POC International - Global Consulting Firm Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => {
                  if (item.key === 'expertise') setExpertiseOpen(true);
                  if (item.key === 'solutions') setSolutionsOpen(true);
                  if (item.key === 'about') setAboutOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.key === 'expertise') setExpertiseOpen(false);
                  if (item.key === 'solutions') setSolutionsOpen(false);
                  if (item.key === 'about') setAboutOpen(false);
                }}
              >
                {item.page ? (
                  <Link
                    to={createPageUrl(item.page)}
                    className="text-white/90 hover:text-white text-sm font-bold tracking-wide transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : item.key === 'contact' ? (
                  <a
                    href="#contact-form"
                    onClick={handleContactClick}
                    className="text-white/90 hover:text-white text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-white/90 hover:text-white text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer">
                    {item.label}
                  </span>
                )}
                
                {/* Expertise Dropdown */}
                {item.key === 'expertise' && (
                  <AnimatePresence>
                    {expertiseOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-[88px] pt-4 z-50 flex justify-center"
                      >
                        <div className="bg-white rounded-lg shadow-2xl px-8 py-8 w-full max-w-[800px] mx-6">
                          <h3 className="text-[#0066ff] text-lg font-semibold mb-6">{t('expertise.weHelpYou')}</h3>
                          <div className="space-y-6">
                            {expertiseMenu.map((item, index) => (
                              <div key={index} className="space-y-2">
                                <h4 className="text-[#0066ff] hover:text-[#0088ff] text-base font-semibold cursor-pointer transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
                
                {/* Solutions Dropdown */}
                {item.key === 'solutions' && (
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-[88px] pt-4 z-50 flex justify-center"
                      >
                        <div className="bg-white rounded-lg shadow-2xl px-8 py-6 w-full max-w-[900px] mx-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-3">
                            {solutionsMenu.map((section, index) => (
                              <React.Fragment key={index}>
                                <Link
                                  to={createPageUrl(section.page)}
                                  className="text-[#0066ff] hover:text-[#0088ff] text-sm font-normal transition-colors"
                                >
                                  {section.title}
                                </Link>
                                {section.items.map((item) => (
                                  <Link
                                    key={item.title}
                                    to={createPageUrl(item.page)}
                                    className="text-[#0066ff] hover:text-[#0088ff] text-sm font-normal transition-colors"
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
                
                {/* About Dropdown */}
                {item.key === 'about' && (
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-[88px] pt-4 z-50 flex justify-center"
                      >
                        <div className="bg-white rounded-lg shadow-2xl px-8 py-6 w-full max-w-[300px] mx-6">
                          <div className="space-y-3">
                            {aboutMenu.map((menuItem) => (
                              <Link
                                key={menuItem.title}
                                to={createPageUrl(menuItem.page)}
                                className="block text-[#0066ff] hover:text-[#0088ff] text-sm font-normal transition-colors"
                              >
                                {menuItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <button 
                onClick={() => switchLanguage('en')}
                className={`hover:text-white cursor-pointer transition-colors font-bold ${language === 'en' ? 'text-white' : ''}`}
              >
                EN
              </button>
              <span className="text-white/40">|</span>
              <button 
                onClick={() => switchLanguage('fr')}
                className={`hover:text-white cursor-pointer transition-colors font-bold ${language === 'fr' ? 'text-white' : ''}`}
              >
                FR
              </button>
            </div>
            <button 
              onClick={() => setSearchOpen(true)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label={t('nav.search')}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white relative z-[60] bg-transparent hover:bg-white/10 rounded p-1 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0d1117]/95 backdrop-blur-lg border-t border-white/10 max-h-[80vh] overflow-y-auto relative z-50"
          >
            <nav className="flex flex-col p-6 gap-2">
              {/* Home */}
              <Link
                to={createPageUrl('Home')}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white text-base font-bold py-3 transition-colors"
              >
                {t('nav.home')}
              </Link>

              {/* Expertise */}
              <div className="border-t border-white/10 pt-2">
                <button
                  onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                  className="w-full flex items-center justify-between text-white/90 hover:text-white text-base font-bold py-3 transition-colors"
                >
                  <span>{t('nav.expertise')}</span>
                  {mobileExpertiseOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {mobileExpertiseOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-3 py-3"
                    >
                      <p className="text-[#0088ff] text-sm font-semibold mb-2">{t('expertise.weHelpYou')}</p>
                      {expertiseMenu.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <p className="text-white/90 text-sm font-semibold">{item.title}</p>
                          <p className="text-white/60 text-xs leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions */}
              <div className="border-t border-white/10 pt-2">
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between text-white/90 hover:text-white text-base font-bold py-3 transition-colors"
                >
                  <span>{t('nav.solutions')}</span>
                  {mobileSolutionsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 py-3"
                    >
                      {solutionsMenu.map((section, index) => (
                        <React.Fragment key={index}>
                          <Link
                            to={createPageUrl(section.page)}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[#0088ff] hover:text-white text-sm font-semibold py-1 transition-colors"
                          >
                            {section.title}
                          </Link>
                          {section.items.map((item) => (
                            <Link
                              key={item.title}
                              to={createPageUrl(item.page)}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-[#0088ff] hover:text-white text-sm font-semibold py-1 transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </React.Fragment>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <div className="border-t border-white/10 pt-2">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between text-white/90 hover:text-white text-base font-bold py-3 transition-colors"
                >
                  <span>{t('nav.about')}</span>
                  {mobileAboutOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 py-3"
                    >
                      {aboutMenu.map((menuItem) => (
                        <Link
                          key={menuItem.title}
                          to={createPageUrl(menuItem.page)}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[#0088ff] hover:text-white text-sm font-semibold py-1 transition-colors"
                        >
                          {menuItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <div className="border-t border-white/10 pt-2">
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const isHomePage = location.pathname === '/' || location.pathname === '/Home';
                    if (!isHomePage) {
                      navigate('/');
                      setTimeout(() => {
                        window.location.hash = 'contact-form';
                        scrollToContact();
                      }, 200);
                    } else {
                      setTimeout(scrollToContact, 100);
                    }
                  }}
                  className="text-white/90 hover:text-white text-base font-bold py-3 block transition-colors cursor-pointer"
                >
                  {t('nav.contact')}
                </a>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <button 
                  onClick={() => switchLanguage('en')}
                  className={`text-sm font-bold ${language === 'en' ? 'text-white' : 'text-white/80'}`}
                >
                  EN
                </button>
                <span className="text-white/40">|</span>
                <button 
                  onClick={() => switchLanguage('fr')}
                  className={`text-sm font-bold ${language === 'fr' ? 'text-white' : 'text-white/80'}`}
                >
                  FR
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
    );
    }