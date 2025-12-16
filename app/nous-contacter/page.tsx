"use client";

import { useState } from "react";
import Script from "next/script";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    // Récupération reCAPTCHA v3
    const recaptchaToken = await grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE as string,
      { action: "submit" }
    );

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
        recaptchaToken,
      }),
    });

    setLoading(false);
    if (res.ok) setDone(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-100">
      <h1 className="text-3xl font-bold text-[#c8a45d] mb-6">
        Nous Contacter
      </h1>

      {/* Script Google reCAPTCHA */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE}`}
      />

      {done ? (
        <div className="p-6 bg-green-700/30 border border-green-400 rounded-lg">
          Merci ! Votre message a bien été envoyé.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-[#0f3a2d] p-6 rounded-lg border border-[#1d6047]"
        >
          <div>
            <label>Nom complet</label>
            <input
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-[#0c2e25]"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-[#0c2e25]"
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 rounded bg-[#0c2e25]"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-[#c8a45d] text-[#0c2e25] font-semibold hover:bg-[#d9b97a]"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      )}
    </div>
  );
}
