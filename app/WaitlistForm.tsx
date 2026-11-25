"use client";

import { FormEvent, useRef, useState } from "react";

const FORM_ENDPOINT = "";

export default function WaitlistForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<React.ReactNode>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current;
    if (!input) return;

    const email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      input.focus();
      return;
    }

    try {
      const dataLayer = (window as Window & { dataLayer?: Record<string, string>[] }).dataLayer ?? [];
      dataLayer.push({ event: "waitlist_signup" });
      (window as Window & { dataLayer?: Record<string, string>[] }).dataLayer = dataLayer;
    } catch {
      // Tracking is optional and should not block a signup.
    }

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!response.ok) throw new Error("Waitlist request failed");
        setMessage("You're on the list. We'll email you when RivalSight launches.");
        input.form?.reset();
        return;
      } catch {
        // Fall through to the email link when no signup endpoint is configured.
      }
    }

    const mailto = `mailto:support@rivalsight.io?subject=${encodeURIComponent("RivalSight waitlist")}&body=${encodeURIComponent(`Please add me to the RivalSight waitlist: ${email}`)}`;
    setMessage(
      <>Almost there: <a href={mailto}>send your request to support@rivalsight.io</a> to confirm your spot.</>,
    );
  }

  return (
    <>
      <form id="wl" onSubmit={handleSubmit} noValidate>
        <label className="sr" htmlFor="email">Work email</label>
        <input
          ref={inputRef}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@yourstore.com"
          required
        />
        <button type="submit">Join the waitlist</button>
      </form>
      <div className="msg" role="status" aria-live="polite">{message}</div>
    </>
  );
}
