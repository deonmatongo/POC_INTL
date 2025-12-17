import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Search, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function SEOAnalyzer() {
  const [content, setContent] = useState('');
  const [targetKeywords, setTargetKeywords] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSEO = async () => {
    if (!content.trim()) return;
    
    setLoading(true);
    // Simulate API call - in production, this would call your SEO analysis service
    setTimeout(() => {
      const wordCount = content.split(/\s+/).length;
      const keywordCount = targetKeywords ? targetKeywords.split(',').length : 0;
      const hasH1 = content.includes('<h1>') || content.toLowerCase().includes('# ');
      const hasH2 = content.includes('<h2>') || content.toLowerCase().includes('## ');
      
      const result = {
        seo_score: Math.min(85, 60 + (wordCount > 300 ? 10 : 0) + (hasH1 ? 5 : 0) + (hasH2 ? 5 : 0) + (keywordCount > 0 ? 5 : 0)),
        title_suggestion: content.substring(0, 60).replace(/\n/g, ' '),
        meta_description: content.substring(0, 160).replace(/\n/g, ' '),
        recommended_keywords: targetKeywords ? targetKeywords.split(',').map(k => k.trim()) : content.split(' ').filter(w => w.length > 4).slice(0, 10),
        keyword_density: {},
        readability_score: 75,
        content_length: wordCount,
        header_analysis: hasH1 && hasH2 ? 'Good header structure' : 'Consider adding H1 and H2 tags',
        improvements: wordCount < 300 ? ['Increase content length to at least 300 words'] : [],
        internal_linking_suggestions: ['Add links to related pages', 'Include anchor text with keywords'],
        strengths: ['Content is present', 'Consider adding more structure']
      };
      
      setAnalysis(result);
      toast.success('SEO analysis completed!');
      setLoading(false);
    }, 1000);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            SEO Content Analyzer
          </CardTitle>
          <CardDescription>
            Analyze your content for SEO best practices and get AI-powered recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Page Content</label>
            <Textarea
              placeholder="Paste your page content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Target Keywords (optional)</label>
            <Textarea
              placeholder="Enter target keywords separated by commas..."
              value={targetKeywords}
              onChange={(e) => setTargetKeywords(e.target.value)}
              className="min-h-[80px]"
            />
          </div>
          
          <Button 
            onClick={analyzeSEO} 
            disabled={loading || !content.trim()}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Analyze SEO
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {analysis && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className={`text-5xl font-bold ${getScoreColor(analysis.seo_score)}`}>
                  {analysis.seo_score}
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all ${
                        analysis.seo_score >= 80 ? 'bg-green-600' :
                        analysis.seo_score >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                      }`}
                      style={{ width: `${analysis.seo_score}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {analysis.seo_score >= 80 ? 'Excellent' :
                     analysis.seo_score >= 60 ? 'Good - Needs improvement' : 'Poor - Major improvements needed'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Meta Tags Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-semibold">Title Tag:</label>
                <p className="text-sm bg-blue-50 p-3 rounded mt-1 border border-blue-200">
                  {analysis.title_suggestion}
                </p>
              </div>
              <div>
                <label className="text-sm font-semibold">Meta Description:</label>
                <p className="text-sm bg-blue-50 p-3 rounded mt-1 border border-blue-200">
                  {analysis.meta_description}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {analysis.recommended_keywords?.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {analysis.strengths?.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                Improvements Needed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {analysis.improvements?.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {analysis.internal_linking_suggestions?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Internal Linking Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysis.internal_linking_suggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm">{suggestion}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Content Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Content Length</p>
                <p className="text-2xl font-bold">{analysis.content_length}</p>
                <p className="text-xs text-gray-400">words</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Readability</p>
                <p className="text-2xl font-bold">{analysis.readability_score}/100</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-sm text-gray-500">Header Structure</p>
                <p className="text-sm">{analysis.header_analysis}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}