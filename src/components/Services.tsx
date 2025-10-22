import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrafficCone,
  Bus,
  Heart,
  AlertCircle,
  Lightbulb,
  Droplets,
  MessageCircle,
  GraduationCap,
  CloudRain,
  Trash2,
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const services = [
    {
      icon: TrafficCone,
      title: "Smart Traffic Management",
      description:
        "AI-based traffic prediction, live congestion monitoring, accident detection using IoT sensors, and emergency vehicle priority signal control for seamless urban mobility.",
    },
    {
      icon: Bus,
      title: "Public Transport",
      description:
        "Real-time bus and train schedules with GPS tracking, digital ticketing, and AI-powered route optimization for efficient commuting.",
    },
    {
      icon: Heart,
      title: "Health Services",
      description:
        "Integration with local hospitals and clinics, online appointment booking, and nearby hospital locator for quick access to healthcare.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Help",
      description:
        "Quick-access links for police, fire, and ambulance services. SOS button with live emergency alert broadcast for rapid response.",
    },
    {
      icon: Lightbulb,
      title: "Smart Street Lighting",
      description:
        "IoT-controlled adaptive lighting with automatic brightness adjustment based on conditions and maintenance alert notifications.",
    },
    {
      icon: Droplets,
      title: "Utilities Management",
      description:
        "Smart water and electricity usage dashboards with real-time alerts for outages and detailed consumption insights.",
    },
    {
      icon: MessageCircle,
      title: "Citizen Complaints & Feedback",
      description:
        "Online feedback form for local governance with AI-assisted complaint categorization, tracking, and resolution monitoring.",
    },
    {
      icon: GraduationCap,
      title: "Education & Awareness",
      description:
        "City-level awareness campaigns, training programs, and AI education initiatives to empower citizens with knowledge.",
    },
    {
      icon: CloudRain,
      title: "Natural Disaster Alerts",
      description:
        "Early warning system for floods, earthquakes, and severe weather with safety instructions and emergency contact information.",
    },
    {
      icon: Trash2,
      title: "Waste Management",
      description:
        "Garbage collection schedules, cleanliness tracking, and waste segregation awareness programs for a cleaner city.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            Explore Smart City Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive urban solutions powered by AI and IoT technology
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card p-6 group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <button className="mt-4 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
