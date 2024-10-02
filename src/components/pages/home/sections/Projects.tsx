import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { cardsData, filterButtonsData as options } from "../../../../constants";

import useProjectsAnimation from "../../../../hooks/useProjectAnimation";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
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
      id="portofolio"
      className="
        projects__section
        xl:py-[10rem]
        pt-[6rem]
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
              Portfolio
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
            <div className="w-[86vw] max-w-[450px]">
              <Select
                onChange={setSelectedOption}
                options={options}
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[]}
                isMulti
                styles={customStyles}
              />
            </div>
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
                  <li
                    data-value={card.category}
                    onClick={() =>
                      route(`/project/${card.titel}`, { state: card })
                    }
                    className="
                    rounded-[.5rem]
                    overflow-hidden
                    bg-[#111116]
                    border
                    border-white/10
                    text-center
                    h-[550px]
                    grid
                  "
                    key={index}
                  >
                    <img
                      className="
                      img__wrapper
                      md:h-[100%]
                      w-[100%]
                      xl:h-[100%]
                      max-h-[350px]
                      object-fill
                    "
                      src={card.img}
                      aria-roledescription="click on this img to show the project page info"
                      loading="lazy"
                      draggable={false}
                      alt="project picutre"
                    />
                    <div
                      className="
                      grid
                      gap-2
                      pt-3
                      pb-4
                      px-2
                      sm:px-4
                      sm:pt-4
                      md:px-2
                      md:pt-2
                      lg:px-3
                      lg:pt-4
                      xl:px-3
                      xl:pt-8
                    "
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3
                          className="
                        text-[.9rem]
                        ym:text-[1rem]
                        sm:text-[1.3rem]
                        xd:text-[1.1rem]
                        lg:text-[1rem]
                        pb-2
                        text-start
                        
                      "
                        >
                          {card.titel}
                        </h3>
                        <Button
                          variant="default"
                          className=" mt-0 bg-[#29292D]"
                        >
                          {translate("projects.view")}
                        </Button>
                      </div>
                      <div>
                        <p className="text-[.8rem] text-start">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sed, quaerat beatae! Nisi incidunt enim
                          recusandae aut.
                        </p>
                      </div>
                      <div
                        className="
                        flex
                    
                        gap-2
                        items-center
                        justify-between
                      "
                      >
                        <ul
                          className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        lg:gap-2
                        xl:gap-4
                      "
                        >
                          <span className="text-[.8rem]">
                            {translate("projects.category")}:
                          </span>

                          {card.category.map((item, index) => {
                            return (
                              <Button
                                variant={"link"}
                                key={index}
                                className="
                              text-[.4rem]
                              xm:text-[.53rem]
                              ym:text-[.7rem]
                              sm:text-[.9rem]
                              xd:text-[.5rem]
                              xg:text-[.7rem]
                              italic
                              text-[#C4C4DF]
                              min-[1023px]:text-[.55rem]
                              min-[1150px]:text-[.7rem]
                              xl:text-[.8rem]
                              3xl:text-[1.2rem]
                              w-fit
                              p-0
                            "
                              >
                                {item}
                              </Button>
                            );
                          })}
                        </ul>
                        <Button
                          className="
                          w-fit
                          text-[.8rem]
                          h-[20px]
                          sm:text-[1.2rem]
                          md:text-[1.1rem]
                          lg:text-[.85rem]
                          xl:text-xl
                          xd:text-[1rem]
                      
                          p-0

                          text-[#4363C1]
                          
                        "
                          variant={"link"}
                        >
                          {translate("projects.read_more")}
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </li>
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
