import { motion } from "framer-motion";

function Solution() {
  return (
    <section className="py-20 px-6 bg-gray-dark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-accent-orange text-4xl font-bold mb-6">
            Smart Solutions for Modern Businesses
          </h1>
          <p className="text-gray-light mb-6">
            At{" "}
            <span className="text-accent-gold font-semibold">Pixel Rise</span>,
            we deliver marketing technology solutions tailored to your business
            needs. From automation to AI-powered insights, we ensure your brand
            stays ahead.
          </p>
          <ul className="text-gray-light space-y-3">
            <li>✅ Marketing Automation</li>
            <li>✅ AI-Powered Analytics</li>
            <li>✅ Scalable Cloud Solutions</li>
            <li>✅ Personalized Strategies</li>
          </ul>
        </motion.div>

        {/* Right Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://cdn.dribbble.com/userupload/16277176/file/original-7b80e7f7ee3482c9b937c58bcfdb9c12.png?resize=1024x768"
            alt="Business Solutions"
            className="rounded-2xl shadow-lg max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Solution;
