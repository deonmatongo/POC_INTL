import Layout from "./Layout.jsx";
import CookieConsent from "@/components/CookieConsent";

import Home from "./Home";

import OrganizationalTransformation from "./OrganizationalTransformation";

import EmployeeEngagement from "./EmployeeEngagement";

import EmployeeVerification from "./EmployeeVerification";

import PerformanceOptimization from "./PerformanceOptimization";

import LeadershipDevelopment from "./LeadershipDevelopment";

import CustomerExperience from "./CustomerExperience";

import DataDrivenInsights from "./DataDrivenInsights";

import OurStory from "./OurStory";

import SEODashboard from "./SEODashboard";

import PrivacyPolicy from "./PrivacyPolicy";

import CookiePolicy from "./CookiePolicy";

import TermsOfService from "./TermsOfService";

import FindAConsultant from "./FindAConsultant";

import FindAnOffice from "./FindAnOffice";

import BusinessTransformation from "./BusinessTransformation";

import TalentAcquisition from "./TalentAcquisition";

import BusinessImpact from "./BusinessImpact";

import CorporateResponsibility from "./CorporateResponsibility";

import InvestorRelations from "./InvestorRelations";

import Newsroom from "./Newsroom";

import OrganizationStrategy from "./OrganizationStrategy";

import TotalRewards from "./TotalRewards";

import AssessmentSuccession from "./AssessmentSuccession";

import TalentSuiteOverview from "./TalentSuiteOverview";

import POCArchitect from "./POCArchitect";

import POCAssess from "./POCAssess";

import POCListen from "./POCListen";

import POCPay from "./POCPay";

import POCSell from "./POCSell";

import CookieSettings from "./CookieSettings";

import Accessibility from "./Accessibility";

import Subscribe from "./Subscribe";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    OrganizationalTransformation: OrganizationalTransformation,
    
    EmployeeEngagement: EmployeeEngagement,
    
    EmployeeVerification: EmployeeVerification,
    
    PerformanceOptimization: PerformanceOptimization,
    
    LeadershipDevelopment: LeadershipDevelopment,
    
    CustomerExperience: CustomerExperience,
    
    DataDrivenInsights: DataDrivenInsights,
    
    OurStory: OurStory,
    
    SEODashboard: SEODashboard,
    
    PrivacyPolicy: PrivacyPolicy,
    
    CookiePolicy: CookiePolicy,
    
    TermsOfService: TermsOfService,
    
    FindAConsultant: FindAConsultant,
    
    FindAnOffice: FindAnOffice,
    
    BusinessTransformation: BusinessTransformation,
    
    TalentAcquisition: TalentAcquisition,
    
    BusinessImpact: BusinessImpact,
    
    CorporateResponsibility: CorporateResponsibility,
    
    InvestorRelations: InvestorRelations,
    
    Newsroom: Newsroom,
    
    OrganizationStrategy: OrganizationStrategy,
    
    TotalRewards: TotalRewards,
    
    AssessmentSuccession: AssessmentSuccession,
    
    TalentSuiteOverview: TalentSuiteOverview,
    
    POCArchitect: POCArchitect,
    
    POCAssess: POCAssess,
    
    POCListen: POCListen,
    
    POCPay: POCPay,
    
    POCSell: POCSell,
    
    CookieSettings: CookieSettings,
    
    Accessibility: Accessibility,
    
    Subscribe: Subscribe,
    
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
                
                <Route path="/EmployeeVerification" element={<EmployeeVerification />} />
                
                <Route path="/PerformanceOptimization" element={<PerformanceOptimization />} />
                
                <Route path="/LeadershipDevelopment" element={<LeadershipDevelopment />} />
                
                <Route path="/CustomerExperience" element={<CustomerExperience />} />
                
                <Route path="/DataDrivenInsights" element={<DataDrivenInsights />} />
                
                <Route path="/OurStory" element={<OurStory />} />
                
                <Route path="/SEODashboard" element={<SEODashboard />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/CookiePolicy" element={<CookiePolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/FindAConsultant" element={<FindAConsultant />} />
                
                <Route path="/FindAnOffice" element={<FindAnOffice />} />
                
                <Route path="/BusinessTransformation" element={<BusinessTransformation />} />
                
                <Route path="/TalentAcquisition" element={<TalentAcquisition />} />
                
                <Route path="/BusinessImpact" element={<BusinessImpact />} />
                
                <Route path="/CorporateResponsibility" element={<CorporateResponsibility />} />
                
                <Route path="/InvestorRelations" element={<InvestorRelations />} />
                
                <Route path="/Newsroom" element={<Newsroom />} />
                
                <Route path="/OrganizationStrategy" element={<OrganizationStrategy />} />
                
                <Route path="/TotalRewards" element={<TotalRewards />} />
                
                <Route path="/AssessmentSuccession" element={<AssessmentSuccession />} />
                
                <Route path="/TalentSuiteOverview" element={<TalentSuiteOverview />} />
                
                <Route path="/POCArchitect" element={<POCArchitect />} />
                
                <Route path="/POCAssess" element={<POCAssess />} />
                
                <Route path="/POCListen" element={<POCListen />} />
                
                <Route path="/POCPay" element={<POCPay />} />
                
                <Route path="/POCSell" element={<POCSell />} />
                
                <Route path="/CookieSettings" element={<CookieSettings />} />
                
                <Route path="/Accessibility" element={<Accessibility />} />
                
                <Route path="/Subscribe" element={<Subscribe />} />
                
            </Routes>
            <CookieConsent />
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