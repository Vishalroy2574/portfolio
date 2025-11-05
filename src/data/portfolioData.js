const portfolioData = {
  profile: {
    name: "Dev Goyal",
    title: "Frontend Web Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    email: "devgoyal@example.com",
    phone: "+1234567890",
    location: "Greater Noida, India"
  },
  about: {
    description: [
      "Hello! I'm Dev Goyal, a Pre-Final Year Computer Science Engineering student at Noida Institute of Engineering and Technology. I'm passionate about Web Development, Python Development, Artificial Intelligence, and Machine Learning.",
      "I bring a diverse range of experiences in technical development, leadership, and community engagement. As Program Director at Swayam, I led Blockchain education programs, and during my Python Internship at CIIRC IIITDELHI, I built projects on Alarm Clock, OTP Verification system, and Chatbot.",
      "Currently, I serve as Social Media Manager for GDG NIET and Marketing Co-lead for GFG NIET, where I strategize content, engage with the community, and help build vibrant tech ecosystems."
    ],
    services: [
      { icon: "💻", title: "Web Development", description: "Passionate about creating user-friendly websites using modern web development technologies." },
      { icon: "🐍", title: "Python Development", description: "Specializing in building efficient and scalable solutions for diverse applications." },
      { icon: "🧩", title: "Problem Solving", description: "Experienced in solving complex coding challenges and hackathons." },
      { icon: "⭐", title: "Community Management", description: "Skilled in managing and growing tech communities through engagement and events." }
    ],
    highlights: [
      { title: "GEN AI Study Jams 2024", description: "As a GDG Cloud Facilitator, I had the opportunity to collaborate with more than 80 participants, leading sessions and exploration of Google Cloud technologies." },
      { title: "Volunteer at INNOVA'24", description: "As part of the Outreach Team for INNOVA 2024, hosted by GDG On Campus NIET and GDSC Galgotias, I connected with developers and tech enthusiasts, fostering collaboration." }
    ]
  },
  resume: {
    education: [
      { degree: "B.Tech in Computer Science", institution: "Noida Institute of Engineering and Technology", period: "2022 - 2026" }
    ],
    experience: [
      { position: "Social Media Manager", company: "GDG NIET", period: "2024 - Present", description: "Managing social media strategy and community engagement for the Google Developer Group chapter." },
      { position: "Program Director", company: "Swayam", period: "2023 - 2024", description: "Led Blockchain education programs and coordinated community initiatives." }
    ],
    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      backend: ["Python", "Node.js", "Flask"],
      tools: ["Git", "GitHub", "VS Code", "Figma"]
    }
  },
  projects: [
    { title: "Alarm Clock System", description: "Built an alarm clock application during Python internship with customizable features.", tags: ["Python", "Tkinter"], icon: "⏰", link: "#" },
    { title: "OTP Verification", description: "Developed a secure OTP verification system for user authentication.", tags: ["Python", "Security"], icon: "🔐", link: "#" },
    { title: "AI Chatbot", description: "Created an intelligent chatbot for automated customer interactions.", tags: ["Python", "AI", "NLP"], icon: "🤖", link: "#" },
    { title: "Portfolio Website", description: "Modern, responsive portfolio showcasing projects and experience.", tags: ["React", "Tailwind", "JavaScript"], icon: "🌐", link: "#" }
  ]
};

export default portfolioData;
