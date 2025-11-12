import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneCall, PenTool, Zap, CheckCircle2 } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  isLast?: boolean;
}

const Step = ({ number, icon, title, subtitle, description, isLast = false }: StepProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className="relative"
    >
      {/* Connect steps with line */}
      {!isLast && (
        <div className="hidden md:block absolute left-12 top-24 bottom-0 w-0.5 bg-primary/20 z-0"></div>
      )}
      
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
            {icon}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              {number}
            </div>
          </div>
        </div>
        
        <div className="md:pt-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-primary font-medium mb-2">{subtitle}</p>
          <p className="text-gray-600 max-w-lg">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: "Free Discovery Call",
      subtitle: "Curious? Don't be shy!",
      description: "Schedule a no-obligation consultation where we'll discuss your business needs, challenges, and how our AI receptionist can help. We'll answer all your questions and provide a clear roadmap."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Custom Solution Design",
      subtitle: "Built for your unique business",
      description: "We dive deep into your business, services, and ideal workflow to create the perfect solution scope. Your AI receptionist will be customized to match your brand voice and specific requirements."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Build & Test Together",
      subtitle: "A collaborative approach",
      description: "Your personalized AI is built and thoroughly tested with your direct input. We fine-tune the system based on your feedback and only launch when you're completely satisfied with the performance."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Go Live with Full Support",
      subtitle: "We're with you every step",
      description: "Your AI receptionist goes live and starts handling calls immediately. Our team provides ongoing support, regular check-ins, and continuous improvements to ensure optimal performance."
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Process, Powerful Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Getting started with Harburg Automation is easy. Our streamlined process ensures your AI receptionist is up and running quickly.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              subtitle={step.subtitle}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}