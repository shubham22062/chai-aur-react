import { motion } from "framer-motion";

function English() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-accent-orange text-4xl md:text-5xl font-bold mb-6"
      >
        English Resources
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-light max-w-xl text-lg md:text-xl"
      >
        Explore English guides, content, and resources tailored for global
        communication and branding. We provide language-focused solutions to
        help your business connect better with audiences worldwide.
      </motion.p>
    </section>
  );
}

export default English;
