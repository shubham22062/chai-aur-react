import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) => isActive
        ? "px-4 py-2 rounded-lg bg-blue-600 text-white"
        : "px-4 py-2 rounded-lg hover:bg-blue-100";
    return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-gray-600">
          RouterApp
        </Link>
        <div className="flex gap-4">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

