import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Network, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced artificial intelligence for smart decision-making",
    },
    {
      icon: Network,
      title: "IoT Integration",
      description: "Connected devices and sensors for real-time data",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven",
      description: "Analytics and insights for continuous improvement",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            About AIRA Smart City Portal
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              AIRA (AI-based Intelligent Responsive Assistant) Smart City Portal is a unified digital platform 
              designed to connect citizens with essential urban services. It combines AI, IoT, and data-driven 
              insights to make cities safer, smarter, and more sustainable.
            </p>
            <p className="text-base md:text-lg text-primary font-semibold">
              Developed by Sudarshan G, Dept. of CSE, SJC Institute of Technology
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glow-card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
