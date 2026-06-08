"use client";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import { motion } from "framer-motion";
import CertificateLayout from "./CertificateLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const CertificateList = ({ projects }) => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="certificates"]', {
      compact: false,
      dragToClose: true,
      Images: {
        zoom: true,
      },
      Carousel: {
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["autoplay", "rotateCCW", "rotateCW", "fullscreen", "toggleFull","close"],
          },
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-full max-w-6xl px-4 mx-auto mb-8 mt-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-wide mb-2">
          Mission Credentials{" "}
        </h2>
        <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
          A showcase of my completed courses, diplomas, and professional
          achievements.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        {projects.map((project, index) => (
          <CertificateLayout key={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default CertificateList;
