"use client";

import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  className?: string;
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 170,
  path = true,
  iconSize = 30,
  speed = 1,
}: Props) {
  const calculatedDuration = duration / speed;
  const isMobile = useMediaQuery({ query: "(max-width: 768px)"});
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx={isMobile ? "50%" : "95%"}
            cy="90%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full md:right-0 md:bottom-2 bottom-1 lg:right-2 ${
                reverse ? "[animation-direction:reverse]" : ""
              }`,
              className
            )}
            style={
              {
                "--duration": `${calculatedDuration}s`,
                "--radius": `${radius}px`,
                "--angle": `${angle}`,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

export default OrbitingCircles;
