import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FadeInUp } from "./FadeInUp";

const Hero = () => {
  return (
    // relative اضافه شد تا لایه‌ی گرید نسبت به خود Hero قرار بگیره، نه کل صفحه
    <div className="relative pb-20 pt-36 h-screen">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/**
       *  UI: grid
       *  absolute inset-0 جایگزین absolute top-0 left-0 h-screen شد
       *  تا پس‌زمینه دقیقاً هم‌اندازه‌ی Hero باشه
       */}
      <div
        className="absolute inset-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative z-10 h-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center h-full">
          <div className="flex items-center mb-10 gap-5">
            <hr className="w-30 border-white/30" />
            <p>developer & web designer</p>
            <hr className="w-30 border-white/30" />
          </div>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <FadeInUp>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Mahdi Shayan, a Next.js Developer based in
              Tehran.
            </p>
          </FadeInUp>

          <FadeInUp delay={1.6}>
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default Hero;
