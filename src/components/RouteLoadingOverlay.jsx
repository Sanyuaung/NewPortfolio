"use client";

import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const RouteLoadingOverlay = ({ label = "Loading" }) => {
  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/70 backdrop-blur-md transform-none rotate-0"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 rounded-lg border border-accent/30 bg-background/40 px-8 py-7 shadow-glass-inset">
        <span className="h-12 w-12 rounded-full border-2 border-accent/20 border-t-accent animate-spin shadow-[0_0_28px_rgba(251,251,91,0.24)]" />
        <span className="text-sm font-medium tracking-[0.24em] text-accent uppercase">
          {label}
        </span>
      </div>
    </motion.div>,
    document.body,
  );
};

export default RouteLoadingOverlay;
