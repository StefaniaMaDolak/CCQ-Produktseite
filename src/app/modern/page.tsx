import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCQ — Modern & Minimal",
  description: "Design-Variante 2: Modern, clean, reduziert",
};

export default function ModernPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="py-8 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src="/logo.jpg" alt="CCQ Logo" className="h-14 w-auto" />
          <p className="text-xs text-gray-400 hidden sm:block uppercase tracking-widest">
            Erkannt werden für das, was wirklich zählt.
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-8 tracking-tight">
            Deine digitale
            <br />
            <span className="text-gray-400">Visitenkarte.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-xl">
            Immer griffbereit. Auf jedem Handy. Ohne App.
          </p>
          <div className="mt-16 bg-gray-50 p-8 rounded-none border-l-4 border-black">
            <p className="text-gray-700">
              CCQ ist eine digitale Visitenkarte, die man <strong>nicht nur anschaut</strong> — man speichert sie.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Bereiche */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-16">Die 5 Bereiche</h2>
          <div className="space-y-12">
            {[
              { nr: "01", title: "Profil", desc: "Wer du bist. Was du machst. Wie man dich erreicht." },
              { nr: "02", title: "Charakter", desc: "Die Geschichte dahinter. Deine Werte." },
              { nr: "03", title: "Team / Netzwerk", desc: "Dein Team, deine Partner oder deine Zielgruppe." },
              { nr: "04", title: "Angebot", desc: "Was du bietest. Klar und übersichtlich." },
              { nr: "05", title: "Specials", desc: "Das Besondere. Tipps, Wissen, Geschenke." },
            ].map((item) => (
              <div key={item.nr} className="flex gap-8 items-start">
                <span className="text-4xl font-bold text-gray-200">{item.nr}</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Schritte */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-16">So funktioniert es</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {["Scannen", "Speichern", "Immer dabei"].map((step, i) => (
              <div key={step} className="border border-gray-200 p-8">
                <div className="text-5xl font-bold text-gray-100 mb-4">0{i + 1}</div>
                <h3 className="text-lg font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Preis auf Anfrage.</h2>
          <p className="text-gray-400 mb-8">Fixpreis + monatliche Pauschale. Kein technischer Stress.</p>
          <button className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition">
            Jetzt anfragen →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex justify-between text-xs text-gray-400">
          <p>© 2026 CCQ Charactercard</p>
          <p>Stefania Dolak</p>
        </div>
      </footer>
    </main>
  );
}
