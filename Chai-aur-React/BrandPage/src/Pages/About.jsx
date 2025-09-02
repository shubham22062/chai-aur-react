import { motion } from "framer-motion";

function About() {
  return (
    <section className="text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-accent-orange text-4xl md:text-5xl mb-4 font-bold"
      >
        Welcome to Pixel Rise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-light text-lg md:text-xl max-w-2xl mx-auto"
      >
        Your hub for marketing technology solutions. We combine innovation,
        design, and technology to help brands grow in the digital age.
      </motion.p>
    </section>
  );
}

export default About;
