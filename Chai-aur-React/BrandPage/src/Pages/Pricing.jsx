import { motion } from "framer-motion";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19/mo",
      features: ["Basic Support", "1 Project", "Community Access"],
      color: "bg-gray-light text-black",
    },
    {
      name: "Pro",
      price: "$49/mo",
      features: ["Priority Support", "5 Projects", "Advanced Tools"],
      color: "bg-accent-orange text-white",
    },
    {
      name: "Enterprise",
      price: "$99/mo",
      features: ["Dedicated Support", "Unlimited Projects", "Custom Solutions"],
      color: "bg-accent-gold text-black",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-dark text-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-accent-orange text-4xl font-bold mb-10"
      >
        Pricing Plans
      </motion.h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`rounded-2xl shadow-lg p-8 ${plan.color}`}
          >
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="opacity-90">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
