import { motion } from "framer-motion";
// import Link from "next/link"; // demoLink disabled for demo; using non-clickable container

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

// Replace motion(Link) with motion.div to remove external navigation
const ExperienceLink = motion.div;
const ExperienceLayout = ({ name, description, date, demoLink }) => {
  return (
    <ExperienceLink
      variants={item}
      // href={demoLink} // disabled
      // target={"_blank"} // disabled
      className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-accent font-semibold">{name}</h2>
        <p className="text-foreground/80 hidden sm:inline-block">
          {description}
        </p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-accent/80 sm:text-accent">{date}</p>
    </ExperienceLink>
  );
};

export default ExperienceLayout;
