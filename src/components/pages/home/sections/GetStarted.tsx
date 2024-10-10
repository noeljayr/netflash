import { prof1, prof2, prof3, prof4, prof5, prof6 } from "../../../../assets";

import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const [translate, i18n] = useTranslation("global");

  const data = [
    { name: "Gian Iglowstein", position: "CEO", profile: prof1 },
    {
      name: "Martin Muloleni",
      position: "Office Manager",
      profile: prof6,
    },
    {
      name: "Taiwo Emanuel Jolomi",
      position: "Developer",
      profile: prof2,
    },
    {
      name: "Noel Luhanga",
      position: "UI Designer",
      profile: prof3,
    },
    {
      name: "Comfort Jaden Khonje",
      position: "UI Designer",
      profile: prof4,
    },
    {
      name: "Robin Stambach",
      position: "CFO",
      profile: prof5,
    },
  ];
  const getStarted = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set breakpoints for mobile and desktop
    const isMobile = window.innerWidth < 540;

    // Split text into chars for animation
    const title = new SplitType("#getstarted .get_started_title", {
      types: "words, chars",
    });

    // Create a timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#getstarted",
        start: isMobile ? "top 90%" : "top 70%", // More aggressive on mobile
        end: isMobile ? "bottom top" : "140% bottom", // Adjust end point for mobile
        scrub: 1.1,
        // markers: true, // Uncomment for debugging
      },
    });

    // Animate the title chars
    tl.fromTo(
      ".get_started_title .char",
      { y: "100%", opacity: 0 },
      {
        y: "0",
        opacity: 1,
        stagger: { amount: isMobile ? 0.5 : 1 },
        ease: "power1.inout",
      }
    );

    // Animate the cards with stagger
    tl.fromTo(
      ".card_get_started",
      { opacity: 0, x: (index) => (index % 2 === 0 ? "100%" : "-100%") },
      { x: "0", opacity: 1, stagger: isMobile ? 0.2 : 0.3, ease: "power1.out" },
      "<"
    );
  }, [getStarted.current]);

  return (
    <section
      id="getstarted"
      className="
        container
        relative
        px-[1rem]
        xm:px-[1.5rem]
        zm:px-[2rem]
        sm:px-[3rem]
        xl:py-[10rem]
        xl:px-0
        my-[10rem]
        py-[10rem]
      "
    >
      <div
        className="
          grid
          place-content-center
        "
      >
        <h2
          className="
          get_started_title
            text-[1.5rem]
            xd:text-[2.5rem]
            lg:text-[3.5rem]
            text-center
            w-[280px]
            xd:w-[450px]
            lg:w-[650px]
          "
        >
          {translate("get_started.team.title")}
        </h2>
      </div>
      {data.map((item, index) => {
        return (
          <div
            className={`
                card_get_started
                flex
                items-center
                border-[#ffffff14]
                bg-[#141417]
                rounded-full
                absolute
                scale-[.6]
                xm:scale-[.75]
                xd:scale-[.95]
                lg:scale-[1.2]
                w-[fit-content]
                
                ${
                  index === 0 &&
                  "top-[20%]  left-[0%]  lg:top-[32%] ym:top-[20%] ym:left-[5%]  lg:left-[5%] "
                }
                ${
                  index === 1 &&
                  "top-[5%] right-[-5%] ym:top-[5%] ym:right-[5%]  lg:top-[80%] lg:left-[22%]"
                }
                ${
                  index === 2 &&
                  "top-[-10%] left-[0%] ym:top-[-10%] ym:left-[5%]  sm:left-[25%] lg:top-[-5%] lg:left-[32%]"
                }
                ${
                  index === 3 &&
                  "top-[60%] right-[-5%] ym:top-[60%] ym:right-[5%] lg:top-[102%] lg:left-[50%]"
                }
                ${
                  index === 4 &&
                  "top-[74%] left-[-5%] ym:top-[74%] ym:left-[5%] lg:top-[60%] lg:left-[auto] lg:right-[5%] "
                }
                ${
                  index === 5 &&
                  "top-[89%] right-[-5%] ym:top-[89%] ym:right-[5%] sm:right-[22%] lg:top-[8%] lg:right-[20%]"
                }
              `}
          >
            <picture>
              <img
                width={"75px"}
                height={"75px"}
                className="max-w-[75px] rounded-full"
                src={item.profile}
                alt=""
              />
            </picture>
            <div className=" xm:text-[.7rem] md:text-[1rem] rounded-[.7rem] md:h-[75px] xm:h-[50px] xm:w-[200px] md:w-[250px] grid text-start py-[.7rem] px-[1rem]">
              <h5>{item.name}</h5>
              <p className="text-[#176BB9]">{item.position}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default GetStarted;
