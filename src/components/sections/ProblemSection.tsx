import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneMissed, Clock, FileWarning, UserX } from "lucide-react";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ProblemCard = ({ icon, title, description, delay }: ProblemCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
    >
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: <PhoneMissed className="h-6 w-6 text-primary" />,
      title: "Missed Calls, Missed Opportunities",
      description: "Every unanswered call is a potential customer lost to your competition, impacting your bottom line directly.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Limited Availability",
      description: "Even the best receptionist can't be available 24/7, but your customers expect round-the-clock service.",
    },
    {
      icon: <FileWarning className="h-6 w-6 text-primary" />,
      title: "Manual Process Errors",
      description: "Manual appointment booking and data entry lead to mistakes, double-bookings, and frustrated customers.",
    },
    {
      icon: <UserX className="h-6 w-6 text-primary" />,
      title: "High Customer Expectations",
      description: "Modern customers expect immediate, professional responses at any time of day or night.",
    },
  ];

  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Challenge Every Business Faces</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Small and medium-sized businesses struggle with customer communication every day. Here's what you're up against:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 20 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-700 font-medium italic">
            "What if you never had to worry about missing a customer call again?"
          </p>
        </motion.div>
      </div>
    </section>
  );
}