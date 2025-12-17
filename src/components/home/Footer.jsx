import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Capabilities: [
      'Business Transformation',
      'Organization Strategy',
      'Total Rewards',
      'Assessment & Succession',
      'Talent Acquisition',
      'Leadership & Professional Development',
    ],
    Products: [
      'Talent Suite Overview',
      'POC Architect',
      'POC Assess',
      'POC Listen',
      'POC Pay',
      'POC Sell',
    ],
    Industries: [
      'Consumer Markets',
      'Financial Services',
      'Healthcare',
      'Life Sciences',
      'Industrial',
      'Technology',
      'Government & Public Services',
    ],
    Functions: [
      'Board & CEO Services',
      'Accounting',
      'Corporate Affairs',
      'Cybersecurity',
      'Financial Services',
      'Human Resources',
      'Information Technology',
      'Legal',
      'Marketing',
      'Risk Management',
      'Sales',
      'Supply Chain',
      'Sustainability',
    ],
    Careers: [
      'Jobs with our clients',
      'Advance your career',
      'Join POC',
    ],
    About: [
      'Our Story',
      'Find a Consultant',
      'Find an Office',
      'Business Impact',
      'Corporate Responsibility',
      'Investor Relations',
      'Newsroom',
    ],
  };

  const bottomLinks = [
    'Contact', 'Store', 'Subscribe', 'Terms', 'Privacy', 
    'Cookies', 'Cookie Settings', 'Do Not Sell My Info', 'Accessibility'
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[#0088ff] font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© 2025 POC. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {bottomLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}