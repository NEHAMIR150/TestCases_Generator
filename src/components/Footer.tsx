import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 px-6 text-center">
      {/* Top: Copyright */}
      <p className="text-sm mb-3">
        &copy; {new Date().getFullYear()} Supertech Test Case Generator. All rights reserved.
      </p>

      {/* Bottom: Contact + Social (centered in one row) */}
      <div className="flex items-center justify-center space-x-6">
        {/* Contact */}
        <Link href="/contact" className="hover:text-blue-400">
          Contact Us
        </Link>

        {/* Social Media */}
        <a
          href="https://www.linkedin.com/in/super-tech-9a4676381"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow on LinkedIn"
          aria-label="LinkedIn"
        >
          <Image
            src="/link.png"
            alt="LinkedIn Logo"
            width={24}
            height={24}
            className="hover:opacity-80 transition duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/supertech_tcg.official/"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow on Instagram"
          aria-label="Instagram"
        >
          <Image
            src="/insta.jpg"
            alt="Instagram Logo"
            width={24}
            height={24}
            className="hover:opacity-80 transition duration-200 rounded-full"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
