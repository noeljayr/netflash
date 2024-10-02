import React, { useRef, useState } from "react";
import { sendEmail } from "../utils/mail.utils";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to store errors
  const [translate, i18n] = useTranslation("global");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    if (!formRef.current) return;

    setIsSending(true); // Disable button while sending
    setErrorMessage(null); // Clear any previous error message

    const formData = new FormData(formRef.current);

    try {
      const result = await sendEmail(formData);

      if (result?.error) {
        console.error("Error sending email:", result.error);
        setErrorMessage(result.error); // Store error in state for UI display
      } else {
        console.log("Email sent successfully");
        // You can clear the form or show a success message here
      }
    } catch (error) {
      // Log the error details to the console
      console.error("Failed to send email:", error);

      // Log specific error details if available
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Stack trace:", error.stack);
        setErrorMessage("An error occurred while sending the email.");
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    } finally {
      setIsSending(false); // Re-enable the button
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="p-info grid gap-4">
        <div className="flex flex-col items-start w-full gap-2">
          <label htmlFor="name" className="text-right">
            {translate("contact_form.name")}
          </label>
          <input
            id="name"
            name="senderFullname"
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
            name="senderEmail"
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
          name="subject"
          placeholder={translate("contact_form.subject_placeholder")}
          required
          defaultValue=""
        />
      </div>

      <div className="flex flex-col items-start w-full gap-2">
        <label htmlFor="message" className="text-right">
          {translate("contact_form.message")}
        </label>
        <textarea
          name="message"
          id="message"
          placeholder={translate("contact_form.message_placeholder")}
          defaultValue=""
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSending}
        className={`cta ${isSending ? "opacity-50" : ""}`}
      >
        {translate("contact_form.send")}
      </button>

      {/* Display error message to the user if it exists */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
