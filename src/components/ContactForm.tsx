"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-[0.9rem] border border-border bg-white px-3.5 py-3 text-[0.95rem] text-foreground outline-none transition placeholder:text-muted-soft focus:border-nc-blue/60 focus:shadow-[0_0_0_4px_rgba(106,173,255,0.28)]";

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

    setStatus("submitting");

    // Mailto fallback — plug a form backend/CRM later without changing UX.
    const subject = encodeURIComponent(
      `Contato institucional — ${organization || name}`,
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

    window.location.href = `mailto:${siteConfig.commercialEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
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
            className={inputClassName}
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
            className={inputClassName}
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
            className={inputClassName}
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
            className={`${inputClassName} resize-y`}
            placeholder="Conte um pouco sobre a operação de plantões da sua rede..."
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Ao enviar, abrimos seu cliente de e-mail para{" "}
          {siteConfig.commercialEmail}.
        </p>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Preparando..." : "Enviar mensagem"}
        </Button>
      </div>

      {status === "success" ? (
        <p
          className="mt-4 rounded-2xl bg-nc-green/15 px-4 py-3 text-sm font-medium text-nc-navy"
          role="status"
        >
          Obrigado! Finalize o envio no seu e-mail para concluirmos o contato.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
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
      <span className="mb-1.5 block text-sm font-semibold text-nc-navy">
        {label}
        {required ? <span className="text-nc-blue"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
