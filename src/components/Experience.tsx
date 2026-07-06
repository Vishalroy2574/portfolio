import { motion } from "framer-motion";

const experiences = [
  {
    role: "Node.js Backend Intern",
    company: "Talentrise Technokrate Pvt. Ltd.",
    period: "Jun 2026 - Present",
    bullets: [
      "Built RESTful APIs for an eCommerce platform using Node.js, Express.js, MongoDB, and Mongoose following the MVC architecture.",
      "Implemented backend modules for product, category, cart, and order management with scalable database schemas and CRUD operations.",
      "Added request validation with Zod, centralized error handling, and standardized API responses to improve reliability.",
      "Developed product search and filtering, inventory validation, unique slug generation, and soft/permanent delete workflows.",
      "Collaborated in Agile development using Git, GitHub, Postman, code reviews, debugging, and daily team coordination.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "UrbanNivas & CNC Test Series Platform",
    period: "2025 - 2026",
    bullets: [
      "Developed a rental listing platform with secure authentication, admin moderation, and image upload integration using Cloudinary and Multer.",
      "Built a full-stack EdTech platform for CA students with Foundation, Inter, and Final exam preparation modules, mock tests, and PDF resources.",
      "Implemented JWT-based authentication, authorization, role-based access control, and protected REST APIs for both projects.",
      "Managed the full development lifecycle from requirement analysis and frontend/backend development to deployment on Render.",
    ],
  },
];
const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="p-6 rounded-2xl glass border border-border/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} •{" "}
                    <span className="text-sm">{exp.period}</span>
                  </p>
                </div>
              </div>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;