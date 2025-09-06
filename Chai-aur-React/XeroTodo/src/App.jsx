import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">
          ✨ My Todo App
        </h1>

        {/* Input Form */}
        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white 
                       border border-gray-700 placeholder-gray-400 
                       focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            aria-label="Add task"
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="space-y-3">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-lg shadow-md"
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-1 cursor-pointer select-none ${
                    todo.done
                      ? "line-through text-gray-500"
                      : "text-gray-100 font-medium"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  aria-label="Delete task"
                  className="text-red-400 hover:text-red-600 font-bold"
                >
                  ✕
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {todos.length === 0 && (
          <p className="text-gray-500 text-center mt-6">No tasks yet 🚀</p>
        )}
      </div>
    </div>
  );
}
