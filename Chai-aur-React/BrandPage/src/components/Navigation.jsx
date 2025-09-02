import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/pricing", label: "Pricing" },
  { path: "/solution", label: "Solution" },
  { path: "/english", label: "English" },
];

function Navigation() {
  return (
    <nav className="bg-gray-dark px-8 py-6 flex justify-between items-center">
      {/* Left: Logo */}
      <NavLink to="/" className="text-accent-orange text-xl font-bold">
        Pixel Rise
      </NavLink>

      {/* Center: Nav Buttons */}
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded transition ${
                isActive
                  ? "bg-accent-orange text-white"
                  : "bg-gray-light text-white hover:bg-gray-500"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Right: Login */}
      <NavLink
        to="/login"
        className="bg-black text-white px-5 py-2 rounded hover:bg-gray-900"
      >
        Login/Register
      </NavLink>
    </nav>
  );
}

export default Navigation;
