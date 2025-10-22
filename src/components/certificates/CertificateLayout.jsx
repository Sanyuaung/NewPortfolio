import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const CertificateLink = motion(Link);
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
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-full flex items-center ${
        compact ? "gap-3 p-3" : "gap-4 md:gap-6 p-4 md:p-5"
      } relative rounded-xl overflow-hidden custom-bg transition-colors`}
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
        <span className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
          <Eye size={18} strokeWidth={2.2} className="" />
        </span>
      )}
    </CertificateLink>
  );
};

export default CertificateLayout;
