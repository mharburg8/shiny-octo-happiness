import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DemoFormSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience our AI system live! Choose your preferred method below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Column - Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-4 rounded-xl shadow-lg border border-blue-200 h-full">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Get an Instant Demo Call</h3>
              
              <div className="mb-4">
                <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500 mb-4 text-center">
                  <h4 className="font-bold text-amber-600">Experience Our AI System Live!</h4>
                  <p className="text-sm text-blue-700 mt-1">Fill out the form below and we will call right away - be ready!</p>
                </div>
              </div>
              
              <form className="space-y-3" action="https://hook.us2.make.com/vf4vruhbx2uv1vq9uthlqorungh219av" method="POST">
                <div>
                  <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="demo-name"
                    name="name"
                    required
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="demo-company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="demo-company"
                    name="company"
                    required
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="demo-email"
                    name="email"
                    required
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="demo-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="demo-phone"
                    name="phone"
                    required
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-amber-500 text-white rounded-md font-bold hover:bg-amber-600 transition-colors text-center slow-pulse text-base"
                >
                  CALL ME NOW - Show Me The Demo!
                </button>
              </form>
              
              <div className="border-t pt-4 mt-4">
                <div className="text-center py-3">
                  <p className="font-bold text-sm bg-blue-50 p-2 rounded-lg border-l-4 border-blue-400">We will call right away - be ready!</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white p-4 rounded-xl shadow-lg border border-blue-200 h-full">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Schedule a Strategy Call</h3>
              
              <div className="mb-4">
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 mb-4 text-center">
                  <h4 className="font-semibold text-blue-600">Zero-Pressure Consult</h4>
                  <p className="text-sm text-gray-700 mt-1">Book a time that works for you to discuss your specific needs.</p>
                </div>
              </div>

              {/* What We'll Cover */}
              <div className="mb-4 space-y-2">
                <h4 className="font-semibold text-gray-800 mb-2">What we'll cover:</h4>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Zero-pressure consult</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Timeline & budget alignment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Security & compliance review</p>
                </div>
              </div>
              
              {/* Book Calendar Button */}
              <div className="mb-4">
                <a 
                  href="https://cal.com/harburg-automation/30min?overlayCalendar=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-md font-bold transition-all duration-300 text-center block text-base"
                >
                  Book Calendar
                </a>
              </div>
              
              {/* Calendly Embed */}
              <div className="calendly-inline-widget" 
                   data-url="https://calendly.com/harburg-automation/30min"
                   style={{ minWidth: '320px', height: '300px' }}>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Or call us directly: 
                  <a href="tel:+13134749199" className="text-blue-600 font-bold hover:underline ml-1">
                    1(313)474-9199
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}