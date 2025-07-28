import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, Mail, MessageSquare, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Call us now at <a href="tel:+13134749199" className="text-primary font-bold hover:underline text-xl">1(313)474-9199</a> for immediate assistance
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-2">
            Or schedule your free 30-minute consultation below
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-semibold mb-6">Schedule Your Free Consultation</h3>
              
              <div className="mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary mb-6 text-center">
                  <h4 className="font-semibold">Prefer to call us directly?</h4>
                  <a href="tel:+13134749199" className="text-xl font-bold text-primary hover:underline block mt-1">
                    1(313)474-9199
                  </a>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Schedule with our Calendar</h4>
                <a 
                  href="https://cal.com/harburg-automation/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
                >
                  Select a Time Slot
                </a>
              </div>
              
              <div className="border-t pt-6 mt-6">
                <div className="text-center py-6">
                  <p className="font-bold text-lg bg-blue-50 p-3 rounded-lg border-l-4 border-primary mb-4">No obligation. No sales pressure. Just honest conversation.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Consultation Details
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary mt-0.5" />
                      <span>30-minute free discovery call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Learn how our AI receptionist can help your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary mt-0.5" />
                      <span>Flexible scheduling - we work around your availability</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact Us Directly</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:mark@harburgautomation.com" className="text-blue-600 hover:underline">mark@harburgautomation.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+13134749199" className="text-blue-600 hover:underline">1(313)474-9199</a>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Trust & Transparency</h4>
              <p className="text-gray-600 text-sm mb-4">
                We believe in building honest relationships. You'll get straightforward advice about whether our solution is right for you – even if that means recommending something else.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.78 11.47l-4.12 2.19a.5.5 0 0 1-.74-.44V7.22l-2.19 4.1a.5.5 0 0 1-.9-.47l4.12-7.73a.5.5 0 0 1 .9 0l4.12 7.73a.5.5 0 0 1-.2.67.5.5 0 0 1-.69-.05z"/>
                </svg>
                <span>Customer satisfaction is our top priority</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}