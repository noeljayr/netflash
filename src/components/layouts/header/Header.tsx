import { useState } from "react";
import { cn } from "../../../lib/utils";
import { mainNavigationLinkText } from "../../../constants";
import { logo } from "../../../assets";
import { Link } from "../../ui";
import { NavLink, Link as RLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [translate, i18n] = useTranslation("global");

  const [menu, setMenu] = useState<boolean>(false);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header
      className="
        header
        lg:mx-auto
        w-full
        z-[50]
        py-[1rem]
        lg:pt-[2.5rem]
        lg:pb-[1.5rem]
        sticky
        top-0
        left-0
      "
    >
      <nav
        className="
          flex
          items-center
          justify-between
          container
          px-[2rem]
          xl:px-0
              gap-[26%]
        "
      >
        <NavLink
          to="/"
          className="hover:text-[inherit] flex items-center gap-.5 !bg-transparent"
        >
          <img
            aria-roledescription="img showing our logo and when click on it getting you back home"
            width={`45px`}
            height={`45px`}
            loading="lazy"
            src={logo}
            alt="the logo of our agency"
          />
          <span className="ml-2 text-2xl">Netflash</span>
        </NavLink>
        <div
          className={cn(
            `
              fixed
              bg-[#3355b4]
              top-[0]
              left-[50%]
              w-full
              h-screen
              items-center
              z-[10]
              opacity-1
              translate-x-[100%]
              transition
              md:top-[0]
              md:left-[0]
              md:relative
              md:translate-y-[0px]
              md:translate-x-[0]
              md:opacity-1
              md:bg-transparent
              md:w-fit
              md:h-fit
              flex-2
              duration-300
              flex
              itmes-center
              justify-between
              ${menu && "opacity-1 translate-x-[-50%]"}
            `
          )}
        >
          <div
            className={`
              flex
              flex-col
              md:items-center
              justify-between
              gap-10
              lg:gap-[4rem]
              md:flex-row
              w-full

            `}
          >
            {location.pathname === "/" ? (
              <ul className="grid justify-center md:flex items-center gap-10">
                {mainNavigationLinkText.map((item, index) => {
                  return (
                    <li key={index} className="text-center">
                      <Link
                        href={"#" + item.href}
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setMenu(false);
                        }}
                        className="lg:!text-[1.2rem]"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <NavLink
                to={"/"}
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setMenu(false);
                }}
                className="lg:!text-[1.2rem] border border-zinc-800 px-6 py-2 rounded-sm"
              >
                {translate("header.back")} Home
              </NavLink>
            )}

            <NavLink
              onClick={() => {
                document.body.classList.remove("overflow-hidden");
                setMenu(false);
              }}
              target="_blank"
              referrerPolicy="no-referrer"
              to="mailto:contact@netflash.ch"
              className="
                md:bg-[#3e60c1ba]
                md:hover:bg-[#3E60C1]
                md:text-white
                md:px-[1.8rem]
                md:py-[.5rem]
                md:ml-[.5rem]
                cursor-pointer
                lg:text-[1.2rem]
                place-self-center
                rounded-full
              "
            >
              {translate("header.contact")}
            </NavLink>
          </div>
        </div>

        <div
          aria-label="toggle mobile menu"
          className="
            relative
            grid
            place-content-center
            w-[50px]
            h-[50px]
            gap-1
            z-[15]
            cursor-pointer
            md:hidden
          "
          onClick={() => {
            document.body.classList.toggle("overflow-hidden");
            setMenu(!menu);
          }}
        >
          <div
            className={`
              w-[35px]
              h-[2px]
              bg-whiteText
              rounded-full
              transition
              pointer-events-none
              ${menu && "rotate-[45deg]  translate-x-[4px] translate-y-[5px]"}
              `}
          ></div>
          <div
            className={`
              w-[35px]
              h-[2px]
              bg-whiteText
              rounded-full
              transition
              pointer-events-none
              ${menu && "rotate-[-45deg] translate-x-1"}
            `}
          ></div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
