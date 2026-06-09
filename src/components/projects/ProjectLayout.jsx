import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion.a;
const ProjectLayout = ({ name, description, date, demoLink, requiresVpn }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-base flex flex-col gap-3 w-full relative rounded-lg p-4 md:p-6 custom-bg group sm:flex-row sm:items-center sm:justify-between"
      aria-label={`Open ${name} live demo`}
    >
      <div className="min-w-0 flex-1 space-y-1">
        <h2 className="text-foreground font-medium group-hover:text-accent">
          {name}
        </h2>
        <p className="text-muted text-sm leading-relaxed md:text-base">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2 self-start sm:self-center sm:justify-end">
        {/* {requiresVpn && (
          <span className="rounded border border-accent/40 bg-accent/10 px-2 py-1 text-xs font-medium uppercase tracking-wide text-accent">
            VPN Required
          </span>
        )} */}
        <p className="text-muted whitespace-nowrap sm:text-foreground">
          {date}
        </p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
