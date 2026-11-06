import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { PlatformFeatures } from "@/components/home/PlatformFeatures";
import { Playbooks } from "@/components/home/Playbooks";
import { Reasons } from "@/components/home/Reasons";
import { RoleTabs } from "@/components/home/RoleTabs";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/layout/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RoleTabs />
      <PlatformFeatures />
      <Reasons />
      <Testimonials />
      <Playbooks />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
