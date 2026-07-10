import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = motion.article;
const ProjectLayout = ({ name, description, date, demoLink, links = [] }) => {
  const projectLinks =
    links.length > 0
      ? links
      : demoLink
        ? [{ label: "Live Demo", href: demoLink }]
        : [];
  const hasMultipleLinks = projectLinks.length > 1;
  const shouldShowMetaDate =
    Boolean(date) &&
    !hasMultipleLinks &&
    date.trim().toLowerCase() !==
      (projectLinks[0]?.label || "").trim().toLowerCase();

  return (
    <ProjectCard
      variants={item}
      className="text-sm md:text-base flex flex-col gap-3 w-full relative rounded-lg p-4 md:p-6 custom-bg group sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="min-w-0 flex-1 space-y-1">
        <h2 className="text-foreground font-medium group-hover:text-accent">
          {name}
        </h2>
        <p className="text-muted text-sm leading-relaxed md:text-base">
          {description}
        </p>
      </div>
      <div className="flex w-full flex-col items-center gap-2 self-center sm:w-auto">
        <div className="flex flex-col items-center justify-center gap-2">
          {projectLinks.map((link, index) => (
            <a
              key={`${name}-link-${index}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded border border-accent/40 bg-accent/10 px-2 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/20 ${
                hasMultipleLinks ? "w-28 text-center" : ""
              }`}
              aria-label={`Open ${name} ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {shouldShowMetaDate && (
          <p className="text-muted whitespace-nowrap sm:text-foreground">
            {date}
          </p>
        )}
      </div>
    </ProjectCard>
  );
};

export default ProjectLayout;
