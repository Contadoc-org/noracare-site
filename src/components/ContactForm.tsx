"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `Contato NoraCare — ${organization || name}`,
    );
    const body = encodeURIComponent(
      [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Organização: ${organization || "—"}`,
        "",
        message,
      ].join("\n"),
    );

    // Apenas mailto — sem backend.
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card min-w-0 p-6 shadow-lift sm:p-8 lg:p-10"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="input"
            placeholder="Seu nome"
          />
        </Field>

        <Field label="E-mail" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input"
            placeholder="voce@hospital.com.br"
          />
        </Field>

        <Field
          label="Organização"
          htmlFor="organization"
          className="sm:col-span-2"
        >
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className="input"
            placeholder="Hospital, rede ou clínica"
          />
        </Field>

        <Field
          label="Mensagem"
          htmlFor="message"
          required
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="input min-h-36 resize-y"
            placeholder="Conte um pouco sobre a operação de plantões da sua rede..."
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-soft break-words">
          Ao enviar, abrimos seu cliente de e-mail para {siteConfig.email}.
        </p>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
        >
          Enviar mensagem
          <IconArrowRight />
        </Button>
      </div>

      {status === "success" ? (
        <p
          className="mt-5 flex items-start gap-3 rounded-xl border border-nc-teal/20 bg-[#effaf6] px-4 py-3 text-sm font-medium text-heading"
          role="status"
        >
          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-nc-teal" />
          Obrigado! Finalize o envio no seu e-mail para concluirmos o contato.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          Preencha nome, e-mail e mensagem para continuar.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  required,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`.trim()} htmlFor={htmlFor}>
      <span className="mb-2 block text-sm font-semibold text-heading">
        {label}
        {required ? <span className="text-nc-blue"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
