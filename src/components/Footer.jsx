import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <div className="flex items-start gap-2 mb-1">
            <MapPin size={16} className="mt-0.5 text-cyan-400" />
            <div>
              <p>WZ-409C, T/F Plot#1</p>
              <p>Janak Park, Hari Nagar</p>
              <p>New Delhi - 110064</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Mail size={16} className="text-cyan-400" />
            <p>info@berginfotech.co.in</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Phone size={16} className="text-cyan-400" />
            <p>+91 98995 82618</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <ArrowRight size={14} className="text-cyan-400" />
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <ArrowRight size={14} className="text-cyan-400" />
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <ArrowRight size={14} className="text-cyan-400" />
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <ArrowRight size={14} className="text-cyan-400" />
              <Link to="/careers">Careers</Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <ArrowRight size={14} className="text-cyan-400" />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <LinkIcon size={14} className="text-cyan-400" />
              <Link to="/services/inbound">Inbound</Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <LinkIcon size={14} className="text-cyan-400" />
              <Link to="/services/outbound">Outbound</Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <LinkIcon size={14} className="text-cyan-400" />
              <Link to="/services/data-management">Data Management</Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <LinkIcon size={14} className="text-cyan-400" />
              <Link to="/services/backend">Backend</Link>
            </li>
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Work Hours</h3>
          <div className="flex items-center gap-2 mb-1">
            <Clock size={16} className="text-cyan-400" />
            <p>05:00 AM – 02:00 PM</p>
          </div>
          <p>Monday – Saturday</p>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              BERG INFOTECH LLP provides organizations of all sizes with the
              best, most trustworthy business solutions in the ever-evolving
              technology market.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 px-4 gap-2 text-center md:text-left">
        <p>© 2020–{currentYear} BERG Infotech. All rights reserved.</p>
        <p> Developed by Medhavi Rampal</p>
      </div>
    </footer>
  );
};

export default Footer;
