import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "..";
import { useTranslation } from "react-i18next";

const DialogWrapper = ({
  icon,
  buttonText,
  className,
  DialogTitleText,
}: {
  icon: string;
  buttonText: string;
  className: string;
  DialogTitleText: string;
}) => {
  const [translate, i18n] = useTranslation("global");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          // className='xg:text-[1.3rem] w-fit xg:px-[1.5rem] xg:py-[1.5rem] grid gap-3 h-fit lg:h-full hover:bg-transparent hover:text-inherit text-[.89rem] p-0'
          className={className}
        >
          {icon && (
            <img src={icon} className="w-[27px] place-self-center" alt="" />
          )}
          <span>{buttonText}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="contact-form">
        <DialogHeader>
          <DialogTitle>{DialogTitleText}</DialogTitle>
        </DialogHeader>

        <div className="p-info grid gap-4">
          <div className="flex flex-col items-start w-full gap-2">
            <label htmlFor="name" className="text-right">
              {translate("contact_form.name")}
            </label>
            <input
              id="name"
              placeholder={translate("contact_form.name_placeholder")}
              type="text"
              required
              defaultValue=""
            />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <label htmlFor="email" className="text-right">
              {translate("contact_form.email")}
            </label>
            <input
              id="email"
              placeholder={translate("contact_form.email_placeholder")}
              type="email"
              required
              defaultValue=""
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-full gap-2">
          <label htmlFor="subject" className="text-right">
            {translate("contact_form.subject")}
          </label>
          <input
            id="subject"
            placeholder={translate("contact_form.subject_placeholder")}
            required
            defaultValue=""
          />
        </div>

        <div className="flex flex-col items-start w-full gap-2">
          <label htmlFor="subject" className="text-right">
            {translate("contact_form.message")}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={translate("contact_form.message_placeholder")}
            defaultValue=""
          ></textarea>
        </div>

        <button className="cta">{translate("contact_form.send")}</button>
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
