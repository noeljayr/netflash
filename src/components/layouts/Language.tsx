import { useTranslation } from "react-i18next";
import en from "../../assets/imgs/en.png";
import ger from "../../assets/imgs/ger.png";
import { useEffect } from "react";

function Language() {
  const [translate, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);

    const body = document.querySelector("body") as HTMLBodyElement;

    if (body) {
      body.style.transition = "opacity .25s ease-in-out";
      body.style.opacity = "0.25";

      const timer = setTimeout(() => {
        body.style.opacity = "1";
      }, 250);

      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="flex flex-col gap-2 fixed language-container right-4 self-center z-10">
      <button
        className={`text-xs p-1 h-fit grid gap-2 ${
          i18n.language === "ger" ? "active-language" : ""
        }`}
        onClick={() => handleChangeLanguage("ger")}
      >
        <img src={ger} alt="ger" />
        <span>GER</span>
      </button>

      <button
        className={`text-xs p-1 h-fit grid gap-2 ${
          i18n.language === "en" ? "active-language" : ""
        }`}
        onClick={() => handleChangeLanguage("en")}
      >
        <img src={en} alt="en" />
        <span>EN</span>
      </button>
    </div>
  );
}

export default Language;
