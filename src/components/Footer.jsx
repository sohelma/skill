import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/*  Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact Info</h2>
          <p>📍 01234 Gulshan Ave,Dhaka,Bangladesh</p>
          <p>📞 +880 1712-3000000</p>
          <p>✉️ support@csticket.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaFacebook className="text-2xl bg-white text-black rounded-full p-1" />
              Facebook
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaXTwitter className="text-2xl bg-white text-black rounded-full p-1" />
              Twitter
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaLinkedin className="text-2xl bg-white text-black rounded-full p-1" />
              LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaInstagram className="text-2xl bg-white text-black rounded-full p-1" />
              Instagram
            </a>
          </div>
        </div>

        {/*  Privacy Policy */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Privacy & Policy</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-4">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
