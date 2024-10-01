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

  const getStarted = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth >= 540) {
      gsap.registerPlugin(ScrollTrigger);
      const title = new SplitType("#aboutus .why_choose_title", {
        types: "words, chars",
      });

      const paragraph = new SplitType("#aboutus .why_choose_paragraph", {
        types: "words, chars",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#aboutus",
          start: "top 70%",
          end: "100% bottom",
          scrub: 1.1,
        },
      });

      tl.fromTo(
        ".why_choose_title .char",
        { y: "100%", opacity: 0 },
        { y: "0", opacity: 1, stagger: { amount: 1 }, ease: "power1.inout" }
      );

      tl.fromTo(
        ".why_choose_paragraph .char",
        { y: "100%", opacity: 0 },
        {
          y: "0",
          opacity: 1,
          stagger: { amount: 1 },
          ease: "power1.inout",
        },
        "<"
      );

      tl.fromTo(
        ".aboutus_list",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: { amount: 1 },
          ease: "power1.inout",
        }
      );

      tl.fromTo(
        ".sapn_why_choose",
        { y: "100%", opacity: 0 },
        { y: "0", opacity: 1, ease: "power1.inout" },
        "<.3"
      );
    }
  }, [getStarted.current]);
  return (
    <section
      ref={getStarted}
      id="aboutus"
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
        xl:py-[10rem]
        xl:px-0
        pt-[9rem] justify-items-center
        "
      >
        <div
          className="
            grid
            items-center
            justify-center
            px-[1rem]
            pt-[1rem]
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
            className="
        why_choose_title
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
            className="
              why_choose_paragraph
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
