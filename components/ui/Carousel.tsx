"use client"

import OrbitingCircles from "./OrbitingCircles";

function Carousel() {
  const skills = [
    "auth",
    "nextjs",
    "shadcn",
    "mongodb",
    "react",
    "tailwindcss",
    "git",
    "react-query",
    "motion",
    "typescript",
    "gsap",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={38}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={110} reverse speed={1.5}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

export default Carousel

const Icon = ({ src }: { src: string }) => (
  <img
    src={src}
    alt={src}
    className="duration-200 rounded-sm hover:scale-110"
  />
);
