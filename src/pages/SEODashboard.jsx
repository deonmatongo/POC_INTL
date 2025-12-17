import React, { useState } from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';
import SEOAnalyzer from '@/components/seo/SEOAnalyzer';
import SEOMetaGenerator from '@/components/seo/SEOMetaGenerator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Sparkles, FileText, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SEODashboard() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Organizational Transformation', path: '/organizational-transformation' },
    { name: 'Employee Engagement', path: '/employee-engagement' },
    { name: 'Performance Optimization', path: '/performance-optimization' },
    { name: 'Leadership Development', path: '/leadership-development' },
    { name: 'Customer Experience', path: '/customer-experience' },
    { name: 'Data Driven Insights', path: '/data-driven-insights' },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <NavHeader />
        
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">SEO Management Dashboard</h1>
              <p className="text-gray-600 text-lg">
                Optimize your website's search engine performance with AI-powered tools
              </p>
            </div>

            <Tabs defaultValue="analyzer" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-auto">
                <TabsTrigger value="analyzer" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Content Analyzer</span>
                  <span className="sm:hidden">Analyze</span>
                </TabsTrigger>
                <TabsTrigger value="generator" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">Meta Generator</span>
                  <span className="sm:hidden">Generate</span>
                </TabsTrigger>
                <TabsTrigger value="sitemap" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Sitemap</span>
                  <span className="sm:hidden">Map</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="analyzer">
                <SEOAnalyzer />
              </TabsContent>

              <TabsContent value="generator">
                <SEOMetaGenerator />
              </TabsContent>

              <TabsContent value="sitemap">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        XML Sitemap
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-xs md:text-sm">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://yourdomain.com${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`}
                        </pre>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Copy this XML content and save it as <code className="bg-gray-200 px-2 py-1 rounded">sitemap.xml</code> in your website's root directory.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        robots.txt
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-xs md:text-sm">
{`# robots.txt for POC International

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://yourdomain.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`}
                        </pre>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Copy this content and save it as <code className="bg-gray-200 px-2 py-1 rounded">robots.txt</code> in your website's root directory.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>All Pages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pages.map((page, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded border"
                          >
                            <div>
                              <p className="font-medium">{page.name}</p>
                              <p className="text-sm text-gray-500">{page.path}</p>
                            </div>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              Indexed
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}