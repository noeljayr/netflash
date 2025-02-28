import React from "react";
import { Button } from "../../ui";
import { useTranslation } from "react-i18next";

const contactPage = [
  {
    name: "Phone",
    text: "12354456787",
  },
  {
    name: "Email",
    text: "website@email.com",
  },
  {
    name: "Commercial Register",
    text: "123456789",
  },
  {
    name: "VAT Identitifcation Number",
    text: "313473159853",
  },
  {
    name: "Address",
    text: "Location, location 2",
  },
  {
    name: "Managing director",
    text: "Name of Director",
  },
];

const Contact = () => {
  const [translate, i18n] = useTranslation("global");

  return (
    <main className=" gap-[1.5rem] imprint-page text-center place-content-center mb-[6rem]">
      <section className="flex flex-col items-center gap-3">
        <h1 className="flex gap-2 Items-center justify-center text-[2rem]">
          <span>Netflash</span>
          <span>{translate("footer.text1")}</span>
        </h1>
        <p className="mx-auto">{translate("contact.p")}</p>
      </section>

    
        <div className="contact-info gap-3 grid-cols-2 w-full">
          {contactPage.map((item) => {
            return (
              <div
                key={item.name}
                className="flex flex-col gap-2 p-4"
              >
                <span className="title font-medium">{item.name}</span>
                <span className="opacity-60">{item.text}</span>
              </div>
            );
          })}
        </div>
    </main>
  );
};

export default Contact;
