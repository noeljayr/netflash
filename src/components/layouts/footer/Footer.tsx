import { logo, socail1, socail2, socail3, socail4 } from "../../../assets";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Button, Link } from "../../ui";
import { useTranslation } from "react-i18next";

const linkSyle = `
  zs:text-[1rem]
  xm:text-[1.4rem]
  ym:text-[.74rem]
  md:text-[1.4rem]
  cursor-pointer
`;
const Footer = () => {
  const [translate, i18n] = useTranslation("global");
  const data = [socail2, socail3, socail4];

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth >= 540) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "-130% 40%",
          end: "70% bottom",
          scrub: 1.1,
        },
      });

      tl.fromTo(
        ".footer",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
        }
      );
    }
  });
  return (
    <footer
      id="contact"
      className="
        footer
        place-c  px-[1rem]
         
          
      "
    >
      <div
        className="
          container
          relative
          py-[7rem]
          grid
          sm:flex
          place-items-center
          place-content-center
          items-start
          md:justify-between
          gap-[5rem]
          xm:px-[1.5rem]
          zm:px-[2rem]
          sm:px-[3rem]
          xl:pt-[10rem]
          xl:px-0
        "
      >
        <div className="grid items-start  gap-[2rem]">
          <div className="flex items-center gap-[.5rem]">
            <img src={logo} alt="" className="w-[4rem]" />
            <h2 className="text-[1.9rem]">NetFlash</h2>
          </div>
          <p
            className="
              zs:text-[.7rem]
              xm:text-[.8rem]
              ym:text-[.85rem]
              lg:text-[1rem]
              max-w-[250px]
              text-center
              sm:text-start
            "
          >
            © 2024 NetFlash <br />
            {translate("footer.outro")} <br /> {translate("footer.outro2")}
            <br />
            <div className="languauge mt-4 flex gap-2">
              <button
                className={`text-xs p-1 h-fit ${
                  i18n.language === "ger" ? "active-language" : ""
                }`}
                onClick={() => handleChangeLanguage("ger")}
              >
                GER
              </button>

              <button
                className={`text-xs p-1 h-fit ${
                  i18n.language === "en" ? "active-language" : ""
                }`}
                onClick={() => handleChangeLanguage("en")}
              >
                EN
              </button>
            </div>
          </p>
        </div>

        <div className="grid items-center gap-[2rem] md:w-[70%] jsutify-end">
          <div
            className="
              grid
              gap-[3rem]
              xd:flex
              items-center
              md:justify-between
              pb-[2rem]
              border-b-[.2rem]
              border-b-zinc-500
              w-full            
            "
          >
            <div
              className="
                md:justify-between
                gap-[2rem]
                w-full
              "
            >
              <ul
                className="
                  flex
                  flex-wrap
                  text-left
                  items-center
                  justify-center
                  md:justify-between
                  w-full
                  gap-[.7rem]
                "
              >
                <li className="flex">
                  <Link className={linkSyle}>{translate("footer.text1")}</Link>
                </li>
                <li className="flex">
                  <Link className={linkSyle}>{translate("footer.text2")}</Link>
                </li>
                <li className="flex">
                  <Link className={linkSyle}>{translate("footer.text3")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="
              grid
              sm:flex
              items-center
              justify-center
              sm:justify-between
              gap-[1rem]
              lg:gap-[1.5rem]
            "
          >
            <ul
              className="
                flex
                items-center
                justify-between
                xd:place-self-end
                gap-[1rem]
                lg:gap-[1.5rem]
              "
            >
              {data.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href="#home">
                      <img
                        className="
                          w-[2.1rem]
                          ym:w-[2.5rem]
                          xd:w-[2rem]
                          md:w-[2.5rem]
                        "
                        src={item}
                        alt=""
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href="mailto:contact@netflash.ch"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[200px] bg-[#3355b4] place-self-center"
            >
              {translate("footer.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
