"use client";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// import { images } from '../../constants';
export const navbarItems = [
  { id: "graphic-design", title: "Graphic Design", link: "/graphic-design" },
  {
    id: "software-development",
    title: "Software Development",
    link: "/software-development",
  },
  { id: "data-analysis", title: "Data Analysis", link: "/data-analysis" },
  {
    id: "copywriting",
    title: "Content/Copywriting",
    link: "/copywriting",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    link: "/social-media-management",
  },
  { id: "blockchain", title: "Blockchain", link: "/blockchain" },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    link: "/digital-marketing",
  },
  {
    id: "network-engineering",
    title: "Network Engineering",
    link: "/network-engineering",
  },
  {
    id: "machine-learning",
    title: "AI/Machine Learning",
    link: "/machine-learning",
  },
  { id: "cyber-security", title: "Cyber Security", link: "/cyber-security" },
  { id: "contact", title: "contact us", link: "/contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-1 md:px-10 z-20 bg-[(255, 255, 255, 0.25)] absolute">
      <div className="flex justify-start items-center">
        <Link href={"/"}>
          <Image
            src={"/logo-removebg-preview.png"}
            alt="logo"
            width={150}
            height={10}
            className="w-[175px]"
          />
        </Link>
      </div>

      <div className="w-[42px] h-[42px] rounded-full relative flex justify-center items-center bg-blue-700 ">
        <HiMenuAlt4
          className="w-[30px] h-[30px]"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 bg-gray-100 bg-[url('/bgWhite.png')] bg-repeat bg-cover right-0 z-50 p-5 w-[80%] h-[100vh] flex flex-col justify-end items-end"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="w-[32px] h-[32px]"
            />
            <ul className="m-0 p-0 h-full w-full flex justify-start items-start flex-col">
              {navbarItems.map((item) => (
                <li
                  onClick={() => setToggle(false)}
                  className="flex items-center justify-center text-lg  py-2 text-gray-700"
                  key={item.id}
                >
                  <Link
                    href={item.link}
                    className="flex-col capitalize font-[500] transition-all duration-100 ease-in-out hover:text-blue-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
