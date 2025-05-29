"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  const roles = [
    "Software Engineer.",
    "Data Enthusiast.",
    "Full-Stack Developer.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCircularIndex = (baseIndex, offset, length) => {
    return (baseIndex + offset + length) % length;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [screenGap, setScreenGap] = useState(50);

  useEffect(() => {
    const updateGap = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenGap(24); // very small phones
      else if (width < 640) setScreenGap(30); // phones
      else if (width < 768) setScreenGap(40); // tablets
      else if (width < 1024) setScreenGap(46); // md
      else setScreenGap(52); // large screens
    };

    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20 sm:pt-28 md:pt-32">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Sarath Kumar Dunga{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      {/* Centered Carousel */}
      <div
        className="relative h-[200px] w-full max-w-[800px] min-w-[300px] px-2 flex items-center justify-center overflow-hidden 
  -mt-16 sm:-mt-10 md:-mt-12"
      >
        {[...Array(3)].map((_, i) => {
          const offset = i - 1;
          const index = getCircularIndex(currentIndex, offset, roles.length);
          const role = roles[index];

          const offsetY = offset * screenGap;
          let style = "opacity-0 scale-90 blur-sm z-0";
          if (offset === 0) {
            style = "opacity-100 scale-135 blur-0 z-20";
          } else {
            style = `opacity-30 scale-20 blur-sm z-10 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`;
          }
          return (
            <motion.div
              key={index}
              className={`absolute whitespace-nowrap transition-all duration-700 ease-in-out text-4xl sm:text-5xl md:text-5xl font-Ovo ${style}`}
              style={{
                transform: `translate(-50%, ${offsetY}px)`,
                left: "50%",
                top: "50%",
              }}
            >
              {role}
            </motion.div>
          );
        })}
      </div>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Aspiring Software Engineer driven to build impactful, real-world
        solutions across Full-Stack, Cloud, and Data domains. Actively seeking
        opportunities where I can apply my problem solving skills to create
        meaningful change through technology.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          href="#featured"
          className="group relative px-10 py-3 rounded-full border border-white bg-black text-white dark:bg-transparent dark:border-white flex items-center gap-2 overflow-hidden shadow-md transform-gpu transition duration-300 ease-out hover:scale-105 hover:shadow-2xl"
        >
          <span className="relative z-10">featured work</span>
          <Image src={assets.right_arrow_white} alt="" className="w-4 z-10" />
          <span className="absolute inset-0 bg-white/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.a>

        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          href="/SarathKumarDungaResume.pdf"
          download
          className="group relative px-10 py-3 rounded-full border border-gray-500 bg-white text-black dark:text-black flex items-center gap-2 overflow-hidden shadow-md transform-gpu transition duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:bg-gray-100 hover:border-black dark:hover:bg-gray-200"
        >
          <span className="relative z-10">my resume</span>
          <Image src={assets.download_icon} alt="" className="w-4 z-10" />
          <span className="absolute inset-0 bg-black/5 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.a>
      </div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="inline-flex rounded-md shadow-sm mt-6"
        role="group"
      >
        <a
          href="https://www.linkedin.com/in/sarath-kumar-dunga-0684a4360/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Image
            src={assets.linkedin}
            alt="LinkedIn"
            className="w-4 h-4 mr-2"
          />
          LinkedIn
        </a>

        <a
          href="https://github.com/Sdunga1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Image
            src={isDarkMode ? assets.github : assets.github_light}
            alt="GitHub"
            className="w-4 h-4 mr-2"
          />
          GitHub
        </a>

        <a
          href="https://leetcode.com/u/sarath09/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Image
            src={assets.leetcode}
            alt="LeetCode"
            className="w-4 h-4 mr-2"
          />
          LeetCode
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
