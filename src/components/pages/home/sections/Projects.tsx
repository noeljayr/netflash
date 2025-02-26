import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { cardsData, filterButtonsData as options } from "../../../../constants";

import useProjectsAnimation from "../../../../hooks/useProjectAnimation";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from "../../../ui";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const animatedComponents = makeAnimated();

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: "black",
  }),
  control: (provided: any) => ({
    ...provided,
    color: "black",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "black",
  }),
};

const Projects = () => {
  const [translate, i18n] = useTranslation("global");

  const filterWrapperRef = useRef() as MutableRefObject<HTMLUListElement>;
  const route = useNavigate();

  useProjectsAnimation();

  const [currentShownCard, setCurrentShownCard] = useState<number>(2);
  const [selectedOption, setSelectedOption] = useState<typeof options>([]);

  return (
    <section
      id="portfolio"
      className="
        projects__section
        xl:py-[10rem]
        pt-[1rem]
        lg:px-[3rem]
        xl:px-0
        container
      "
    >
      <div className="">
        <div
          className="
            grid
            gap-6
            md:gap-0
            md:flex
            items-end
            justify-between
            lg:px-0
            mb-[3rem]
            lg:mb-[3rem]
          "
        >
          <div>
            <span
              className="
                project__subtitle
                opacity-0
                text-[.7rem]
                mb-2
                font-medium
                text-[#d47d85]
              "
            >
              {translate("projects.our_proj")}
            </span>
            <h2
              className="
                project__title
                text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              {translate("projects.recent")}
            </h2>
          </div>
          <ul
            className="
              flex
              items-center
              flex-wrap
              gap-[.5rem]
            "
            ref={filterWrapperRef}
          >
            <div className="w-[86vw] max-w-[450px]"></div>
          </ul>
        </div>

        <div className="mySwiper lg:px-0">
          <div className=" grid xg:grid-cols-3 gap-8 grid-cols-1 xd:grid-cols-2">
            {cardsData?.map((card, index) => {
              const filter = selectedOption.reduce(
                (acc: string[], item) => [...acc, item.value],
                []
              );

              const isShown =
                selectedOption.length === 0 ||
                card.category.some((item) => filter.includes(item));

              return (
                isShown &&
                currentShownCard >= index && (
                  <div
                    data-value={card.category}
                    className="project-card relative"
                    key={index}
                  >
                    <div className="project-image flex w-full h-full overflow-hidden">
                      <img
                        className="
                     
                    "
                        src={card.img}
                        aria-roledescription="click on this img to show the project page info"
                        loading="lazy"
                        alt="project picutre"
                      />
                    </div>

                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay absolute flex gap-1"
                    >
                      <span className="font-medium">{card.titel}</span>

                      <span className="icon relative">
                        <span className="tooltip flex absolute p-2 items-center">
                          {translate("projects.visit")}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                      </span>
                    </a>
                  </div>
                )
              );
            })}
          </div>
          {cardsData.length > currentShownCard && (
            <Button
              className="mx-auto flex place-self-center mt-[2rem] text-lg px-8 py-4"
              variant={"default"}
              onClick={() => setCurrentShownCard(currentShownCard + 3)}
            >
              {translate("projects.show_more")}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
