import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Expertise = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        My Technical Expertise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I specialize in Software Engineering, Competitive Programming,
        Full-Stack Development and Data Engineering, combining strong coding
        fundamentals with real-world system design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-auto gap-4 sm:gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-4 py-6 sm:px-8 sm:py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <Image src={icon} alt="" className="w-8 sm:w-10" />
            <h3 className="text-sm sm:text-lg my-2 sm:my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            {/* <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Expertise;
