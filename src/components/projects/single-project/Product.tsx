"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Paragraph } from "@/components/common/Paragraph";

interface Project {
  _id: string;
  title: string;
  description: string;
  href: string;
  thumbnail: {
    asset: {
      id: string;
      url: string;
    };
  };
  images: {
    asset: {
      _id: string;
      url: string;
    };
  }[];
  stack: string[];
  slug: string;
  content: string;
}

export const SingleProduct = ({project}:{project:Project}) => {
 
  const [activeImage, setActiveImage] = useState(project?.thumbnail?.asset?.url || "");

  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={project.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height={1000}
          width={1000}
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>

      <div className="flex flex-row justify-center my-8 flex-wrap">
        {project.images?.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image.asset.url)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image.asset.url}
              alt="product thumbnail"
              height={1000}
              width={1000}
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>

      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <h1 className="font-semibold text-tintblue mb-2 pb-1 lg:text-[32px] text-[28px] ">{project.title}</h1>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {project.stack?.map((stack) => (
            <span
              key={stack}
              className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-primary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      <div>
        <Paragraph className="max-w-xl mt-4 text-start">{project.description}</Paragraph>
      </div>

      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 mb-8 text-start">
        {project?.content}
      </div>

      {project.href && (
        <a
          href={project.href}
          target="__blank"
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
        >
          Live Preview
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>
      )}
    </div>
  );
};
