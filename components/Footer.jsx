import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          sdunga1@asu.edu
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Sarath Kumar Dunga. All rights reserved.</p>
        <div
          className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-3 mt-4 sm:mt-0"
          role="group"
        >
          <a
            href="https://www.linkedin.com/in/sarath-kumar-dunga-0684a4360/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-purple-900 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-purple-900 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-purple-900 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <Image
              src={assets.leetcode}
              alt="LeetCode"
              className="w-4 h-4 mr-2"
            />
            LeetCode
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
