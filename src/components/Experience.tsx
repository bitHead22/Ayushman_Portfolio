"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

const dummyContent = [
  {
    title: "Reactjs",
    description: (
      <>
        <ul className="list-disc pl-5">
          <li>
            Engineered and enhanced modules for geospatial visualization, data
            verification, and review workflows for municipal property assessment.
          </li>
          <li>
            Built interactive UI components for advanced search, filtering, and
            status management using React and Material-UI.
          </li>
          <li>
            Applied dynamic data tables and custom filter logic, integrating with
            backend APIs to streamline the review process.
          </li>
          <li>
            Contributed to data model design and optimization to improve user
            experience with large-scale data.
          </li>
        </ul>
      </>
    ),
    badge: "Chitragupta Urban Tech (June 2025– July 2025)",
    image: "/chitragupta.png",
  },
];

const Experience = () => {
  return (
    <>
      <h1 className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-2 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-[#6620B3] rounded-full text-2xl w-fit px-4 py-1 mb-4 font-semibold">
                {item.badge}
              </h2>

              <p className={twMerge("text-[#ffffffac] text-sm mb-4")}>
                {item.title}
              </p>

              <div className="text-sm text-[#e9e9e9] prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
};

export default Experience;
