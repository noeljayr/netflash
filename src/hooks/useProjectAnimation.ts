import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const useProjectsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const isMobile = window.innerWidth < 540;

    const tl = gsap.timeline();

    ScrollTrigger.create({
      animation: tl,
      trigger: ".projects__section",
      start: isMobile ? "top 90%" : "top 80%",
      end: isMobile ? "top center" : "top center",
      scrub: isMobile ? 0.5 : true, // Reduce scrub intensity on mobile
    });

    tl.fromTo(
      ".projects__section",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);
};

export default useProjectsAnimation;
