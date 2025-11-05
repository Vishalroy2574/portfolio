import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import portfolioData from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState('About');
  const tabs = ['About', 'Resume', 'Projects', 'Contact'];
  
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[350px,1fr] gap-8">
        <ProfileCard profile={portfolioData.profile} />
        
        <div>
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          
          <div className="bg-gray-950 rounded-2xl p-8">
            {activeTab === 'About' && <AboutSection about={portfolioData.about} />}
            {activeTab === 'Resume' && <ResumeSection resume={portfolioData.resume} />}
            {activeTab === 'Projects' && <ProjectsSection projects={portfolioData.projects} />}
            {activeTab === 'Contact' && <ContactSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
