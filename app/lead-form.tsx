"use client";
import { useState } from "react";

export default function LeadForm() {
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget).entries());
    if (!body.name || !body.email) { setMsg("Please add your name and email."); setOk(false); return; }
    setSending(true); setMsg("");
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!r.ok) throw new Error("failed");
      setMsg("Done! Check your inbox - your reply is already on its way."); setOk(true);
    } catch { setMsg("Something went wrong - email me at babalyrics@gmail.com"); setOk(false); }
    setSending(false);
  }

  return (
    <form className="form" id="lead-form" onSubmit={submit}>
      <div className="two">
        <input name="name" placeholder="Your name *" required />
        <input name="business" placeholder="Business name" />
      </div>
      <div className="two">
        <input name="email" type="email" placeholder="Email *" required />
        <input name="phone" type="tel" placeholder="Phone" />
      </div>
      <textarea name="message" rows={4} placeholder="What would you like to automate?" />
      <button className="btn" disabled={sending}>{sending ? "Sending..." : "Send - Get an Instant Reply"}</button>
      <div className="status" style={{ color: ok ? "#4ade80" : "#f87171" }}>{msg}</div>
    </form>
  );
}

