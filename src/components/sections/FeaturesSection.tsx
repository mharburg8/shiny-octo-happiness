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
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Availability",
      description: "Our AI receptionist never sleeps, takes breaks, or goes on vacation. Be available for your customers around the clock.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Custom AI Training",
      description: "Trained on YOUR specific business data to provide accurate, personalized service that represents your brand perfectly.",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Intelligent Call Routing",
      description: "Automatically routes calls to the right department or staff member and sends instant notifications.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Appointment Scheduling",
      description: "Seamlessly books appointments based on your real-time availability, eliminating double-bookings.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "HIPAA Compliant",
      description: "Purpose-built solutions for healthcare and dental practices with full regulatory compliance.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Natural Conversations",
      description: "Advanced AI that handles natural conversations, understands context, and provides helpful responses.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Lead Qualification",
      description: "Automatically qualifies leads and collects relevant information before transferring to your team.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "CRM Integration",
      description: "Seamlessly updates your CRM with call data, notes, and customer information in real-time.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multi-language Support",
      description: "Communicate with customers in their preferred language, expanding your market reach.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "System Integrations",
      description: "Works with your existing tools and software, creating a unified workflow that saves time.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Perfect AI Receptionist</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our AI solution is designed specifically for small and medium businesses, offering enterprise-level features at an affordable price.
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