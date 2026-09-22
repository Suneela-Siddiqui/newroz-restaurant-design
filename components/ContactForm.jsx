"use client";
import { useState } from "react";
import { useApp } from "./Providers";

export default function ContactForm() {
  const { t } = useApp();
  const [state, setState] = useState("idle");

  async function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form))
    });
    setState(res.ok ? "sent" : "error");
    if (res.ok) e.target.reset();
  }

  if (state === "sent") return <p className="formnote">{t("enquirySent")}</p>;

  return (
    <form className="form" onSubmit={submit}>
      <div className="two">
        <div className="field"><label htmlFor="c-name">{t("name")}</label><input id="c-name" name="name" required /></div>
        <div className="field"><label htmlFor="c-email">{t("email")}</label><input id="c-email" name="email" type="email" required /></div>
      </div>
      <div className="field"><label htmlFor="c-message">{t("message")}</label><textarea id="c-message" name="message" required /></div>
      <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
        {state === "sending" ? t("sending") : t("send")}
      </button>
      {state === "error" && <p style={{ fontSize: 14, color: "var(--ember-ink)" }}>Could not send. Please call us instead.</p>}
    </form>
  );
}
