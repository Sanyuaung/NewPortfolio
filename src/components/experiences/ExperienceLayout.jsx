"use client";

import { Fancybox } from "@fancyapps/ui";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ExperienceLink = motion.div;
const ExperienceLayout = ({ name, description, date, details, links = [] }) => {
  const openModal = (link) => {
    Fancybox.show(
      [
        {
          src: link.href,
          type: "iframe",
          caption: `<strong>${name}</strong><br />${link.label}`,
        },
      ],
      {
        compact: false,
        dragToClose: true,
        iframe: {
          preload: false,
        },
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["fullscreen", "close"],
          },
        },
      },
    );
  };

  return (
    <ExperienceLink
      variants={item}
      className="text-sm md:text-base flex flex-col gap-3 w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-col sm:flex-row sm:items-center sm:space-x-2">
          <h2 className="text-accent font-semibold">{name}</h2>
          <p className="text-foreground/80">{description}</p>
        </div>
        <p className="text-accent/80 whitespace-nowrap sm:text-accent">
          {date}
        </p>
      </div>
      {details && (
        <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
          {details}
        </p>
      )}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {links.map((link) =>
            link.modal ? (
              <button
                key={link.href}
                type="button"
                onClick={() => openModal(link)}
                className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      )}
    </ExperienceLink>
  );
};

export default ExperienceLayout;
