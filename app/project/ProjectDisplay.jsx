"use client";

import { useSearchParams } from "next/navigation";
import { ProjectList } from "@/data/ProjectList";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const ProjectDisplay = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const project = ProjectList[id];

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  if (!project) {
    return (
      <div className="text-center py-20 text-red-600 font-bold">
        Project not found.
      </div>
    );
  }

  return (
    <div className={isDarkMode ? "dark bg-darkTheme text-white" : "bg-white"}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <motion.div
        className="w-full px-[12%] py-14 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-16">
          {project.name}
        </h1>

        <p className="text-md text-gray-700 dark:text-white/80 mb-4">
          <b>Skills:</b> {project.skills}
        </p>

        <div className="flex gap-4 flex-wrap mb-10">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
          >
            <Image src={assets.github_light} alt="GitHub" className="w-4 h-4" />
            Source Code
          </a>

          <a
            href={project.deploy}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-indigo-700 transition"
          >
            <Image src={assets.send_icon} alt="Live" className="w-4 h-4" />
            Try Live
          </a>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-video border rounded-xl overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProjectDisplay;
