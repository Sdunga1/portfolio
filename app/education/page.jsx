"use client";

import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const educationData = [
  {
    type: "education",
    date: "Jan 2024 - Dec 2025",
    title: "Arizona State University",
    subtitle: "Tempe, USA",
    degree: "Master of Science",
    description: "Software Engineering",
    grade: "CGPA: 3.81/4.00",
  },
  {
    type: "education",
    date: "2019 - 2023",
    title: "IIEST Shibpur",
    subtitle: "Shibpur, WB",
    degree: "Bachelor's Degree",
    description: "Electronics and Telecommunication Engineering",
    grade: "CGPA: 8.33/10.0",
  },
  {
    type: "work",
    date: "June 2022 - July 2022",
    title: "Verzeo Azure Cloud Computing",
    subtitle: "Internship",
    description: "Hands-on experience with Azure cloud services",
  },
  {
    type: "education",
    date: "2016 - 2018",
    title: "Narayana Junior College",
    subtitle: "Visakhapatnam, AP",
    description: "Intermediate",
    grade: "Percentile: 97.4%",
  },
  {
    type: "education",
    date: "2015 - 2016",
    title: "Saint Claret E.M High School",
    subtitle: "Narasannapeta, AP",
    description: "High School Education",
    grade: "CGPA: 10",
  },
];

const EducationPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Apply theme to html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-darkTheme text-gray-800 dark:text-white">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="px-[12%] py-20 pt-36">
        <h2 className="text-4xl font-Ovo text-center mb-12">
          Education & Experience
        </h2>

        <VerticalTimeline lineColor="#3e497a">
          {educationData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#f8fafc",
                color: "#1f2937",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #3e497a" }}
              date={item.date}
              iconStyle={{
                background: item.type === "work" ? "#e9d35b" : "#3e497a",
                color: "#fff",
              }}
              icon={item.type === "work" ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              {item.subtitle && (
                <h4 className="text-sm text-gray-500">{item.subtitle}</h4>
              )}
              {item.degree && (
                <h4 className="text-sm font-medium text-gray-600">
                  {item.degree}
                </h4>
              )}
              <p className="text-sm mt-2">{item.description}</p>
              {item.grade && (
                <p className="mt-1 font-bold text-indigo-600 text-sm">
                  {item.grade}
                </p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </main>

      <Footer isDarkMode={isDarkMode} />

      <style jsx global>{`
        .dark .vertical-timeline-element-date {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default EducationPage;
