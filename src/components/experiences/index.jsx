"use client";
import { motion } from "framer-motion";
import ExperienceLayout from "./ExperienceLayout";

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

const ExperienceList = ({ projects }) => {
  return (
    <>
      <div className="w-full max-w-6xl px-4 mx-auto mb-8 mt-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-wide mb-2">
          Active Missions{" "}
        </h2>
        <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
          A timeline of my professional roles, projects, and growth.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
      >
        {projects.map((project, index) => {
          return <ExperienceLayout key={index} {...project} />;
        })}
      </motion.div>
    </>
  );
};

export default ExperienceList;
