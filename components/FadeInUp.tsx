"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FadeInUp = ({
  children,
  delay = 1.5,
  duration = 0.8,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col items-center", className)}
    >
      {children}
    </motion.div>
  );
};
