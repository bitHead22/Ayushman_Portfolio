"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { motion } from "framer-motion";
import Link from "next/link";

const Profiles = () => {
  const tabs = [
    {
      title: "LinkedIn",
      value: "LinkedIn",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link
            href={"https://www.linkedin.com/in/ayushman-tiwari-a64b1028b/"}
            target="_new1"
          >
            <p>LinkedIn</p>
            <Image
              src="/linkedin.png"
              alt="dummy image"
              width="2000"
              height="2000"
              className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
          </Link>
        </div>
      ),
    },
    {
      title: "TUF+",
      value: "TUF+",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link href={'https://takeuforward.org/plus/profile/ayushman_22'} target="_new2">
          <p>TUF+</p>
          <Image
            src="/tuf.png"
            alt="dummy image"
            width="2000"
            height="2000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
            </Link>
        </div>
      ),
    },
    {
      title: "Github",
      value: "Github",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Link href={'https://github.com/bitHead22'} target="_new3">

          <p>Github</p>
          <Image
            src="/github.png"
            alt="dummy image"
            width="2000"
            height="2000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
            </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="h-[25rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 bg-black m-2">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default Profiles;
