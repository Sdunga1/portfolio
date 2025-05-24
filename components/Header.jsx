import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Sarath Kumar Dunga{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        <span style={{ whiteSpace: "pre" }}>
          <Typewriter
            words={[
              "Software Engineer.",
              "Data Enthusiast.",
              "Full-Stack Developer.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        {/* I am a Software Engineering Master's Student at Arizona State University, USA with hands-on expertise in building scalable, cloud-native applications using AWS, Python, and React. As a Graduate Services Assistant and Supplemental Instruction Leader, I drive technical excellence and support student success in Data Structures and Algorithms, Operating Systems. */}
        I'm a Master's student in Software Engineering at Arizona State
        University, USA, actively seeking roles in Software Engineering,
        Full-Stack Development, Data Engineering, and Cloud Computing, where I
        can apply my problem-solving skills to positively create real-world
        impact.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          href="#contact"
          className="group relative px-10 py-3 rounded-full border border-white bg-black text-white dark:bg-transparent dark:border-white flex items-center gap-2 overflow-hidden shadow-md transform-gpu transition duration-300 ease-out hover:scale-105 hover:shadow-2xl"
        >
          <span className="relative z-10">contact me</span>
          <Image src={assets.right_arrow_white} alt="" className="w-4 z-10" />
          <span className="absolute inset-0 bg-white/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.a>

        {/* My Resume Button */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          href="/sample-resume.pdf"
          download
          className="group relative px-10 py-3 rounded-full border border-gray-500 bg-white text-black dark:text-black flex items-center gap-2 overflow-hidden shadow-md transform-gpu transition duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:bg-gray-100 hover:border-black dark:hover:bg-gray-200"
        >
          <span className="relative z-10">my resume</span>
          <Image src={assets.download_icon} alt="" className="w-4 z-10" />
          <span className="absolute inset-0 bg-black/5 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
