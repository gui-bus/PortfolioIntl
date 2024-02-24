import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  content: string;
  title: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  content,
  title,
  phone,
}) => (
  <div className="flex flex-col">
    <div className="my-5">
      <h1 className="font-bold">Informações do cliente</h1>
      <div className="flex items-center gap-4">
        <p className="font-medium">
          Nome do cliente: <span className="font-light">{name}</span>
        </p>
        <p className="font-medium">
          Assunto: <span className="font-light">{title}</span>
        </p>
        <p className="font-medium">
          Email: <span className="font-light">{email}</span>
        </p>
        <p className="font-medium">
          Whatsapp: <span className="font-light">https://wa.me/{phone}</span>
        </p>
      </div>
    </div>

    <p className="font-medium">
      Mensagem:
      <span className="font-light">
        {content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== content.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    </p>
  </div>
);
