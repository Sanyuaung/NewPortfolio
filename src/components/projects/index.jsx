"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

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

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      <motion.div variants={container} className="w-full text-center space-y-2">
        <h1 className="text-2xl md:text-4xl font-semibold text-foreground">
          Self Learning Projects
        </h1>
        <p className="text-sm md:text-base text-muted">
          Personal demos and experiments built to sharpen full-stack skills.
        </p>
        <p className="mx-auto max-w-2xl text-xs md:text-sm text-accent/90">
          Notice: some demos may require a VPN connection depending on your
          current network.
        </p>
      </motion.div>
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
