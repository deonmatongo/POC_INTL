import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, Briefcase, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/LanguageContext';

const searchableContent = [
  // Pages
  { type: 'page', title: 'Home', page: 'Home', description: 'Unlock potential and drive transformation', keywords: 'home consulting transformation' },
  { type: 'page', title: 'Organizational Transformation', page: 'OrganizationalTransformation', description: 'Transform your organization for sustainable growth', keywords: 'transformation change management organization' },
  { type: 'page', title: 'Employee Engagement', page: 'EmployeeEngagement', description: 'Drive productivity through engaged workforce', keywords: 'engagement employees productivity retention' },
  { type: 'page', title: 'Employee Verification', page: 'EmployeeVerification', description: 'Streamline employee verification processes', keywords: 'verification background checks credentials' },
  { type: 'page', title: 'Performance Optimization', page: 'PerformanceOptimization', description: 'Optimize operations and performance', keywords: 'performance optimization efficiency operations' },
  { type: 'page', title: 'Leadership Development', page: 'LeadershipDevelopment', description: 'Develop leaders at all levels', keywords: 'leadership development training executives' },
  { type: 'page', title: 'Customer Experience', page: 'CustomerExperience', description: 'Transform customer interactions', keywords: 'customer experience cx satisfaction journey' },
  { type: 'page', title: 'Data Driven Insights', page: 'DataDrivenInsights', description: 'Leverage data for strategic decisions', keywords: 'data analytics insights intelligence' },
  { type: 'page', title: 'Our Story', page: 'OurStory', description: 'Learn about POC International', keywords: 'about story history company mission' },
  { type: 'page', title: 'Business Transformation', page: 'BusinessTransformation', description: 'Transform your business for sustainable growth', keywords: 'business transformation strategy change' },
  { type: 'page', title: 'Talent Acquisition', page: 'TalentAcquisition', description: 'Find and attract top talent', keywords: 'talent acquisition recruitment hiring' },
  { type: 'page', title: 'Organization Strategy', page: 'OrganizationStrategy', description: 'Develop winning organizational strategies', keywords: 'strategy planning organizational design' },
  { type: 'page', title: 'Total Rewards', page: 'TotalRewards', description: 'Design comprehensive total rewards programs', keywords: 'compensation benefits rewards' },
  { type: 'page', title: 'Assessment & Succession', page: 'AssessmentSuccession', description: 'Build robust succession pipelines', keywords: 'assessment succession planning talent' },
  { type: 'page', title: 'Business Impact', page: 'BusinessImpact', description: 'See the measurable impact we create', keywords: 'impact results success metrics' },
  { type: 'page', title: 'Corporate Responsibility', page: 'CorporateResponsibility', description: 'Our commitment to social responsibility', keywords: 'corporate responsibility sustainability csr' },
  { type: 'page', title: 'Investor Relations', page: 'InvestorRelations', description: 'Investor relations and financial information', keywords: 'investor relations financial reports' },
  { type: 'page', title: 'Newsroom', page: 'Newsroom', description: 'Latest news and press releases', keywords: 'news press releases media' },
  { type: 'page', title: 'Find a Consultant', page: 'FindAConsultant', description: 'Connect with our expert consultants', keywords: 'consultant expert find contact' },
  { type: 'page', title: 'Find an Office', page: 'FindAnOffice', description: 'Find our global office locations', keywords: 'office location contact address' },
  { type: 'page', title: 'Talent Suite Overview', page: 'TalentSuiteOverview', description: 'Comprehensive talent management solutions', keywords: 'talent suite products solutions' },
  { type: 'page', title: 'POC Architect', page: 'POCArchitect', description: 'Organizational design and structure', keywords: 'architect organizational design structure' },
  { type: 'page', title: 'POC Assess', page: 'POCAssess', description: 'Talent assessment and evaluation', keywords: 'assess assessment evaluation talent' },
  { type: 'page', title: 'POC Listen', page: 'POCListen', description: 'Employee engagement and feedback', keywords: 'listen engagement feedback employees' },
  { type: 'page', title: 'POC Pay', page: 'POCPay', description: 'Compensation and rewards management', keywords: 'pay compensation rewards benefits' },
  { type: 'page', title: 'POC Sell', page: 'POCSell', description: 'Sales performance and enablement', keywords: 'sell sales performance enablement' },
  
  // Services
  { type: 'service', title: 'Executive Search', description: 'Find top executive talent', keywords: 'executive search recruitment hiring talent acquisition' },
  { type: 'service', title: 'Talent Acquisition', description: 'Strategic talent acquisition solutions', keywords: 'talent acquisition hiring recruitment staffing' },
  { type: 'service', title: 'Total Rewards', description: 'Compensation and benefits strategy', keywords: 'compensation rewards benefits salary' },
  { type: 'service', title: 'Assessment & Succession', description: 'Leadership assessment and succession planning', keywords: 'assessment succession planning leadership pipeline' },
  { type: 'service', title: 'Business Transformation', description: 'Transform your business operations', keywords: 'transformation change business operations' },
  { type: 'service', title: 'Organization Strategy', description: 'Strategic organizational design', keywords: 'strategy organization structure design' },
  
  // Insights
  { type: 'insight', title: 'The Struggle With Being a First-Time CEO', description: 'Navigating challenges of first-time leadership', keywords: 'ceo leadership first time executive challenges' },
  { type: 'insight', title: 'How Employees Really React to Pay Transparency', description: 'Understanding pay transparency impact', keywords: 'pay transparency compensation salary fairness' },
  { type: 'insight', title: 'The Truth About Remote Work', description: 'Remote work realities and best practices', keywords: 'remote work hybrid workplace flexibility' },
];

export default function SearchModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const filtered = searchableContent.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const groupedResults = {
    pages: results.filter(r => r.type === 'page'),
    services: results.filter(r => r.type === 'service'),
    insights: results.filter(r => r.type === 'insight'),
  };

  const getIcon = (type) => {
    switch(type) {
      case 'page': return FileText;
      case 'service': return Briefcase;
      case 'insight': return Lightbulb;
      default: return FileText;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-20 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden">
              {/* Search Input */}
              <div className="p-6 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('search.placeholder')}
                    className="w-full pl-12 pr-12 py-4 text-lg border-0 focus:outline-none focus:ring-0"
                    autoFocus
                  />
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="overflow-y-auto max-h-[calc(80vh-120px)]">
                {searchQuery.trim().length === 0 ? (
                  <div className="p-12 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-sm">{t('search.startTyping')}</p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-12 text-center text-gray-500">
                    <p className="text-sm">{t('search.noResults')} "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="p-6 space-y-6">
                    {/* Pages */}
                    {groupedResults.pages.length > 0 && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('search.pages')}</h3>
                        <div className="space-y-2">
                          {groupedResults.pages.map((item, idx) => {
                            const Icon = getIcon(item.type);
                            return (
                              <Link
                                key={idx}
                                to={createPageUrl(item.page)}
                                onClick={onClose}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <Icon className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#0066ff]">{item.title}</h4>
                                  <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Services */}
                    {groupedResults.services.length > 0 && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('search.services')}</h3>
                        <div className="space-y-2">
                          {groupedResults.services.map((item, idx) => {
                            const Icon = getIcon(item.type);
                            return (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <Icon className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                                  <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Insights */}
                    {groupedResults.insights.length > 0 && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('search.insights')}</h3>
                        <div className="space-y-2">
                          {groupedResults.insights.map((item, idx) => {
                            const Icon = getIcon(item.type);
                            return (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <Icon className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                                  <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}