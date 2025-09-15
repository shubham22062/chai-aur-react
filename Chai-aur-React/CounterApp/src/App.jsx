import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } min-h-screen flex flex-col items-center justify-center transition-colors duration-300`}
    >
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Counter */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <p className="text-6xl font-semibold mb-6">{count}</p>

        <div className="space-x-3">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
          >
            ➕ Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            ➖ Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
