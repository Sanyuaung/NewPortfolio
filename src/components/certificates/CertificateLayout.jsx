import { motion } from "framer-motion";
import Image from "next/image";
import { Eye } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const CertificateLink = motion.a;
const CertificateLayout = ({
  name,
  description,
  date,
  demoLink,
  compact = false,
}) => {
  const imageSrc = demoLink || "/certificates/placeholder.jpg";
  return (
    <CertificateLink
      variants={item}
      href={imageSrc}
      data-fancybox="certificates"
      data-caption={`<strong>${name}</strong>${description ? `<br />${description}` : ""}`}
      aria-label={`View ${name} certificate`}
      className={`group w-full flex items-center ${
        compact ? "gap-3 p-3" : "gap-4 md:gap-6 p-4 md:p-5"
      } relative rounded-xl overflow-hidden custom-bg transition-colors cursor-pointer`}
    >
      <div
        className={`relative shrink-0 rounded-md overflow-hidden ring-1 ring-accent/40 ring-offset-0 ${
          compact ? "h-16 w-16" : "h-20 w-20 md:h-24 md:w-24"
        }`}
      >
        <Image
          src={imageSrc}
          alt={name + " certificate"}
          fill
          sizes={compact ? "64px" : "96px"}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <h3
          className={`font-medium ${
            compact ? "text-sm" : "text-base md:text-lg"
          } truncate text-accent`}
          title={name}
        >
          {name}
        </h3>
        {!compact && (
          <>
            <p
              className="text-foreground/80 text-xs md:text-sm line-clamp-2"
              title={description}
            >
              {description}
            </p>
            {date && (
              <span className="mt-2 text-[10px] md:text-xs tracking-wide text-accent/80 uppercase">
                {date}
              </span>
            )}
          </>
        )}
      </div>
      {!compact && (
        <span className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-md border border-accent/35 bg-background/30 px-3 py-2 text-xs font-medium uppercase tracking-wide text-accent opacity-100 transition-all group-hover:border-accent/70 group-hover:bg-accent/10 md:opacity-0 md:group-hover:opacity-100">
          <Eye size={16} strokeWidth={2.2} />
          {/* View */}
        </span>
      )}
    </CertificateLink>
  );
};

export default CertificateLayout;
