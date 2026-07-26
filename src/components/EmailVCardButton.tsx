"use client";

import { useState } from "react";

export default function EmailVCardButton() {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSend = () => {
    const vcardUrl = "https://ccq-produktseite.vercel.app/contact.vcf";
    const subject = encodeURIComponent("CCQ vCard - Mein digitaler Kontakt");
    const body = encodeURIComponent(
      `Hier ist mein digitaler Kontakt von CCQ Charactercard:\n\n` +
      `Tippe auf den Link, um mich direkt als Kontakt zu speichern:\n\n` +
      `${vcardUrl}\n\n` +
      `---\n` +
      `CCQ Charactercard - Erkannt werden für das, was wirklich zählt.`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="inline-block bg-black text-white font-bold py-4 px-8 hover:bg-gray-800 transition cursor-pointer"
      >
        📧 vCard per Mail an mich senden
      </button>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <p className="text-sm text-gray-600 mb-3">
        Gib deine E-Mail ein. Du bekommst sofort eine Mail mit dem Direkt-Link zur vCard.
      </p>
      <input
        type="email"
        placeholder="deine@email.ch"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded mb-3 text-black"
      />
      <div className="flex gap-2">
        <button
          onClick={handleSend}
          disabled={!email}
          className="flex-1 bg-black text-white font-bold py-3 px-4 hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          📤 Mail-App öffnen
        </button>
        <button
          onClick={() => setShowForm(false)}
          className="px-4 py-3 text-gray-500 hover:text-gray-700 transition"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}
