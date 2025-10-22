import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20 py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          © 2025 AIRA Smart City Portal — Developed by{" "}
          <span className="font-semibold text-primary">Sudarshan G</span>, 
          Dept. of CSE, SJC Institute of Technology.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
