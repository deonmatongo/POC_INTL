import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles, Copy, Check, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function SEOMetaGenerator() {
  const [pageTitle, setPageTitle] = useState('');
  const [pageContent, setPageContent] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const generateMeta = async () => {
    if (!pageTitle.trim() || !pageContent.trim()) return;
    
    setLoading(true);
    // Simulate API call - in production, this would call your SEO service
    setTimeout(() => {
      const slug = pageTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const result = {
        title_tag: `${pageTitle} | POC International`,
        meta_description: `${pageContent.substring(0, 150)}...`,
        keywords: pageContent.split(' ').filter(w => w.length > 4).slice(0, 10),
        og_title: pageTitle,
        og_description: pageContent.substring(0, 150),
        twitter_title: pageTitle,
        twitter_description: pageContent.substring(0, 150),
        canonical_slug: slug,
        schema_suggestions: ['Organization', 'WebPage', 'Service']
      };
      
      setResults(result);
      toast.success('SEO metadata generated successfully!');
      setLoading(false);
    }, 1000);
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const MetaField = ({ label, value, field }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold">{label}</label>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(value, field)}
          className="h-8"
        >
          {copiedField === field ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <div className="bg-gray-50 p-3 rounded border">
        <code className="text-sm break-words">{value}</code>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            AI Meta Tag Generator
          </CardTitle>
          <CardDescription>
            Generate optimized meta tags, keywords, and structured data for your pages
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Page Title</label>
            <Input
              placeholder="e.g., Organizational Transformation Services"
              value={pageTitle}
              onChange={(e) => setPageTitle(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Page Content Summary</label>
            <Textarea
              placeholder="Briefly describe what this page is about..."
              value={pageContent}
              onChange={(e) => setPageContent(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Industry/Sector (optional)</label>
            <Input
              placeholder="e.g., Consulting, Technology, Healthcare"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          
          <Button 
            onClick={generateMeta} 
            disabled={loading || !pageTitle.trim() || !pageContent.trim()}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate SEO Metadata
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {results && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Essential Meta Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MetaField 
                label="Title Tag" 
                value={results.title_tag}
                field="title"
              />
              <MetaField 
                label="Meta Description" 
                value={results.meta_description}
                field="description"
              />
              <div className="space-y-2">
                <label className="text-sm font-semibold">Canonical URL Slug</label>
                <div className="bg-gray-50 p-3 rounded border">
                  <code className="text-sm">/{results.canonical_slug}</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {results.keywords?.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(results.keywords.join(', '), 'keywords')}
                className="mt-3"
              >
                {copiedField === 'keywords' ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy All Keywords
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Open Graph (Facebook)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MetaField 
                label="OG Title" 
                value={results.og_title}
                field="og_title"
              />
              <MetaField 
                label="OG Description" 
                value={results.og_description}
                field="og_description"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Twitter Card</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MetaField 
                label="Twitter Title" 
                value={results.twitter_title}
                field="twitter_title"
              />
              <MetaField 
                label="Twitter Description" 
                value={results.twitter_description}
                field="twitter_description"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schema.org Structured Data</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {results.schema_suggestions?.map((suggestion, index) => (
                  <li key={index} className="text-sm bg-purple-50 p-3 rounded border border-purple-200">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}