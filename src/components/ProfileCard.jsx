import React from 'react';
import { Mail, MapPin, FileDown, Linkedin, Github, Twitter, Instagram, MessageSquare } from 'lucide-react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-center border border-gray-700 max-w-sm">
      <div className="w-32 h-32 mx-auto mb-4 rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-500 to-orange-500 p-1">
        <img 
          src={profile.image} 
          alt={profile.name}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-white mb-1">{profile.name}</h1>
      <p className="text-gray-400 text-xs mb-6 bg-gray-800 inline-block px-4 py-1 rounded-lg">{profile.title}</p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 bg-gray-800 bg-opacity-50 rounded-xl p-3 hover:bg-opacity-70 transition-all">
          <Mail className="w-4 h-4 text-yellow-500 flex-shrink-0" />
          <span className="text-xs text-gray-300 text-left flex-1 truncate">{profile.email}</span>
        </div>
        
        <div className="flex items-center gap-3 bg-gray-800 bg-opacity-50 rounded-xl p-3 hover:bg-opacity-70 transition-all">
          <MessageSquare className="w-4 h-4 text-yellow-500 flex-shrink-0" />
          <span className="text-xs text-gray-300">{profile.phone}</span>
        </div>
        
        <div className="flex items-center gap-3 bg-gray-800 bg-opacity-50 rounded-xl p-3 hover:bg-opacity-70 transition-all">
          <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0" />
          <span className="text-xs text-gray-300">{profile.location}</span>
        </div>
      </div>

      <a
        href="/myResume.pdf"
        onClick={async (e) => {
          // Try to download the canonical file name first; if not found, fall back to existing file
          e.preventDefault();
          const primary = '/myResume.pdf';
          const fallback = '/myResume%20(3).pdf';
          try {
            const res = await fetch(primary, { method: 'HEAD' });
            if (res.ok) {
              // trigger download
              const a = document.createElement('a');
              a.href = primary;
              a.download = 'myResume.pdf';
              document.body.appendChild(a);
              a.click();
              a.remove();
              return;
            }
          } catch (err) {
            // continue to fallback
          }

          // Fallback to the file that exists in the public folder
          const a2 = document.createElement('a');
          a2.href = fallback;
          a2.download = 'myResume.pdf';
          document.body.appendChild(a2);
          a2.click();
          a2.remove();
        }}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-xl p-3 w-full transition-all transform hover:scale-105 mb-6 shadow-lg shadow-yellow-500/30"
      >
        <FileDown className="w-4 h-4 text-black" />
        <span className="text-xs font-bold text-black">DOWNLOAD CV</span>
      </a>
      
      <div className="flex justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/vishalroy2574/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all transform hover:scale-110"
        >
          <Linkedin className="w-4 h-4 text-gray-400" />
        </a>
        <a
          href="https://github.com/Vishalroy2574"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all transform hover:scale-110"
        >
          <Github className="w-4 h-4 text-gray-400" />
        </a>
        <a
          href="https://twitter.com/login"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Login"
          className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all transform hover:scale-110"
        >
          <Twitter className="w-4 h-4 text-gray-400" />
        </a>
        <a
          href="https://www.instagram.com/__vishal_roy_74__/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-yellow-500 rounded-lg transition-all transform hover:scale-110"
        >
          <Instagram className="w-4 h-4 text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;