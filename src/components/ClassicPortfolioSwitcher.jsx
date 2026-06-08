"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Monitor } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import RouteLoadingOverlay from "./RouteLoadingOverlay";

const MotionLink = motion(Link);

const ClassicPortfolioSwitcher = () => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => {
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 10000);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <RouteLoadingOverlay label="Loading Classic" />}
      </AnimatePresence>
      <div className="fixed top-4 left-2.5 xs:left-4 z-50 group">
        <MotionLink
          href="/"
          target="_self"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          onClick={showLoading}
          className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer p-2.5 xs:p-4 custom-bg"
          aria-label="Switch to Classic Portfolio"
          name="Switch to Classic Portfolio"
          prefetch={false}
        >
          <Monitor
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
          <span className="absolute hidden group-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            Classic Portfolio
          </span>
        </MotionLink>
      </div>
    </>
  );
};

export default ClassicPortfolioSwitcher;
