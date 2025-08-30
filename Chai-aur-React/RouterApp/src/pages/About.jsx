function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-green-50 to-gray-100 text-center px-8">
      <h1 className="text-5xl font-extrabold text-green-600 drop-shadow-sm mb-6">
        About Us 🌟
      </h1>

      <p className="mt-4 text-xl text-gray-700 leading-relaxed max-w-3xl">
        We are a team of passionate developers focused on building{" "}
        <span className="font-semibold text-blue-500">modern</span> and{" "}
        <span className="font-semibold text-indigo-500">scalable</span> web
        applications using{" "}
        <span className="font-semibold text-green-600">React</span>,{" "}
        <span className="font-semibold text-purple-600">Vite</span>, and{" "}
        <span className="font-semibold text-pink-500">Tailwind CSS</span>.  
        <br />  
        Our mission is to craft seamless user experiences and deliver
        cutting-edge solutions that empower businesses and individuals.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-green-600">🚀 Innovation</h2>
          <p className="mt-2 text-gray-600">
            We embrace the latest technologies to stay ahead of the curve.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-blue-600">🤝 Collaboration</h2>
          <p className="mt-2 text-gray-600">
            We believe in teamwork, transparency, and growing together.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-purple-600">🎯 Excellence</h2>
          <p className="mt-2 text-gray-600">
            Delivering top-quality solutions is at the heart of everything we do.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
