"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";

const featuredWork = [
  {
    title: "ASU Sun Award",
    description:
      "Honored to receive the SUN Award for Exemplary Service for impactful mentorship and collaboration at ASU.",
    image: "/assets/featuredImages/image1.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7329478132564930560/",
  },
  {
    title: "LeetCode #500 Days",
    description:
      "Received 500 days of problem-solving badge on Leetcode - a journey of consistency, and continuous learning.",
    video: "/assets/featuredImages/leetcode.mp4",
    isVideo: true,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7331589560881111041/",
  },
  {
    title: "Graduate Services Assistant @ ASU",
    description:
      "Closely worked with Prof. Ruben Acuña, serving as a grader for DSA and Operating Systems at ASU.",
    image: "/assets/featuredImages/grader.png",
    link: "https://search.asu.edu/profile/4979732",
  },
  {
    title: "GistiFi AI Summarizer",
    description:
      "Built and published a Chrome extension that analyzes BigOh complexity of code snippets and summarizes web articles using the Gemini API",
    image: "/assets/featuredImages/GistiFi.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7331589560881111041/",
  },
];

const FeaturedCarousel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const swiperRef = useRef(null);

  return (
    <motion.div
      id="featured"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="scroll-mt-28 w-full px-[12%] py-10"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Highlights
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Featured Work
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {featuredWork.map((project, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            <motion.a
              href={project.link}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block border border-gray-400 rounded-lg p-6 hover:shadow-lg hover:bg-lightHover dark:hover:bg-darkHover duration-300 dark:border-white/20"
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-md mb-4 bg-gray-100">
                {project.isVideo && isClient ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-contain rounded-md pointer-events-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : !project.isVideo ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain rounded-md"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full rounded-md" />
                )}
              </div>
              <h3 className="text-lg text-gray-700 dark:text-white font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mt-2 mb-4">
                {project.description}
              </p>
              <span className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Read more →
              </span>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }
      `}</style>
    </motion.div>
  );
};

export default FeaturedCarousel;
