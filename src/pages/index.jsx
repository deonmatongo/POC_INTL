import Layout from "./Layout.jsx";

import Home from "./Home";

import OrganizationalTransformation from "./OrganizationalTransformation";

import EmployeeEngagement from "./EmployeeEngagement";

import PerformanceOptimization from "./PerformanceOptimization";

import LeadershipDevelopment from "./LeadershipDevelopment";

import CustomerExperience from "./CustomerExperience";

import DataDrivenInsights from "./DataDrivenInsights";

import OurStory from "./OurStory";

import SEODashboard from "./SEODashboard";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    OrganizationalTransformation: OrganizationalTransformation,
    
    EmployeeEngagement: EmployeeEngagement,
    
    PerformanceOptimization: PerformanceOptimization,
    
    LeadershipDevelopment: LeadershipDevelopment,
    
    CustomerExperience: CustomerExperience,
    
    DataDrivenInsights: DataDrivenInsights,
    
    OurStory: OurStory,
    
    SEODashboard: SEODashboard,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/OrganizationalTransformation" element={<OrganizationalTransformation />} />
                
                <Route path="/EmployeeEngagement" element={<EmployeeEngagement />} />
                
                <Route path="/PerformanceOptimization" element={<PerformanceOptimization />} />
                
                <Route path="/LeadershipDevelopment" element={<LeadershipDevelopment />} />
                
                <Route path="/CustomerExperience" element={<CustomerExperience />} />
                
                <Route path="/DataDrivenInsights" element={<DataDrivenInsights />} />
                
                <Route path="/OurStory" element={<OurStory />} />
                
                <Route path="/SEODashboard" element={<SEODashboard />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}