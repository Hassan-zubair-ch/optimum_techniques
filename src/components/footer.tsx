import { Link } from "react-router-dom";
import Logo from "../assets/svgs/LogoWh.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 bottom-0">
      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src={Logo} alt="Optimum Techniques" className="h-6" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
          <Link to="/about" className="hover:text-white">About us</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/technical" className="hover:text-white">Technical Capabilities</Link>
          <Link to="/safety" className="hover:text-white">Safety & Compliance</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 py-4">
        Copyright © 2025 Optimum Techniques. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
