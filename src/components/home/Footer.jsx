import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const getLinkPath = (linkText) => {
    const linkMap = {
      [t('footer.about1')]: '/OurStory',
      [t('footer.about2')]: '/FindAConsultant',
      [t('footer.about3')]: '/FindAnOffice',
      [t('footer.about4')]: '/BusinessImpact',
      [t('footer.about5')]: '/CorporateResponsibility',
      [t('footer.about6')]: '/InvestorRelations',
      [t('footer.about7')]: '/Newsroom',
      [t('footer.capability1')]: '/BusinessTransformation',
      [t('footer.capability2')]: '/OrganizationStrategy',
      [t('footer.capability3')]: '/TotalRewards',
      [t('footer.capability4')]: '/AssessmentSuccession',
      [t('footer.capability5')]: '/TalentAcquisition',
      [t('footer.capability6')]: '/LeadershipDevelopment',
      [t('footer.product1')]: '/TalentSuiteOverview',
      [t('footer.product2')]: '/POCArchitect',
      [t('footer.product3')]: '/POCAssess',
      [t('footer.product4')]: '/POCListen',
      [t('footer.product5')]: '/POCPay',
      [t('footer.product6')]: '/POCSell',
      [t('footer.terms')]: '/TermsOfService',
      [t('footer.privacy')]: '/PrivacyPolicy',
      [t('footer.cookies')]: '/CookiePolicy',
      [t('footer.cookieSettings')]: '/CookieSettings',
      [t('footer.subscribe')]: '/Subscribe',
      [t('footer.accessibility')]: '/Accessibility',
      [t('footer.contact')]: '/Home#contact-form',
    };
    return linkMap[linkText] || '#';
  };
  
  const handleLinkClick = (e, linkText) => {
    const path = getLinkPath(linkText);
    if (path !== '#') {
      e.preventDefault();
      if (path.includes('#')) {
        navigate(path);
      } else {
        navigate(path);
      }
    }
  };
  
  const footerLinks = {
    [t('footer.capabilities')]: [
      t('footer.capability1'),
      t('footer.capability2'),
      t('footer.capability3'),
      t('footer.capability4'),
      t('footer.capability5'),
      t('footer.capability6'),
    ],
    [t('footer.products')]: [
      t('footer.product1'),
      t('footer.product2'),
      t('footer.product3'),
      t('footer.product4'),
      t('footer.product5'),
      t('footer.product6'),
    ],
    [t('footer.industries')]: [
      t('footer.industry1'),
      t('footer.industry2'),
      t('footer.industry3'),
      t('footer.industry4'),
      t('footer.industry5'),
      t('footer.industry6'),
      t('footer.industry7'),
    ],
    [t('footer.functions')]: [
      t('footer.function1'),
      t('footer.function2'),
      t('footer.function3'),
      t('footer.function4'),
      t('footer.function5'),
      t('footer.function6'),
      t('footer.function7'),
      t('footer.function8'),
      t('footer.function9'),
      t('footer.function10'),
      t('footer.function11'),
      t('footer.function12'),
      t('footer.function13'),
    ],
    [t('footer.about')]: [
      t('footer.about1'),
      t('footer.about2'),
      t('footer.about3'),
      t('footer.about4'),
      t('footer.about5'),
      t('footer.about6'),
      t('footer.about7'),
    ],
  };

  const bottomLinks = [
    t('footer.contact'), t('footer.store'), t('footer.subscribe'), t('footer.terms'), t('footer.privacy'), 
    t('footer.cookies'), t('footer.cookieSettings'), t('footer.doNotSell'), t('footer.accessibility')
  ];

  const socialIcons = [
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[#0d1117] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section - Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          {/* Logo */}
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942d82489e40d47754bcee1/6a076a8d3_Po.png" 
            alt="POC International - Global Consulting Firm" 
            className="h-20 w-auto mb-6 md:mb-0"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-6" role="navigation" aria-label="Social media links">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white/60 hover:text-white transition-colors"
                aria-label={`Follow us on ${social.icon.name}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[#0088ff] font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => {
                  const path = getLinkPath(link);
                  return (
                    <li key={link}>
                      {path !== '#' ? (
                        <Link
                          to={path}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="text-white/60 text-sm hover:text-white transition-colors"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-white/60 text-sm hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">{t('footer.copyright')}</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {bottomLinks.map((link) => {
                const path = getLinkPath(link);
                return path !== '#' ? (
                  <Link
                    key={link}
                    to={path}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ) : (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}