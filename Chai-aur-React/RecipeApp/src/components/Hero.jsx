export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh]"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/e8/f2/5e/e8f25e7467060e00f8d4cb3d98ca83e5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
          Discover Tasty Recipes
        </h1>

        <p className="text-white/80 text-lg mb-6 max-w-xl text-center">
          Find new ideas for breakfast, lunch, and dinner.
        </p>

        <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}
