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
    <nav
      className="
          items-center
          justify-between
          px-[2rem]
          w-full
        "
    >
      <NavLink
        to="/"
        className="hover:text-[inherit] flex items-center logo gap-.5 "
      >
        <img
          aria-roledescription="img showing our logo and when click on it getting you back home"
          loading="lazy"
          src={logo}
          alt="the logo of our agency"
        />
        <span className="ml-2 text-2xl">Netflash</span>
      </NavLink>

      <div
        className={`
              flex
              flex-col
              items-center
              gap-10
              lg:gap-[4rem]
              md:flex-row
              navlinks
            `}
      >
        {location.pathname === "/" ? (
          mainNavigationLinkText.map((item, index) => {
            return (
              <Link
                key={index}
                href={"#" + item.href}
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setMenu(false);
                }}
                className=""
              >
                {item.title}
              </Link>
            );
          })
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
      </div>

      <div className="flex w-full justify-end">
        <NavLink
          onClick={() => {
            document.body.classList.remove("overflow-hidden");
            setMenu(false);
          }}
          target="_blank"
          referrerPolicy="no-referrer"
          to="mailto:contact@netflash.ch"
          className="
                bg-[#3e60c1ba]
                md:hover:bg-[#3E60C1]
                md:text-white
                md:px-[1.8rem]
                md:py-[.5rem]
                md:ml-[.5rem]
                cursor-pointer
                lg:text-[1.2rem]
                place-self-center
                rounded-full
                contact-btn
              "
        >
          {translate("header.contact")}
        </NavLink>
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
  );
};
export default Header;
