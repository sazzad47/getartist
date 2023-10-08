import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer py-5 bg-black text-slate-200">
      <div className="footer_container p-3 pb-0">
        <div className="md:flex items-start">
          <div className="footer-col">
            <h4>For Customers</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link
                  href=""
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  How It Works
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href=""
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Insurance
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href=""
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Reviews
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href=""
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Book An Artist Pay
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>For Artists</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Reasons to Join
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Apply to Join
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Open Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Pricing Calculator
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Famous Grafitti
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="no-underline text-inherit hover:opacity-[0.8]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="relative">follow us</h4>
            <div className="flex gap-3 items-center">
              {[
                {
                  id: 1,
                  domain: "https://www.facebook.com/",
                  icon: <FaFacebookF className="text-lg" />,
                },
                {
                  id: 2,
                  domain: "https://www.instagram.com/",
                  icon: <FaInstagramSquare className="text-lg" />,
                },
                {
                  id: 3,
                  domain: "https://www.linkedin.com/",
                  icon: <FaLinkedinIn className="text-lg" />,
                },
                {
                  id: 4,
                  domain: "https://twitter.com/",
                  icon: <FaTwitterSquare className="text-lg" />,
                },
                {
                  id: 5,
                  domain: "https://www.youtube.com/",
                  icon: <FaYoutube className="text-lg" />,
                },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="w-full flex justify-center mt-5 text-sm">
          {"Copyright © "}
          {new Date().getFullYear()} GetArtist
        </div>
      </div>
    </footer>
  );
};

export default Footer;
