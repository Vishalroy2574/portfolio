import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/Avtaar.png";

const gmailComposeHref = "https://mail.google.com/mail/?view=cm&fs=1&to=vishalroy2574@gmail.com";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden noise-bg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <motion.div 
          animate={prefersReducedMotion ? false : { scale: [1, 1.12, 1], opacity: [0.18, 0.24, 0.18] }}
          transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-32 hidden md:block w-[420px] h-[420px] bg-primary/25 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={prefersReducedMotion ? false : { scale: [1.08, 1, 1.08], opacity: [0.16, 0.24, 0.16] }}
          transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 -right-32 hidden md:block w-[420px] h-[420px] bg-accent/25 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={prefersReducedMotion ? false : { scale: [1, 1.12, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={prefersReducedMotion ? undefined : { duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[560px] md:h-[560px] bg-gradient-to-r from-primary/18 to-accent/18 rounded-full blur-[72px] md:blur-[100px]" 
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(78,205,196,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(78,205,196,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating particles */}
        {!prefersReducedMotion && [...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${20 + i * 18}%`,
              top: `${22 + (i % 2) * 28}%`,
            }}
            animate={{
              y: [-14, 14, -14],
              opacity: [0.2, 0.55, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text">Vishal</span>
              <br />
              <span className="text-foreground">Kumar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
            >
              {["React Developer", "IT Engineering Student", "Problem Solver"].map((tag, i) => (
                <span 
                  key={tag}
                  className="px-4 py-2 rounded-full bg-secondary/80 text-muted-foreground text-sm font-medium border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed"
            >
              I craft beautiful, performant web applications with React.js and modern technologies.
              Passionate about clean code, UI/UX, and building seamless digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="glow" size="lg" className="group" asChild>
                <a href="/Vishal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                  <motion.span
                    className="ml-1"
                    animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 mt-10 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Vishalroy2574", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vishalroy2574/", label: "LinkedIn" },
                { icon: Mail, href: gmailComposeHref, label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl glass border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Rotating gradient ring */}
              <motion.div
                animate={prefersReducedMotion ? false : { rotate: 360 }}
                transition={prefersReducedMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl"
              />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full gradient-border" />
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
                  <img 
                    src={avatarImage} 
                    alt="Vishal Kumar - React Developer" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Shine effect */}
                <motion.div
                  animate={prefersReducedMotion ? false : { rotate: [0, 360] }}
                  transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.1) 10deg, transparent 20deg)",
                  }}
                />
              </div>
              
              {/* Floating tech badges */}
              <motion.div
                animate={prefersReducedMotion ? false : { y: [-8, 8, -8] }}
                transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Infinity }}
                className="absolute -top-2 -right-2 hidden lg:block px-4 py-2 glass rounded-xl text-sm font-semibold text-primary border border-primary/30 shadow-lg"
              >
                ⚛️ React.js
              </motion.div>
              <motion.div
                animate={prefersReducedMotion ? false : { y: [8, -8, 8] }}
                transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 hidden lg:block px-4 py-2 glass rounded-xl text-sm font-semibold text-accent border border-accent/30 shadow-lg"
              >
                ☕ Java
              </motion.div>
              <motion.div
                animate={prefersReducedMotion ? false : { y: [-5, 10, -5] }}
                transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity }}
                className="absolute top-1/2 -right-6 hidden lg:block px-4 py-2 glass rounded-xl text-sm font-semibold text-green-400 border border-green-400/30 shadow-lg"
              >
                🚀 Node.js
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="p-2 rounded-full border border-border group-hover:border-primary transition-colors">
              <MousePointer2 size={16} className="rotate-180" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
