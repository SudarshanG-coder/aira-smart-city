import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 md:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            Project Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the minds behind AIRA Smart City Portal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="glow-card p-8 text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-primary-foreground">
              SG
            </div>
            <h3 className="text-2xl font-bold mb-2">Sudarshan G</h3>
            <p className="text-primary font-semibold mb-2">
              Project Lead & Developer
            </p>
            <p className="text-muted-foreground mb-6">
              Dept. of CSE, SJC Institute of Technology
            </p>
            
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110 group"
              >
                <Github className="text-primary group-hover:text-accent transition-colors" size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110 group"
              >
                <Linkedin className="text-primary group-hover:text-accent transition-colors" size={24} />
              </a>
              <a
                href="mailto:sudarshan@example.com"
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110 group"
              >
                <Mail className="text-primary group-hover:text-accent transition-colors" size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
