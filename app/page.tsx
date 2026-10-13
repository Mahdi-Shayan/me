import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { LazyMount } from "@/components/LazyMount";
import Image from "next/image";
import dynamic from "next/dynamic";

// ssr: false حذف شد
const RecentProjects = dynamic(
  () => import("@/components/RecentProjects"),
);
const Clients = dynamic(() => import("@/components/Clients"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav
          navItems={navItems}
          logo={
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          }
        />
        <Hero />
        <Grid />
        <LazyMount minHeight={600}>
          <RecentProjects />
        </LazyMount>
        <LazyMount minHeight={300}>
          <Clients />
        </LazyMount>
        <LazyMount minHeight={400}>
          <Experience />
        </LazyMount>
        <LazyMount minHeight={400}>
          <Approach />
        </LazyMount>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
