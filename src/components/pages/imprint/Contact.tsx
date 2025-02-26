import React from "react";
import { Button } from "../../ui";
import { useTranslation } from "react-i18next";

const contactPage = [
  {
    name: "Address",
    text: "Location, location 2",
  },
  {
    name: "Phone",
    text: "12354456787",
  },
  {
    name: "Email",
    text: "website@email.com",
  },
  {
    name: "Managing director",
    text: "Name of Director",
  },
  {
    name: "Commercial Register",
    text: "123456789",
  },
  {
    name: "VAT Identitifcation Number",
    text: "313473159853",
  },
];

const Contact = () => {
  const [translate, i18n] = useTranslation("global");

  return (
    <main className="grid gap-[3rem] container text-center place-content-center mb-[6rem]">
      <section className="grid gap-3">
        <h1 className="grid text-[5rem]">
          <span>Netflash</span>
          <span>{translate("footer.text1")}</span>
        </h1>
        <p className="max-w-[1138px] mx-auto">{translate("contact.p")}</p>
      </section>

      <section>
        <ul className="grid gap-3 grid-cols-1 xd:grid-cols-2 md:grid-cols-3 p-3 py-11 bg-[#111116] border border-zinc-800">
          {contactPage.map((item) => {
            return (
              <li
                key={item.name}
                className="grid gap-3 items-center text-[1.3rem] justify-center p-3"
              >
                <span className="bg-[#0E0E11] p-2 border-2 border-zinc-800 px-6">
                  {item.name}
                </span>
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Contact;
