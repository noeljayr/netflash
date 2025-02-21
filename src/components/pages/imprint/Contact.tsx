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

      <section className="grid gap-6 text-left px-6">
        <div className="flex justify-between">
          <h2 className="text-[48px]">{translate("contact.title1.label")}</h2>
          <Button variant={"default"} className="bg-[#314A92]">
            {translate("contact.date")}
          </Button>
        </div>

        <div className="grid gap-3">
          <p>{translate("contact.title1.p")}</p>
        </div>

        <div className="grid gap-3">
          <h3 className="text-[24px]">
            1. {translate("contact.title1.subtitle1.label")}
          </h3>
          <p>{translate("contact.title1.subtitle1.p")}</p>
        </div>
        <div className="grid gap-3">
          <h3 className="text-[24px]">
            {translate("contact.title1.subtitle2.label")}
          </h3>
          <p>
            {translate("contact.title1.subtitle2.p")}
            <ul className="list-disc pl-10">
              <li>{translate("contact.title1.subtitle2.list1")}</li>
              <li>{translate("contact.title1.subtitle2.list2")}</li>
              <li>{translate("contact.title1.subtitle2.list3")}</li>
              <li>{translate("contact.title1.subtitle2.list4")}</li>
            </ul>
          </p>
        </div>
        <div className="grid gap-3">
          <h3 className="text-[24px]">
            {translate("contact.title1.subtitle3.label")}
          </h3>
          <p>
            {translate("contact.title1.subtitle3.p")}
            <ul className="list-disc pl-10">
              <li>
                <li>{translate("contact.title1.subtitle3.list1")}</li>
              </li>
              <li>
                <li>{translate("contact.title1.subtitle3.list2")}</li>
              </li>
              <li>
                <li>{translate("contact.title1.subtitle3.list3")}</li>
              </li>
              <li>
                <li>{translate("contact.title1.subtitle3.list4")}</li>
              </li>
            </ul>
          </p>
        </div>
        <div className="grid gap-3">
          <h3 className="text-[24px]">
            <li>{translate("contact.title1.subtitle4.label")}</li>
          </h3>
          <p>
            {translate("contact.title1.subtitle4.p")}
            <ul className="list-disc pl-10">
              <li>
                <b>{translate("contact.title1.subtitle4.list1")}</b> {" "}
                {translate("contact.title1.subtitle4.list1b")}
              </li>
              <li>
                <b>{translate("contact.title1.subtitle4.list2")}</b> {" "}
                {translate("contact.title1.subtitle4.list2b")}
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section className="text-left grid gap-3 border-y border-y-zinc-800 py-[3rem] px-6">
        <h2 className="text-[48px]">{translate("contact.title2")}</h2>
        <p>{translate("contact.title2c")}</p>
      </section>
      <section className="text-left grid gap-3 px-6">
        <h2 className="text-[48px]">{translate("contact.title3")}</h2>
        <p>{translate("contact.title3c")}</p>
      </section>
    </main>
  );
};

export default Contact;
