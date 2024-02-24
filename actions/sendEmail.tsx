"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface dataProps {
  name: string;
  content: string;
  email: string;
  title: string;
  phone: string;
}

export const sendEmail = async (data: dataProps) => {
  console.log(data.name);
  console.log(data.content);
  console.log(data.email);
  console.log(data.title);

  const subject = "[ORÇAMENTO] " + data.title;

  const emailSent = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "guibus.dev@gmail.com",
    subject: subject,
    react: EmailTemplate({
      name: data.name,
      email: data.email,
      content: data.content,
      title: data.title,
      phone: data.phone,
    }),
    text: "",
  });
};
