import { useRef } from "react";
import { checkbox } from "../../../../assets";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const [translate, i18n] = useTranslation("global");

  const ADataCols = [
    translate("why_us.ADataCols.text1"),
    translate("why_us.ADataCols.text2"),
    translate("why_us.ADataCols.text3"),
    translate("why_us.ADataCols.text4"),
  ];

  const aboutUs = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 540;

    gsap.registerPlugin(ScrollTrigger);

    const title = new SplitType("#aboutus #why_choose_title", {
      types: "words, chars",
    });

    const paragraph = new SplitType("#aboutus #why_choose_paragraph", {
      types: "words, chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutus",
        start: isMobile ? "top 90%" : "top 70%", // Adjusted for mobile
        end: isMobile ? "80% bottom" : "100% bottom", // Adjusted for mobile
        scrub: isMobile ? 0.5 : 1.1, // Reduced scrub for smoother mobile experience
      },
    });

    // Title Animation
    tl.fromTo(
      "#why_choose_title .char",
      { y: "100%", opacity: 0 },
      {
        y: "0",
        opacity: 1,
        stagger: { amount: isMobile ? 0.6 : 1 }, // Faster stagger on mobile
        ease: "power1.inout",
      }
    );

    // Paragraph Animation
    tl.fromTo(
      "#why_choose_paragraph",
      { y: "100%", opacity: 0 },
      {
        y: "0",
        opacity: 1,
        stagger: { amount: isMobile ? 0.6 : 1 }, // Faster stagger on mobile
        ease: "power1.inout",
      },
      "<" // Start at the same time as the title animation
    );

    // About Us List Animation
    tl.fromTo(
      ".aboutus_list",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        stagger: { amount: isMobile ? 0.5 : 1 }, // Faster stagger on mobile
        ease: "power1.inout",
      }
    );

    // Span Why Choose Animation
    tl.fromTo(
      ".sapn_why_choose",
      { y: "100%", opacity: 0 },
      {
        y: "0",
        opacity: 1,
        ease: "power1.inout",
      },
      "<.3"
    );
  }, [aboutUs.current]);

  return (
    <section
      ref={aboutUs}
      id="whyus"
      className="
        overflow-hidden
        why_choose
      "
    >
      <div
        className="
          grid
        container
          md:flex
          items-center
          jsutify-center
          gap-[1rem]
          md:gap-[3rem]
          lg:gap-[4rem]
          rounded-[1rem]
          md:rounded-[51px]
          overflow-hidden
         px-[1rem]
        xm:px-[1.5rem]
        zm:px-[2rem]
        lg:px-[3rem]
        xl:px-0
        justify-items-center
        "
      >
        <div
          className="
            grid
            items-center
            justify-center
            px-[1rem]
           
            pb-[3rem]
            md:pr-[2rem]

            md:my-[3rem]
            gap-[.5rem]
          "
        >
          <span
            className="
            sapn_why_choose
              text-blueText
              text-[1rem]
              md:text-[1.5rem]
              "
          >
            {translate("why_us.title")}
          </span>
          <h2
            id="why_choose_title"
            className="why_choose_title
              font-meduim
              italic
              text-[1.4rem]
              md:text-[3rem]
              md:leading-[3.3rem]
            "
          >
            {translate("why_us.h2")}
          </h2>
          <p
            id="why_choose_paragraph"
            className="why_choose_paragraph
              text-[.9rem]
              md:text-[1.3rem]
              max-w-[670px]
              text-[#757595]
              mb-[3rem]
            "
          >
            {translate("why_us.p")}
          </p>
          <ul
            className="
              grid
              gap-[2.1rem]
              md:grid-cols-2

            "
          >
            {ADataCols.map((item, index) => {
              return (
                <li
                  key={index}
                  className="
                  aboutus_list
                    grid
                    grid-flow-col
                    items-start
                    justify-start
                    gap-[.7rem]
                    p-7
                    rounded-lg
                  "
                >
                  <picture
                    className="
                      pt-[.2rem]
                    "
                  >
                    <img
                      className="
                        w-[20px]
                        h-[20px]
                        md:w-[25px]
                        md:h-[25px]
                      "
                      src={checkbox}
                      alt="checkbox img "
                    />
                  </picture>
                  <h3
                    className="
                      max-w-[740px]
                      text-[.9rem]
                      md:text-[1.3rem]
                    "
                  >
                    {item}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
