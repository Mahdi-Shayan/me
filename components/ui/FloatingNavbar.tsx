"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  logo,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  logo?: React.ReactNode;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -(headerHeight * 1.1) }}
      animate={{
        y: visible ? 0 : -(headerHeight * 1.1),
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: hasEntered ? 0.2 : 0.5,
        ease: "easeOut",
        delay: hasEntered ? 0 : 1.5,
      }}
      onAnimationComplete={() => setHasEntered(true)}
      className={cn(
        "fixed z-[5000] top-10 inset-x-0 mx-auto w-[90%] flex items-center justify-between px-6 md:px-10 py-4 rounded-xl will-change-transform",
        className,
      )}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        boxShadow:
          "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
      }}
    >
      {/* لوگو */}
      <Link href="/" className="flex items-center shrink-0">
        {logo ?? (
          <span className="text-lg font-bold text-white">Logo</span>
        )}
      </Link>

      {/* لینک‌ها */}
      <nav className="flex items-center space-x-4 md:space-x-6">
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className="relative flex items-center space-x-1 text-neutral-50 hover:text-neutral-300"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer hidden sm:block">
              {navItem.name}
            </span>
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};
