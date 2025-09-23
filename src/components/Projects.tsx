"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const Projects = () => {
  const content = [
    {
      title: "Mentora",
      description:
        "Mentora is an AI-powered career advancement platform built to help professionals create tailored resumes, generate impactful cover letters, and prepare for interviews with adaptive AI-driven tools.",
      link: "https://mentora-lake.vercel.app/",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/mentora.png"
            width={2000}
            height={1500}
            className="h-full w-full object-fit"
            alt="Mentora"
          />
        </div>
      ),
      imgurl: ""
    },
    {
      title: "Ecstasia",
      description:
        " Ecstasia is a full-stack web app which enables users to register, manage profiles, book event tickets, create and join teams, and participate in various events. Administrators and coordinators can oversee event bookings, manage users, and handle event logistics. The system supports user authentication, role-based access (admin, coordinator, user), and provides features for searching, updating, and organizing event-related data efficiently.",
      link: "https://ecstasia.co.in/",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/ecstasia.png"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
            alt="Ecstasia"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-10 pt-10 flex flex-col justify-center">
      
        <span className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        Projects
      </span>
      <StickyScroll content={content} />
    </div>
  );
};

export default Projects;
