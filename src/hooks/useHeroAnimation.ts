import gsap from "gsap";
import { MutableRefObject, useEffect } from "react";
import SplitType from "split-type";

interface HeroSectionAnimationProps {
  swiperRef: MutableRefObject<HTMLDivElement>;
}

const useHeroAnimation = ({ swiperRef }: HeroSectionAnimationProps) => {
  const tl = gsap.timeline();

  useEffect(() => {
    gsap.context(() => {
      if (window.innerWidth >= 540) {
        const title = new SplitType(".title span", {
          types: "words, chars",
        });
        const discription = new SplitType(".paragraph", {
          types: "words, chars",
        });

        title.words?.map((w) => w.classList.add("flexword"));
        discription.words?.map((w) => w.classList.add("overflow"));

        tl.to(
          ".title .char",
          { y: "0", opacity: 1, stagger: { amount: 0.5 } },
          ".5"
        );
        tl.to(".home_shape", { y: "0", opacity: 1, duration: 1 }, "<.1");

        tl.to(
          ".paragraph .word",
          { y: "0", opacity: 1, stagger: { amount: 0.3 } },
          "<.1"
        );
        tl.to(".get_started", { y: "0", opacity: 1, duration: 1 }, "<.1");
        tl.to(".home_shape", { y: "0", opacity: 1, duration: 1 }, "<.1");
        tl.fromTo(
          ".screenContent",
          { y: "5%", opacity: 0 },
          { y: "0", opacity: 1 },
          "<-0.5"
        );
        tl.fromTo(
          ".screenGlass",
          { y: "10%", opacity: 0 },
          { y: "0", opacity: 1 },
          "<"
        );
        tl.fromTo(
          ".codeLayer",
          { x: "-10%", opacity: 0 },
          { x: 0, opacity: 1 },
          "<"
        );
        tl.fromTo(
          ".code",
          { y: "-10%", opacity: 0 },
          { y: 0, opacity: 1 },
          "<"
        );
        tl.fromTo(
          ".codeR",
          { x: "-10%", opacity: 0 },
          { x: 0, opacity: 1, stagger: { amount: 0.3 } },
          "<.4"
        );
        tl.fromTo(
          ".codeE",
          { x: "-10%", opacity: 0 },
          { x: 0, opacity: 1, stagger: { amount: 0.3 } },
          "<.4"
        );
      }
      const tl2 = gsap.timeline({ defaults: { ease: "power1.inOut" } });
      tl2.fromTo(
        ".cloud1",
        { opacity: 0, y: 100 },
        { x: "0", y: 0, opacity: 1, duration: 0.5, delay: 0.5 },

        "<"
      );
      tl2.fromTo(
        ".cloudRound",
        { y: 71 },
        { y: 0, scale: 1, stagger: { amount: 0.2 }, opacity: 1, duration: 1 },
        "<"
      );
      tl2.fromTo(
        ".screenfreame",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
        },
        "<"
      );
      tl2.fromTo(".screenBase", { opacity: 0 }, { opacity: 1 }, "<.34");
      tl2.fromTo(".screenBottom", { opacity: 0 }, { opacity: 1 }, "<.2");

      tl2.fromTo(
        ".cardRoundedLayer",
        { opacity: 0 },
        { x: "0", y: 0, opacity: 1 }
      );
      ("<.4");
      tl2.fromTo(
        ".rounded",
        { opacity: 0 },
        { x: "0", y: 0, opacity: 1, stagger: { amount: 0.3 } },
        "<.2"
      );

      tl2.fromTo(
        ".hostLayer",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<.1"
      );
      tl2.fromTo(
        ".hostShape",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<.6"
      );
      tl2.fromTo(
        ".hostSeperator",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      tl2.fromTo(
        ".linkedShape",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<.4"
      );
      tl2.fromTo(
        ".sticks",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: { amount: 0.3 },
        },
        "<.1"
      );
      tl2.fromTo(
        ".dots",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: { amount: 0.3 },
        },
        "<.1"
      );
      tl2.fromTo(
        ".buttons button",
        {
          opacity: 0,
          y: "66%",
        },
        {
          opacity: 1,
          y: 0,
          stagger: { amount: 0.3 },
        },
        "<-3"
      );
      tl2.to(
        ".tool-tip-1",
        {
          opacity: 1,
        },
        "<.3"
      );
      tl2.to(
        ".button-tool-tip-1",
        {
          background: "#3e60c1",
          color: "white",
        },
        "<-.9"
      );
    }, swiperRef);
    const dots = document.querySelectorAll(".dots");
    const codeR = document.querySelectorAll(".codeR");
    const rounded = document.querySelectorAll(".rounded");
    const codeE = document.querySelectorAll(".codeE");
    const sticks = document.querySelectorAll(".sticks");
    const els: Array<NodeListOf<Element>> = [
      dots,
      codeE,
      codeR,
      rounded,
      sticks,
    ];
    setInterval(() => {
      const random = Math.floor(Math.random() * els.length);

      els.forEach((el) => {
        el.forEach((el) => {
          el.classList.remove("active");
        });
      });
      els[random].forEach((el) => {
        el.classList.add("active");
      });
    }, 3000);
  }, []);
};

export default useHeroAnimation;
