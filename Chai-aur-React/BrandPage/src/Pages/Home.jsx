import { motion } from "framer-motion";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-accent-orange text-4xl md:text-6xl font-bold mb-6"
      >
        Welcome to Pixel Rise
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-light max-w-2xl text-lg md:text-xl"
      >
        Your hub for marketing technology solutions, helping brands grow with
        modern design, innovation, and pixel-perfect execution.
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 flex space-x-4"
      >
        <button className="bg-accent-orange text-white px-6 py-3 rounded hover:bg-red-700">
          Get Started
        </button>
        <button className="bg-gray-light text-black px-6 py-3 rounded hover:bg-gray-400">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}

export default Home;
