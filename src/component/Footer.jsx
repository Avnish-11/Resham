import { NavLink } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#123557] text-white px-[156px] py-[43px]">
      {/* Top Divider Line */}
      <div className="border-t border-gray-500 w-full mb-[26px]"></div>

      <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Section 1: Logo, Links, and Info */}
        <div className="flex items-center gap-[52px]">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div>RESHAM</div>
            
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-6 lg:space-y-0 text-center lg:text-left">
            {/* Company Links */}
            <div>
              <h3 className="font-roboto font-bold text-base mb-2.5">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/about"
                    className="hover:underline font-inter font-light text-sm"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className="hover:underline font-inter font-light text-sm"
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Terms Links */}
            <div>
              <h3 className="font-roboto font-bold text-base mb-2.5">Terms</h3>
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/data-privacy"
                    className="hover:underline font-inter font-light text-sm"
                  >
                    Data Privacy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms"
                    className="hover:underline font-inter font-light text-sm"
                  >
                    Terms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/accessibility"
                    className="hover:underline font-inter font-light text-sm"
                  >
                    Accessibility
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Related Links */}
            <div>
              <h3 className="font-roboto font-bold text-base mb-2.5">
                Related
              </h3>
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/find-buyer"
                    className="hover:underline font-inter font-light text-sm"
                  >
                    Find Buyer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/feedback"
                    className="hover:underline font-inter font-light text-sm"
                  >
                    Feedback
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Social Media Icons */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6 text-xl">
            <div className="border-2 border-gray-500 rounded-full p-2 hover:bg-gray-200 transition">
              <NavLink
                to="#"
                aria-label="LinkedIn"
                className="hover:text-gray-600"
              >
                <FaLinkedin />
              </NavLink>
            </div>
            <div className="border-2 border-gray-500 rounded-full p-2 hover:bg-gray-200 transition">
              <NavLink
                to="#"
                aria-label="Twitter"
                className="hover:text-gray-600"
              >
                <FaTwitter />
              </NavLink>
            </div>
            <div className="border-2 border-gray-500 rounded-full p-2 hover:bg-gray-200 transition">
              <NavLink
                to="#"
                aria-label="Facebook"
                className="hover:text-gray-600"
              >
                <FaFacebook />
              </NavLink>
            </div>
            <div className="border-2 border-gray-500 rounded-full p-2 hover:bg-gray-200 transition">
              <NavLink
                to="#"
                aria-label="Instagram"
                className="hover:text-gray-600"
              >
                <FaInstagram />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Divider Line */}
      <div className="border-t border-gray-500 w-full mt-[22px]"></div>
    </footer>
  );
};

export default Footer;
