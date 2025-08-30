function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-purple-50 to-white px-6">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6 drop-shadow-sm">
        Contact Us 📩
      </h1>

      <form className="w-full max-w-lg bg-white p-8 shadow-xl rounded-2xl border border-gray-200">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Message"
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="4"
        ></textarea>
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
