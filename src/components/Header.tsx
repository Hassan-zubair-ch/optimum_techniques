import { Link } from "react-router-dom";
import Logo from "../assets/svgs/Logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:px-8 py-[21px]">
        
        {/* LEFT DIV: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* RIGHT DIV: Nav + CTA */}
        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/about"
              className="font-normal text-[14px] leading-[22.4px] tracking-[-0.4px] text-gray-900 hover:text-blue-700"
            >
              About us
            </Link>
            <Link
              to="/services"
              className="font-normal text-[14px] leading-[22.4px] tracking-[-0.4px] text-gray-900 hover:text-blue-700"
            >
              Services
            </Link>
            <Link
              to="/technical"
              className="font-normal text-[14px] leading-[22.4px] tracking-[-0.4px] text-gray-900 hover:text-blue-700"
            >
              Technical Capabilities
            </Link>
            <Link
              to="/safety"
              className="font-normal text-[14px] leading-[22.4px] tracking-[-0.4px] text-gray-900 hover:text-blue-700"
            >
              Safety & Compliance
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/contact">
            <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm cursor-pointer font-medium py-2 px-4 rounded">
              CONTACT US
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
