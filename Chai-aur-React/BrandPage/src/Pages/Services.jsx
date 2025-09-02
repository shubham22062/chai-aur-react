import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with SEO, ads, and social media campaigns.",
      icon: "📢",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive, and high-performing websites tailored to your needs.",
      icon: "💻",
    },
    {
      title: "Brand Strategy",
      description:
        "Define your brand identity and connect better with your audience.",
      icon: "🎨",
    },
    {
      title: "Data Analytics",
      description:
        "Make smarter decisions with insights from your business data.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-dark text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-accent-orange text-4xl font-bold mb-10"
      >
        Our Services
      </motion.h1>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-light text-black rounded-2xl p-8 shadow-lg hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
            <p className="opacity-90">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
