'use client';

import { CertificationsList } from '@/data/CertificationsList';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';

const CertificationsCarousel = ({ isDarkMode }) => {
  const skillsRefs = useRef([]);
  const swiperRef = useRef(null);

  const scrollSkills = (index, direction) => {
    const container = skillsRefs.current[index];
    if (container) {
      const scrollAmount = 100;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      id="certifications"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Credentials and Badges
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        Certifications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Professional certifications and courses that showcase my commitment to
        continuous learning and technical excellence.
      </motion.p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={swiper => (swiperRef.current = swiper)}
        navigation
        pagination={{ clickable: true }}
        loop={CertificationsList.length > 1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
          1280: { slidesPerView: 4 },
        }}
        className="mt-12"
      >
        {CertificationsList.map((cert, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-400 rounded-lg p-4 hover:shadow-lg hover:bg-lightHover duration-300 dark:hover:bg-darkHover dark:border-white/20 mb-12"
            >
              {/* Certificate Image Preview */}
              <div className="relative w-full h-28 overflow-hidden rounded-md mb-4 bg-white dark:bg-gray-900">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {cert.name}
              </h3>

              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-white/70 mb-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="font-medium">{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-white/70 mb-3">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{cert.date}</span>
              </div>

              {/* Skills Tags with Scroll */}
              <div className="relative mb-3 group">
                {/* Left Chevron */}
                <button
                  onClick={() => scrollSkills(index, 'left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-5 h-5 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Scroll left"
                >
                  <svg
                    className="w-3 h-3 text-gray-700 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Skills Container */}
                <div
                  ref={el => (skillsRefs.current[index] = el)}
                  className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-6"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-xs font-medium border border-gray-500 bg-white text-gray-700 dark:bg-transparent dark:text-white dark:border-white/50 rounded-full whitespace-nowrap flex-shrink-0"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Right Chevron */}
                <button
                  onClick={() => scrollSkills(index, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-5 h-5 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Scroll right"
                >
                  <svg
                    className="w-3 h-3 text-gray-700 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-gray-600 dark:text-white/80 leading-5 mb-4 line-clamp-2">
                {cert.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-1.5 w-full">
                <a
                  href={cert.certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium bg-gray-800 text-white rounded hover:bg-gray-900 transition dark:bg-gray-700 dark:hover:bg-gray-600"
                  style={{ width: '60%' }}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  View
                </a>

                {cert.verifyUrl && cert.verifyUrl !== '#' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium border border-gray-300 text-gray-700 dark:text-white dark:border-white/30 rounded hover:bg-gray-100 dark:hover:bg-darkHover transition"
                    style={{ width: '40%' }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Verify
                  </a>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CertificationsCarousel;
