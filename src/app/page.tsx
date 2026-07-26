export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="py-8 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src="/logo.jpg" alt="CCQ Logo" className="h-20 w-auto" />
          <p className="text-xs text-gray-400 hidden sm:block uppercase tracking-widest">
            Erkannt werden für das, was wirklich zählt.
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-8 tracking-tight">
                Deine digitale
                <br />
                <span className="text-gray-400">Visitenkarte.</span>
              </h1>
              <p className="text-xl text-gray-500">
                Immer griffbereit. Auf jedem Handy. Ohne App.
              </p>
              <div className="mt-8">
                <a
                  href="/contact.vcf"
                  className="inline-block bg-black text-white font-bold py-4 px-8 hover:bg-gray-800 transition"
                >
                  📇 Als Kontakt speichern
                </a>
                <p className="text-xs text-gray-400 mt-3">
                  Funktioniert auf iPhone & Android
                </p>
              </div>
            </div>
            <div>
              {/* PLATZHALTER: Phone Mockup */}
              <div className="bg-gray-100 rounded-3xl p-4 aspect-[9/16] max-w-[280px] mx-auto flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 text-sm font-medium">📱 Platzhalter:</span>
                <span className="text-gray-400 text-xs text-center mt-1">Handy mit CCQ-Karte</span>
              </div>
            </div>
          </div>
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
            <div className="flex gap-8 items-start">
              <span className="text-4xl font-bold text-gray-200">01</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Profil</h3>
                <p className="text-gray-500">Wer du bist. Was du machst. Wie man dich erreicht.</p>
                <div className="mt-4 bg-white rounded-xl p-4 border-2 border-dashed border-gray-200 flex items-center justify-center h-24">
                  <span className="text-gray-400 text-xs">🖼️ Bild: Beispiel Profil-Bereich</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <span className="text-4xl font-bold text-gray-200">02</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Charakter</h3>
                <p className="text-gray-500">Die Geschichte dahinter. Deine Werte.</p>
                <div className="mt-4 bg-white rounded-xl p-4 border-2 border-dashed border-gray-200 flex items-center justify-center h-24">
                  <span className="text-gray-400 text-xs">🖼️ Bild: Beispiel Charakter-Bereich</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <span className="text-4xl font-bold text-gray-200">03</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Team / Netzwerk</h3>
                <p className="text-gray-500">Dein Team, deine Partner oder deine Zielgruppe.</p>
                <div className="mt-4 bg-white rounded-xl p-4 border-2 border-dashed border-gray-200 flex items-center justify-center h-24">
                  <span className="text-gray-400 text-xs">🖼️ Bild: Beispiel Team/Netzwerk</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <span className="text-4xl font-bold text-gray-200">04</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Angebot</h3>
                <p className="text-gray-500">Was du bietest. Klar und übersichtlich.</p>
                <div className="mt-4 bg-white rounded-xl p-4 border-2 border-dashed border-gray-200 flex items-center justify-center h-24">
                  <span className="text-gray-400 text-xs">🖼️ Bild: Beispiel Angebot/Speisekarte</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <span className="text-4xl font-bold text-gray-200">05</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Specials</h3>
                <p className="text-gray-500">Das Besondere. Tipps, Wissen, Geschenke.</p>
                <div className="mt-4 bg-white rounded-xl p-4 border-2 border-dashed border-gray-200 flex items-center justify-center h-24">
                  <span className="text-gray-400 text-xs">🖼️ Bild: Beispiel Specials-Bereich</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert es */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-16">So funktioniert es</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-gray-200 p-8 text-center">
              <div className="text-5xl font-bold text-gray-100 mb-4">01</div>
              <h3 className="text-lg font-bold">Scannen</h3>
              <div className="mt-4 bg-gray-100 rounded-xl p-4 border-2 border-dashed border-gray-300 aspect-square max-w-[120px] mx-auto flex items-center justify-center">
                <span className="text-gray-400 text-xs">📷 QR-Code</span>
              </div>
            </div>
            <div className="border border-gray-200 p-8 text-center">
              <div className="text-5xl font-bold text-gray-100 mb-4">02</div>
              <h3 className="text-lg font-bold">Speichern</h3>
              <div className="mt-4 bg-gray-100 rounded-xl p-4 border-2 border-dashed border-gray-300 aspect-square max-w-[120px] mx-auto flex items-center justify-center">
                <span className="text-gray-400 text-xs">📷 Speichern</span>
              </div>
            </div>
            <div className="border border-gray-200 p-8 text-center">
              <div className="text-5xl font-bold text-gray-100 mb-4">03</div>
              <h3 className="text-lg font-bold">Immer dabei</h3>
              <div className="mt-4 bg-gray-100 rounded-xl p-4 border-2 border-dashed border-gray-300 aspect-square max-w-[120px] mx-auto flex items-center justify-center">
                <span className="text-gray-400 text-xs">📷 Kontakt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-16">Für wen?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 overflow-hidden">
              <img src="/restaurant.jpg" alt="Restaurant mit CCQ Charactercard" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">🍽️ Restaurant</h3>
                <p className="text-gray-500">Speisekarte, Öffnungszeiten, Reservierung.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 overflow-hidden">
              <img src="/praxis.jpg" alt="Praxis mit CCQ Charactercard" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">🏥 Praxis / Therapie</h3>
                <p className="text-gray-500">Vita, Methoden, Terminbuchung.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 overflow-hidden">
              <img src="/handwerk.jpg" alt="Handwerk mit CCQ Charactercard" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">🔨 Handwerk</h3>
                <p className="text-gray-500">Leistungen, Referenzen, direkte Anfrage.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 overflow-hidden">
              <img src="/selbstaendig.jpg" alt="Selbstständige mit CCQ Charactercard" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">💼 Selbstständige</h3>
                <p className="text-gray-500">Profil, Angebot, Philosophie, Kontakt.</p>
              </div>
            </div>
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

      {/* Kontakt */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Lass uns reden.</h2>
          <p className="text-gray-500 mb-8">
            Du willst wissen, ob eine Charactercard für dich passt? Schreib mir.
          </p>
          <a
            href="mailto:koordination.sdolak@gmail.com"
            className="inline-block bg-black text-white font-bold py-4 px-8 hover:bg-gray-800 transition"
          >
            Jetzt anfragen
          </a>
          <p className="mt-6 text-gray-400 text-sm">
            koordination.sdolak@gmail.com
          </p>
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
