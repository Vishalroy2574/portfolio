import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState('About');
  const tabs = ['About', 'Resume', 'Projects', 'Contact'];

  return (
    // Full viewport height, no page scroll
    <div className="h-screen overflow-hidden bg-black text-white flex justify-center">
      {/* Main wrapper – takes full height */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl w-full h-full px-4 lg:px-8 py-4">

        {/* Left Sidebar - Profile Card */}
        <div className="w-full lg:w-1/3 h-full flex">
          <div className="w-full h-full">
            <ProfileCard profile={portfolioData.profile} />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-full lg:w-2/3 h-full flex">
          <div className="flex-1 h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 p-6 lg:p-8 overflow-y-auto">
            <Navigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs}
            />

            <div className="mt-6">
              {activeTab === 'About' && (
                <AboutSection about={portfolioData.about} />
              )}
              {activeTab === 'Resume' && (
                <ResumeSection resume={portfolioData.resume} />
              )}
              {activeTab === 'Projects' && (
                <ProjectsSection projects={portfolioData.projects} />
              )}
              {activeTab === 'Contact' && <ContactSection />}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
