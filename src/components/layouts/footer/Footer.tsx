import { logo, socail1, socail2, socail3, socail4 } from "../../../assets";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Button } from "../../ui";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const linkSyle = `
  zs:text-[1rem]
  xm:text-[1.4rem]
  ym:text-[.74rem]
  md:text-[1.4rem]
  cursor-pointer
`;
const Footer = () => {
  const data = [socail2, socail3, socail4];

  const [translate, i18n] = useTranslation("global");

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
          opacity: 1,
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
      relative
        footer
        place-c  px-[1rem] 
        
      "
    >
      <div className="grid items-start  gap-[2rem]">
        <div className="flex items-center gap-[.5rem]">
          <img src={logo} alt="" className="w-[4rem]" />
          <h2 className="text-[1.9rem]">Netflash</h2>
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
          © 2025 Netflash {translate("footer.outro")}{" "}
          {translate("footer.outro2")}{" "}
        </p>
      </div>

      <ul
        className="
                flex
                items-end
                gap-[1rem]
                lg:gap-[1.5rem]
                social-links  
              "
      >
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to="#home">
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

      <ul
        className="
                  flex
                  flex-wrap
                  text-left
                  items-center
                  justify-end
                  w-full
                  gap-[2rem]
                 cont
                "
      >
        <li className="flex">
          <Link to="/imprint" className={linkSyle}>
            {translate("footer.text1")}
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            to="mailto:contact@netflash.ch"
            className="ct-btn inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 bg-[#3355b4] place-self-center"
          >
            {translate("footer.contact")}
          </Link>
        </li>
      </ul>

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
      ></div>
    </footer>
  );
};

export default Footer;
