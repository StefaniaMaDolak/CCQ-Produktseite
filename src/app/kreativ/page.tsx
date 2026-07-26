import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCQ — Kreativ & Verspielt",
  description: "Design-Variante 3: Kreativ, farbig, frisch",
};

export default function KreativPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a2e]">
      {/* Header */}
      <header className="py-6 px-4 bg-gradient-to-r from-[#667eea] to-[#764ba2]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src="/logo.jpg" alt="CCQ Logo" className="h-14 w-auto rounded-lg" />
          <p className="text-sm text-white/80 hidden sm:block">
            Erkannt werden für das, was wirklich zählt.
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Deine digitale Visitenkarte.
          </h1>
          <p className="text-xl text-white/90 mb-12">
            Immer griffbereit. Auf jedem Handy. Ohne App.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <p className="text-white leading-relaxed">
              CCQ ist eine digitale Visitenkarte, die man nicht nur anschaut — 
              <strong>man speichert sie</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Bereiche */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Alles, was zählt. An einem Ort.</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Profil", desc: "Wer du bist. Was du machst. Wie man dich erreicht.", color: "from-[#667eea] to-[#764ba2]" },
              { title: "Charakter", desc: "Die Geschichte dahinter. Deine Werte.", color: "from-[#f093fb] to-[#f5576c]" },
              { title: "Team / Netzwerk", desc: "Dein Team, deine Partner.", color: "from-[#4facfe] to-[#00f2fe]" },
              { title: "Angebot", desc: "Was du bietest. Klar und übersichtlich.", color: "from-[#43e97b] to-[#38f9d7]" },
              { title: "Specials", desc: "Das Besondere. Tipps, Wissen, Geschenke.", color: "from-[#fa709a] to-[#fee140]" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${item.color} mb-4`} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Schritte */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Drei Schritte. Fertig.</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {["Scannen", "Speichern", "Immer dabei"].map((step, i) => (
              <div key={step} className="flex-1 bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{i + 1}</div>
                <h3 className="text-lg font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Preis auf Anfrage.</h2>
          <p className="text-white/90 mb-8">Fixpreis + monatliche Pauschale. Kein technischer Stress.</p>
          <button className="bg-white text-[#764ba2] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            Jetzt anfragen 🚀
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1a1a2e] text-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2026 CCQ Charactercard — Stefania Dolak</p>
        </div>
      </footer>
    </main>
  );
}
