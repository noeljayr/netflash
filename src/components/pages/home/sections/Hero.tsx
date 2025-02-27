import { MutableRefObject, RefObject, useRef } from "react";
import useHeroAnimation from "../../../../hooks/useHeroAnimation";
import gsap from "gsap";
import { design, dev, host } from "../../../../assets";
import { Button, DialogWrapper, HomeSvgShape } from "../../../ui";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../../../context/languageStore";

const Hero = () => {
  const [translate, i18n] = useTranslation("global");
  const { language } = useLanguageStore();

  const swiperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const ref1 = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const ref3 = useRef<HTMLParagraphElement>(null);
  const buttonswrapperRef = useRef<HTMLDivElement>(null);

  const hoverHandler = (
    ref: RefObject<HTMLParagraphElement>,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const buttons = buttonswrapperRef.current?.querySelectorAll("button");
    gsap.to(".shape", {
      opacity: 0,
    });
    buttons?.forEach((item) => {
      gsap.to(item, {
        background: "none",
        color: "#C4C4DF",
        fill: "#C4C4DF",
      });
    });
    const el = e.target as HTMLButtonElement;

    gsap.to(ref.current, {
      opacity: 1,
    });
    gsap.to(el, {
      background: "#3e60c1",
      color: "#fff",
      fill: "#fff",
    });
  };

  useHeroAnimation({ swiperRef });

  return (
    <section
      id="home"
      className={`
        hero_section
        container
        ${language === "ger" ? "german" : ""}
        pb-[4rem]
        px-[1rem]
        xm:px-[1.5rem]
        zm:px-[2rem]
        sm:px-[2rem]
        xl:px-0
        `}
    >
      <div
        className="
          grid
          md:flex
          items-start
          gap-[3rem]
          xg:gap-[6rem]
          lg:gap-[7rem]
          scroll-smooth
          z-1
          pt-[4rem]
          lg:pt-[8rem]
          xl:pt-[10rem]
          transition
          overflow-hidden
        "
        ref={swiperRef}
      >
        {/* left side */}
        <div>
          <h1
            className="
              title
              font-mainFont
              z-2   
              hidden
              md:grid

            "
          >
            <span className="pl-[3rem] xm:pl-[3rem] xd:pl-[7rem] md:pl-[5rem]">
              {translate("hero.span1")}
            </span>
            <span className="pl-[1.5rem] xd:pl-[3.5rem] md:pl-[2.6rem]">
              {translate("hero.span2")}
            </span>
            <span className="pl-0">{translate("hero.span3")}</span>
          </h1>

          <div
            className="
              flex
              items-center

              gap-x-[.5rem]
              xm:gap-[.9rem]
              xd:gap-[2rem]
              md:gap-[1rem]
              xg:gap-[1.5rem]
              lg:gap-[2rem]
              place-content-ceneter
              md:place-content-[flex-start]

            "
          >
            <svg
              className="
                home_shape
                translate-y-[-50%]
                opacity-0
                w-[55px]
                h-[220px]
                sm:w-[65px]
                sm:h-[250px]
                xd:w-[75px]
                xd:h-[300px]
                md:w-[59px]

              "
              aria-hidden="true"
              width="70"
              height="307"
              viewBox="0 0 70 307"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70 285.65L4.42105 307L0 293.012L45.6842 279.024L1.47368 264.3V251.784L45.6842 237.796L1.47368 223.072V209.82L45.6842 195.832L1.47368 181.844V167.12L45.6842 153.132L1.47368 138.408V125.156L45.6842 111.168L1.47368 95.7075V83.9281L44.2105 69.2039L1.47368 54.4796V41.9641L44.2105 26.5036L1.47368 11.0432L11.7895 3.05176e-05L70 20.6139V33.8657L25.0526 49.3262L70 63.3142V75.8298L25.0526 90.554L70 105.278V117.794L25.0526 132.518L70 147.242V159.758L25.0526 173.746L70 188.47V201.722L25.0526 215.71L70 231.17V243.686L25.0526 258.41L70 272.398V285.65Z"
                fill="url(#paint0_linear_181_638)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_181_638"
                  x1="35"
                  y1="307"
                  x2="35"
                  y2="2.97746e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3E60C1" />
                  <stop offset="1" stopColor="#A4A4A4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div
              className="
                grid
                gap-[.8rem]
                ym:gap-[1rem]
                md:gap-[1.5rem]
                lg:gap-[3rem]

                text-[.9rem]
                ym:text-[1rem]
                zm:text-[1.1rem]
                sm:text-[1.3rem]
                xd:text-[1.5rem]
                md:text-[1.1rem]
                xg:text-[1.3rem]
                lg:text-[1.2rem]



                max-w-[190px]
                xm:max-w-[210px]
                ym:max-w-[78%]
               
                md:max-w-[300px]
                xg:max-w-[400px]
              "
            >
              <p
                className="
                  text-paragraphColor
                  paragraph
                "
              >
                {translate("hero.p1")}
              </p>

              <DialogWrapper
                DialogTitleText={translate("contact_form.dialog_title")}
                buttonText={translate("hero.cta")}
                icon=""
                className={`
                  get_started
                  bg-[#3e60c1]
                  hover:bg-[#334d99]
                  hover:text-[#fff]
                  md:text-white
                  px-[1rem]
                  py-[.5rem]
                  text-center
                  w-full
                  md:w-fit
                  zm:px-[3.5rem]
                  xd:px-[4.2rem]
                  xd:py-[.9rem]
                  md:px-[2.5rem]
                  md:py-[.8rem]
                  text-[.8rem]
                  xm:text-[1rem]
                  zm:text-[1.2rem]
                  xd:text-[1.4rem]
                  md:text-[.9rem]
                  cursor-pointer
                  place-self-start
                  opacity-0
                  translate-y-[30px]
                `}
              />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="grid gap-[2rem] relative -order-1 md:order-2">
          <div className="grid">
            <h1
              className="
                title
                grid
                font-mainFont
                z-2

                text-[2.5rem]
                xm:text-[3rem]
                ym:text-[3.6rem]
                zm:text-[4.05rem]
                sm:text-[5rem]
                xd:text-[6rem]
                md:text-[5rem]
                xg:text-[6rem]
                lg:text-[6.5rem]

                leading-[2.5rem]
                xm:leading-[2.7rem]
                ym:leading-[3.2rem]
                zm:leading-[3.7rem]
                sm:leading-[4.2rem]
                xd:leading-[5rem]
                md:leading-[4.3rem]
                xg:leading-[5rem]
                lg:leading-[6rem]

                mb-[1rem]
                xm:mb-[2rem]
                md:mb-6
                lg:mb-[1.5rem]
                md:hidden

              "
            >
              <span className="pl-[3rem] xm:pl-[3rem] xd:pl-[7rem] md:pl-[5rem]">
                {translate("hero.span1")}
              </span>
              <span className="pl-[1.5rem] xd:pl-[3.5rem] md:pl-[2.6rem]">
                {translate("hero.span2")}
              </span>
              <span className="pl-0">{translate("hero.span3")}</span>
            </h1>
            <HomeSvgShape />

            <div>
              <p className="shape tool-tip-1" ref={ref1}>
                {translate("hero.heroImageRef1")}
              </p>
              <p className="shape" ref={ref3}>
                {translate("hero.heroImageRef2")}
              </p>
              <p className="shape" ref={ref2}>
                {translate("hero.heroImageRef3")}
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-around gap-2 md:gap-8 sm:mt-5 md:mt-[4.3rem] flex-wrap buttons"
            ref={buttonswrapperRef}
          >
            <Button
              onClick={(e) => hoverHandler(ref1, e)}
              variant={"ghost"}
              className="button-home button-tool-tip-1"
            >
              <img src={design} alt="icon img" aria-label="hidden" />
              <span> UI / UX Design </span>
            </Button>{" "}
            <Button
              variant={"ghost"}
              onClick={(e) => hoverHandler(ref2, e)}
              className="button-home"
            >
              <img src={dev} alt="icon img" aria-label="hidden" />
              <span> Development </span>
            </Button>{" "}
            <Button
              onClick={(e) => hoverHandler(ref3, e)}
              variant={"ghost"}
              className="button-home"
            >
              <img src={host} alt="icon img" aria-label="hidden" />
              <span> Hosting </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
