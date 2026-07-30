import { Link } from "react-router-dom";
import ThemeToggle from "../Theme/ThemeToggle";

const links = [
  { name: "Home", to: "#home" },
  { name: "Experience", to: "#experience" },
  { name: "Education", to: "#education" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contact" },
];

function NavLinks({ mobile = false, setOpen }) {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col items-center gap-6 py-6"
          : "flex items-center gap-8"
      }
    >
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.to}
            onClick={() => mobile && setOpen(false)}
            className="font-medium transition hover:text-blue-600"
            style={{ color: "var(--text)" }}
          >
            {link.name}
          </a>
        </li>
      ))}
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
}

export default NavLinks;
