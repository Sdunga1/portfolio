import {
  assets,
  infoList,
  languagesData,
  frameworkData,
  toolsData,
} from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const About = ({ isDarkMode }) => {
  const getAltText = imgSrc => {
    const src = typeof imgSrc === 'string' ? imgSrc : imgSrc?.src;
    const match = src?.match(/\/([^/]+)\.[a-z]+$/);
    return match ? match[1].split('.')[0].replace(/[-_]/g, ' ') : 'Tech Icon';
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-14"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-3xl font-Ovo">
            I'm a Master's student in Software Engineering at Arizona State
            University, driven by a passion for building impactful solutions
            through clean code and thoughtful design. I love brainstorming and
            solving complex problems. Currently, I’m seeking opportunities where
            I can combine my problem-solving mindset creating real-world impact.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
          >
            {/* Left column: Languages, Frameworks, Tools */}
            <div className="col-span-2 flex flex-col gap-6">
              <div>
                <h4 className="my-2 text-gray-700 font-Ovo dark:text-white/80">
                  Languages
                </h4>
                <ul className="flex items-center flex-wrap gap-3 sm:gap-5">
                  {languagesData.map((lang, index) => (
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      key={`lang-${index}`}
                      className="relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                    >
                      <Image
                        src={lang}
                        alt={getAltText(lang)}
                        className="w-5 sm:w-7"
                      />
                      <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {getAltText(lang)}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="my-2 text-gray-700 font-Ovo dark:text-white/80">
                  Frameworks
                </h4>
                <ul className="flex items-center flex-wrap gap-3 sm:gap-5">
                  {frameworkData.map((fw, index) => (
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      key={`fw-${index}`}
                      className="relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                    >
                      <Image
                        src={fw}
                        alt={getAltText(fw)}
                        className="w-5 sm:w-7"
                      />
                      <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {getAltText(fw)}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="my-2 text-gray-700 font-Ovo dark:text-white/80">
                  Tools
                </h4>
                <ul className="flex items-center flex-wrap gap-3 sm:gap-5">
                  {toolsData.map((tool, index) => (
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      key={`tool-${index}`}
                      className="relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                    >
                      <Image
                        src={tool}
                        alt={getAltText(tool)}
                        className="w-5 sm:w-7"
                      />
                      <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {getAltText(tool)}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right column: Education card */}
            <Link
              href="/education"
              scroll={true}
              className="block border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src={isDarkMode ? assets.edu_icon_dark : assets.edu_icon}
                  alt="Education"
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Education
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {
                    infoList.find(item => item.title === 'Education')
                      .description
                  }
                </p>

                <div
                  className={`mt-8 inline-flex items-center justify-center relative overflow-hidden p-0.5 rounded-full group font-Ovo ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-purple-600 to-blue-500'
                      : 'bg-gradient-to-br from-black to-gray-800'
                  }`}
                >
                  <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-gray-900 transition-all bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white dark:text-white border border-gray-300 dark:border-transparent">
                    Know More
                    <Image
                      src={
                        isDarkMode
                          ? assets.arrow_icon_dark
                          : isHovered
                          ? assets.arrow_icon_dark
                          : assets.arrow_icon
                      }
                      alt="arrow"
                      className="w-3 sm:w-3.5"
                    />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
