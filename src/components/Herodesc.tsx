"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const Herodesc = () => {
  const words = `Welcome to my portfolio! I'm Ayushman, a dedicated BTech student at IEM, Kolkata with a fervent passion for coding, web development, and Data Structures and Algorithms. Explore my projects and achievements to witness my commitment to excellence in the world of technology.`;

  return (
    <div className="flex flex-col items-center">
      <TextGenerateEffect words={words} />
      <div className="mt-8 flex flex-row gap-4">
        <a
          href="/Ayushman_CV.pdf"
          download
          className="px-8 py-3 bg-transparent border-2 border-[#7e3bc6] text-[#7e3bc6] rounded-full font-semibold shadow-md hover:bg-[#7e3bc6]/10 transition-all duration-200"
        >
          Download CV
        </a>
        <Link
          href="/contact"
          className="px-8 py-3 bg-transparent border-2 border-[#7e3bc6] text-[#7e3bc6] rounded-full font-semibold shadow-md hover:bg-[#7e3bc6]/10 transition-all duration-200 flex items-center justify-center"
        >
          Let's Talk!
        </Link>
      </div>
    </div>
  );
};

export default Herodesc;
