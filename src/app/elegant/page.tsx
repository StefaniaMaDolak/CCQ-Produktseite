import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCQ — Elegant & Warm",
  description: "Design-Variante 1: Elegant, warm, einladend",
};

export default function ElegantPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-[#2C2420]">
      {/* Header */}
      <header className="bg-white py-6 px-4 border-b border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src="/logo.jpg" alt="CCQ Logo" className="h-16 w-auto" />
          <p className="text-sm text-[#8B7355] hidden sm:block italic">
            Erkannt werden für das, was wirklich zählt.
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-6 text-[#2C2420] tracking-tight">
            Deine digitale Visitenkarte.
          </h1>
          <p className="text-xl text-[#8B7355] mb-12">
            Immer griffbereit. Auf jedem Handy. Ohne App.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8DFD5]">
            <p className="text-[#5C4D3C] leading-relaxed text-lg">
              CCQ ist eine digitale Visitenkarte, die man nicht nur anschaut — 
              <strong className="text-[#2C2420]">man speichert sie</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Bereiche */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 text-[#2C2420]">Alles, was zählt. An einem Ort.</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { nr: "1", title: "Profil", desc: "Wer du bist. Was du machst. Wie man dich erreicht." },
              { nr: "2", title: "Charakter", desc: "Die Geschichte dahinter. Deine Werte. Warum du tust, was du tust." },
              { nr: "3", title: "Team / Netzwerk", desc: "Dein Team, deine Partner oder deine Zielgruppe." },
              { nr: "4", title: "Angebot", desc: "Was du bietest. Klar und übersichtlich." },
              { nr: "5", title: "Specials", desc: "Das Besondere. Tipps, Wissen, Geschenke." },
            ].map((item) => (
              <div key={item.nr} className="bg-[#F5F0EB] rounded-xl p-6">
                <span className="text-[#C4A882] text-4xl font-light">{item.nr}</span>
                <h3 className="text-xl font-medium mt-2 mb-2 text-[#2C2420]">{item.title}</h3>
                <p className="text-[#5C4D3C]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Schritte */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-12 text-[#2C2420]">Drei Schritte. Fertig.</h2>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {["Scannen", "Speichern", "Immer dabei"].map((step, i) => (
              <div key={step} className="bg-white rounded-xl p-6 border border-[#E8DFD5]">
                <div className="w-12 h-12 bg-[#C4A882] text-white rounded-full flex items-center justify-center text-lg mx-auto mb-4">{i + 1}</div>
                <h3 className="text-lg font-medium text-[#2C2420]">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis */}
      <section className="py-16 px-4 bg-[#2C2420] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Preis auf Anfrage.</h2>
          <p className="text-[#C4A882] mb-8">Fixpreis + monatliche Pauschale. Kein technischer Stress.</p>
          <button className="bg-[#C4A882] text-white px-8 py-3 rounded-lg hover:bg-[#B39B73] transition">
            Jetzt anfragen
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 text-center text-[#8B7355]">
        <p>© 2026 CCQ Charactercard — Stefania Dolak</p>
      </footer>
    </main>
  );
}
