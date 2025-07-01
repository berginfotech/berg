import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/Careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const servicesSubLinks = [
    { name: "Outbound", path: "/services/outbound" },
    { name: "Inbound", path: "/services/inbound" },
    { name: "Backend", path: "/services/backend" },
    { name: "Data Management", path: "/services/data-management" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-transparent text-white shadow-lg fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
     
<Link to="/" className="flex items-center space-x-2">
  <img
    src="/logo.png"
    alt="Berg Infotech Logo"
    className="h-10 w-10 object-contain drop-shadow-lg"
  />
  <span className="text-2xl font-bold tracking-wide text-cyan-400 drop-shadow-md">
   <span className="text-white">  Berg Infotech</span>
  </span>
</Link>


        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium items-center">
          {navLinks.map(({ name, path }) =>
            name === "Services" ? (
              <li key={name} className="relative group">
                <Link
                  to={path}
                  className="flex items-center hover:text-cyan-400 transition-all"
                >
                  {name}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <ul className="absolute top-full left-0 mt-2 bg-[#1e293b] text-white rounded-lg shadow-lg w-52 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-40">
                  {servicesSubLinks.map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        className="block px-4 py-2 hover:bg-cyan-600 hover:text-white transition-all"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={name}>
                <Link to={path} className="hover:text-cyan-400 transition-all">
                  {name}
                </Link>
              </li>
            )
          )}
        </ul>

      

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1e293b] text-white px-6 py-4 space-y-4">
          {navLinks.map(({ name, path }) =>
            name === "Services" ? (
              <div key={name}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left flex justify-between items-center hover:text-cyan-400"
                >
                  {name}
                  <ChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {servicesSubLinks.map(({ name, path }) => (
                      <li key={name}>
                        <Link
                          to={path}
                          className="block hover:text-cyan-400 transition-all"
                          onClick={() => setOpen(false)}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className="block text-base hover:text-cyan-400 transition-all"
              >
                {name}
              </Link>
            )
          )}
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
