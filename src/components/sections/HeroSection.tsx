import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-0" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-60 h-60 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-2/3 left-1/4 w-36 h-36 bg-green-200 rounded-full opacity-20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-6">
                Your AI Receptionist That Never Sleeps
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Transform your business with an AI assistant that answers calls 24/7, schedules appointments, and ensures you never miss another customer again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 text-white transition-all duration-300">
                  <a href="#contact">
                    Schedule Free Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <a href="#features">
                    Explore Features
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Trusted by small businesses, healthcare providers, and dental practices across the country
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src="/assets/images/new_ai_receptionist.jpeg"
                    alt="AI Receptionist Avatar" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* AI icon */}
                  <div className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 2c1.1 0 2 .9 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4c0-1.1.9-2 2-2h2z"></path>
                      <path d="M8 5h8l-1 9.5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2L8 5z"></path>
                      <path d="M18 5h2l-1.5 9.5a3 3 0 0 1-3 2.5"></path>
                      <path d="M4 5h2l1.5 9.5a3 3 0 0 0 3 2.5"></path>
                      <path d="M10 12h4"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -left-6 top-1/4 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 3 } }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-sm">24/7 Available</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-6 bottom-1/4 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0], transition: { repeat: Infinity, duration: 4, delay: 1 } }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-sm">HIPAA Compliant</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}