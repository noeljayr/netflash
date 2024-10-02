import { useState, useRef } from "react";
import { sendEmail } from "../../../utils/mail.utils";
import ContactForm from "../../ContactForm";

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

        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
