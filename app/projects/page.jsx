"use client";

import { ProjectList } from "@/data/ProjectList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

const ProjectsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  return (
    <div className={isDarkMode ? "dark bg-darkTheme text-white" : "bg-white"}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <motion.div
        className="w-full px-[12%] py-16 scroll-mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6 font-Ovo mt-16">
          All Projects
        </h2>
        {/* <p className="text-center max-w-2xl mx-auto font-Ovo mb-10 text-gray-700 dark:text-white/80">
          Here is the complete collection of projects I've worked on, each
          demonstrating practical skills and creativity.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ProjectList.map((project, index) => (
            <Link key={index} href={`/project?id=${index}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden shadow-md cursor-pointer group bg-white dark:bg-darkHover"
              >
                <div className="w-full h-52 relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-white/80 mt-1">
                    {project.skills}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProjectsPage;
