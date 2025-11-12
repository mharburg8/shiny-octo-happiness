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
            {price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 mb-6">
            <div className="text-sm text-gray-600 mb-1">Included:</div>
            <div className="font-medium">{callAllowance}</div>
            {overage && <div className="text-sm text-gray-500 mt-1">Overage: {overage} / call</div>}
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
      title: "Starter",
      icon: <Building className="h-5 w-5 text-primary" />,
      price: "$2,500",
      description: "Pilot voice agent for one workflow",
      callAllowance: "One agent persona",
      overage: "",
      features: [
        "One agent persona",
        "Up to 1k minutes/mo",
        "Basic analytics dashboard",
        "Email support",
      ],
      highlight: false,
    },
    {
      title: "Growth",
      icon: <Building2 className="h-5 w-5 text-primary" />,
      price: "$4,800",
      description: "Multi-flow agent with CRM",
      callAllowance: "Two personas + A/B",
      overage: "",
      features: [
        "Two personas + A/B",
        "Up to 3k minutes/mo",
        "CRM/Calendar integration",
        "Priority support",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      icon: <Hospital className="h-5 w-5 text-primary" />,
      price: "Custom",
      description: "Regulated & global scale",
      callAllowance: "SAML SSO & role-based access",
      overage: "",
      features: [
        "SAML SSO & role-based access",
        "Unlimited minutes option",
        "Custom SLAs & compliance",
        "Dedicated success engineer",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Voice Agent SafetyNet System</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            250+ New Appointments Every Month Within 60 Days - GUARANTEED
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-blue-500 shadow-lg shadow-blue-500/20 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Hospital className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl text-blue-600">AI Voice Agent SafetyNet System</CardTitle>
              </div>
              <CardDescription className="text-lg">
                The only system that GUARANTEES 250+ new appointments every month within 60 days
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-6 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold mb-4">MY IRON-CLAD GUARANTEE</h3>
                  <p className="text-lg mb-4">
                    We Guarantee You <strong>250+ New Appointments Every Month Within 60 Days</strong>
                  </p>
                  <div className="bg-blue-100 text-blue-800 p-4 rounded-lg font-bold text-lg">
                    Or you don't pay.
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-xl mb-4 text-blue-600">What You Get With The SafetyNet System:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>24/7 AI Voice Agent</strong> - Never miss a patient call again</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Automated Appointment Booking</strong> - Instant scheduling system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>HIPAA-Compliant</strong> - Full patient privacy protection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Lead Qualification</strong> - Only quality patients get through</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Insurance Verification</strong> - Pre-qualify patients automatically</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Emergency Call Routing</strong> - Critical calls handled properly</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>EHR/EMR Integration</strong> - Seamless with your existing systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Appointment Reminders</strong> - Reduce no-shows by 80%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Follow-up Automation</strong> - Keep patients engaged</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Real-time Analytics</strong> - Track every appointment source</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Multi-language Support</strong> - Serve diverse patient populations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm"><strong>Complete Setup & Training</strong> - We handle everything</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Why This Works For Medical Clinics or Med Spas Doing Over $70K+ Per Month:</h4>
                  <p className="text-gray-700">
                    You already have the infrastructure, staff, and capacity to handle 250+ new appointments every month. 
                    The problem isn't your ability to serve clients - it's capturing every opportunity that calls your clinic. 
                    Our AI Voice Agent SafetyNet System ensures ZERO missed opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-lg py-6 slow-pulse">
                <a href="#contact">Schedule a Call - Show Me How This Works</a>
              </Button>
              <p className="text-center text-sm text-gray-600">
                This guarantee is ONLY available to Medical Clinics above $70k/month
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-lg font-medium text-primary">Don't let budget stop you — we're committed to finding a way to support your medical practice.</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex items-center gap-1 text-gray-500 underline underline-offset-2 hover:text-primary">
                Need a custom solution for your clinic? <Info className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>Contact us for custom medical practice solutions, including multi-location support, specialized integrations, and volume discounts.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="mt-6 text-sm text-gray-500">
            Includes complete setup, staff training, HIPAA compliance training, and ongoing support. Monthly payment plans available.
          </p>
        </div>
      </div>
    </section>
  );
}