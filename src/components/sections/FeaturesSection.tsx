import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Phone, Calendar, Database, Shield, MessageSquare, Users, Globe, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-gray-200 hover:border-primary/40 transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6">
          <div className="mb-4 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Zero Missed Opportunities",
      description: "Capture every single patient call 24/7. No more lost revenue from missed calls during lunch, after hours, or busy periods.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Instant Patient Qualification",
      description: "Pre-qualify patients based on insurance, urgency, and treatment needs before they even reach your staff.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "Real-time Appointment Booking",
      description: "Book appointments instantly while patients are on the phone. No callbacks needed, no lost opportunities.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "HIPAA-Compliant Security",
      description: "Bank-level security ensures all patient information is protected and compliant with healthcare regulations.",
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "EHR/EMR Integration",
      description: "Seamlessly connects with your existing patient management systems. No disruption to your current workflow.",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Emergency Call Intelligence",
      description: "Instantly identifies urgent cases and routes them appropriately while handling routine calls automatically.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Natural Patient Conversations",
      description: "Patients can't tell they're talking to AI. Handles complex medical scheduling with human-like understanding.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Staff Productivity Boost",
      description: "Free up your front desk staff to focus on in-person patients while AI handles all phone interactions.",
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Multi-language Patient Support",
      description: "Serve diverse patient populations in their preferred language, expanding your clinic's reach.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Guaranteed Results Tracking",
      description: "Real-time dashboard shows exactly how many new clients are being generated to ensure we hit our 40+ guarantee.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Medical Clinics or Med Spas Doing Over $70K+ Per Month Choose Our SafetyNet System</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The only AI system specifically designed to guarantee 40 new clients in your first 60 days for established medical practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}