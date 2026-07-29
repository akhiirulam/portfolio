import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex justify-center items-center border border-gray-300 rounded-lg p-4 bg-gray-400 shadow-md">
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-black hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="transition-colors duration-300 hover:text-blue-600"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className="transition-colors duration-300 hover:text-blue-600"
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="transition-colors duration-300 hover:text-blue-600"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
