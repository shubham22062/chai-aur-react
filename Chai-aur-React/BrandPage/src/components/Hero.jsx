import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl text-accent-orange mb-6"
      >
        Marketing Technology
      </motion.h1>

      {/* Subheading */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="max-w-2xl text-gray-light text-lg md:text-xl"
      >
        Helping brands grow with modern design, tech-driven solutions, and
        pixel-perfect execution.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="mt-8 flex space-x-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent-orange text-white px-6 py-3 rounded hover:bg-red-700"
        >
          Get Started
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-light text-black px-6 py-3 rounded hover:bg-gray-400"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
