"use client";
import { useState } from "react";
import { useApp } from "./Providers";

export default function BookingForm() {
  const { t } = useApp();
  const [state, setState] = useState("idle");

  async function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState("sending");
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form))
    });
    setState(res.ok ? "sent" : "error");
    if (res.ok) e.target.reset();
  }

  if (state === "sent") return <p className="formnote">{t("bookingSent")}</p>;

  return (
    <form className="form" onSubmit={submit}>
      <div className="two">
        <div className="field"><label htmlFor="b-name">{t("name")}</label><input id="b-name" name="name" required /></div>
        <div className="field"><label htmlFor="b-phone">{t("phone")}</label><input id="b-phone" name="phone" type="tel" required /></div>
      </div>
      <div className="two">
        <div className="field"><label htmlFor="b-date">{t("date")}</label><input id="b-date" name="date" type="date" required /></div>
        <div className="field"><label htmlFor="b-time">{t("time")}</label><input id="b-time" name="time" type="time" required /></div>
        <div className="field"><label htmlFor="b-guests">{t("guests")}</label><input id="b-guests" name="guests" type="number" min="1" max="40" defaultValue="2" required /></div>
      </div>
      <div className="field"><label htmlFor="b-notes">{t("notes")}</label><textarea id="b-notes" name="notes" /></div>
      <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
        {state === "sending" ? t("sending") : t("requestBooking")}
      </button>
      {state === "error" && <p style={{ fontSize: 14, color: "var(--ember-ink)" }}>Could not send. Please call us instead.</p>}
    </form>
  );
}
