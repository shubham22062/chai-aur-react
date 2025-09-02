import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import English from "./Pages/English";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Solution from "./Pages/Solution";

function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-dark min-h-screen text-white font-pixel">
      <Navigation />
      <div className="p-8">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/english" element={<English />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <h1 className="text-center text-red-400 py-20">
                  404 - Page Not Found
                </h1>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
