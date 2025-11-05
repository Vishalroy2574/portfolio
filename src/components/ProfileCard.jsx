import { Mail, MessageSquare, MapPin, FileDown, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 text-center align-left">
      <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-800">
        <img 
          src={profile.image} 
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-white mb-1">{profile.name}</h1>
      <p className="text-gray-400 text-sm mb-6">{profile.title}</p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
          <Mail className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-300">{profile.email}</span>
        </div>
        
        <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
          <MessageSquare className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-300">{profile.phone}</span>
        </div>
        
        <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
          <MapPin className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-300">{profile.location}</span>
        </div>
        
        <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg p-3 w-full transition-colors">
          <FileDown className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-300">DOWNLOAD CV</span>
        </button>
      </div>
      
      <div className="flex justify-center gap-3">
        <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
          <Linkedin className="w-4 h-4 text-gray-400" />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
          <Github className="w-4 h-4 text-gray-400" />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
          <Twitter className="w-4 h-4 text-gray-400" />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
          <Instagram className="w-4 h-4 text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
