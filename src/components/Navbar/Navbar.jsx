import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import NavLinks from "./NavLinks";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full shadow-md backdrop-blur-lg"
      style={{
        background: "var(--card)",
        color: "var(--text)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Akhil.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavLinks />
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="text-3xl md:hidden">
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="border-t md:hidden"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <NavLinks mobile setOpen={setOpen} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
