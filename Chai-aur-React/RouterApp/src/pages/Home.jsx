function Home() {
  return (
    <div className="flex flex-col justify-center h-screen w-screen bg-gradient-to-br from-blue-50 to-gray-100 px-20">
      <h1 className="text-8xl font-extrabold text-blue-600 drop-shadow-sm w-full">
        Welcome to MyApp 🚀
      </h1>
      <p className="mt-10 text-3xl text-gray-700 leading-relaxed w-full">
        This is a simple React Router project built with{" "}
        <span className="font-semibold text-blue-500">React</span>,{" "}
        <span className="font-semibold text-green-500">Vite</span>, and{" "}
        <span className="font-semibold text-indigo-500">Tailwind CSS</span>.
        <br />
        The homepage now <strong>stretches fully across the screen</strong>,
        covering 100% width and height like a real landing page.
      </p>
    </div>
  );
}

export default Home;
