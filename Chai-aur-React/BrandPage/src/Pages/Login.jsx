import { motion } from "framer-motion";

function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-dark px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black rounded-2xl shadow-lg p-10 w-full max-w-md"
      >
        {/* Title */}
        <h1 className="text-accent-orange text-3xl font-bold mb-6 text-center">
          Login to Pixel Rise
        </h1>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded bg-gray-light text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-accent-orange"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded bg-gray-light text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-accent-orange"
          />

          <button
            type="submit"
            className="bg-accent-orange text-white py-3 rounded hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-gray-light text-center mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-accent-gold hover:underline">
            Register
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default Login;
