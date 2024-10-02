import { Resend } from "resend";

const resend = new Resend("re_UCqDKSH1_8PZk8hpYp6R2nR8ZSgP26eiy");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const subject = formData.get("subject");
  const sender = formData.get("senderFullname");

  if (!message || typeof message !== "string") {
    return {
      error: "invalid Message",
    };
  }

  await resend.emails.send({
    from: ` ${sender} <onboarding@resend.dev>`,
    to: "form@netflash.ch",
    subject: subject as string,
    html: `<p> ${message} </p> <p>From: <b>${sender} </b> | <i> ${senderEmail} </i> </p>`,
    replyTo: senderEmail as string,
  });
};
