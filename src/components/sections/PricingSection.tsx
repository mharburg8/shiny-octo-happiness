import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Building, Building2, Hospital, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingTierProps {
  title: string;
  icon: React.ReactNode;
  price: string;
  description: string;
  features: string[];
  callAllowance: string;
  overage: string;
  highlight?: boolean;
  index: number;
}

const PricingTier = ({ 
  title, 
  icon, 
  price, 
  description, 
  features, 
  callAllowance,
  overage,
  highlight = false, 
  index 
}: PricingTierProps) => {
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
      className="h-full"
    >
      <Card className={`h-full flex flex-col ${highlight ? 'border-primary shadow-lg shadow-primary/10' : ''}`}>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-6">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-gray-500 ml-1">/month</span>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 mb-6">
            <div className="text-sm text-gray-600 mb-1">Included:</div>
            <div className="font-medium">{callAllowance}</div>
            <div className="text-sm text-gray-500 mt-1">Overage: {overage} / call</div>
          </div>
          
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className={`w-full ${highlight ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'}`}>
            <a href="#contact">Get Started</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingTiers = [
    {
      title: "Core",
      icon: <Building className="h-5 w-5 text-primary" />,
      price: "$799",
      description: "For local trades & small businesses",
      callAllowance: "600 mins / 240 calls",
      overage: "$0.95",
      features: [
        "24/7 Call answering",
        "Appointment scheduling",
        "Calendar integration",
        "CRM sync",
        "Customer notifications",
        "Post-Call SMS / Text Automations",
        "Chat / Web-Widget",
        "Basic reporting",
      ],
      highlight: false,
    },
    {
      title: "Growth",
      icon: <Building2 className="h-5 w-5 text-primary" />,
      price: "$1,495",
      description: "Multi-location or high-volume SMBs",
      callAllowance: "1,500 mins / 750 calls",
      overage: "$0.85",
      features: [
        "Everything in Core plus:",
        "Outbound reminder calls",
        "Daily call summaries",
        "Advanced reporting",
        "Custom call routing",
        "Lead qualification",
        "Post-Call SMS / Text Automations",
        "Chat / Web-Widget",
        "Multi-language support",
      ],
      highlight: true,
    },
    {
      title: "Healthcare HIPAA",
      icon: <Hospital className="h-5 w-5 text-primary" />,
      price: "$2,950",
      description: "Dental, clinics, med-spa practices",
      callAllowance: "2000 mins / 750 calls",
      overage: "$1.00",
      features: [
        "Everything in Growth plus:",
        "Business Associate Agreement",
        "HIPAA compliance",
        "Encrypted call logs",
        "Secure messaging",
        "Patient verification",
        "Post-Call SMS / Text Automations",
        "Chat / Web-Widget",
        "Quarterly compliance reports",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            No hidden fees. No surprises. Just honest pricing for honest service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              icon={tier.icon}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              callAllowance={tier.callAllowance}
              overage={tier.overage}
              highlight={tier.highlight}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-lg font-medium text-primary">Don't let budget stop you — we're committed to finding a way to support you.</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex items-center gap-1 text-gray-500 underline underline-offset-2 hover:text-primary">
                Need a custom solution? <Info className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>Contact us for custom enterprise solutions, including dedicated support, custom integrations, and volume discounts.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="mt-6 text-sm text-gray-500">
            All plans include setup, training, and ongoing support. Annual billing discounts available.
          </p>
        </div>
      </div>
    </section>
  );
}