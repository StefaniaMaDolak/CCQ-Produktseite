export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white text-slate-900 py-4 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.jpg" 
              alt="CCQ Charactercard Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-sm text-gray-500 hidden sm:block italic">
            Erkannt werden für das, was wirklich zählt.
          </p>
        </div>
      </header>

      {/* Hero — Was ist CCQ? */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Deine digitale Visitenkarte.
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Immer griffbereit. Auf jedem Handy. Ohne App.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-left border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              CCQ ist eine digitale Visitenkarte, die man nicht nur anschaut — 
              <strong>man speichert sie</strong>. Statt einer Webseite, die man einmal 
              besucht und vergisst, bekommst du eine Karte, die deine Kunden im 
              Telefon behalten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex-1 bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-slate-700 mb-1">Webseite</p>
                <p className="text-sm text-gray-600">Man findet sie, wenn man sucht</p>
              </div>
              <div className="flex-1 bg-slate-100 rounded-lg p-4 border-2 border-slate-300">
                <p className="font-semibold text-slate-700 mb-1">Charactercard</p>
                <p className="text-sm text-gray-600">Man hat sie immer da, wenn man sie braucht</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Die 5 Bereiche */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Alles, was zählt. An einem Ort.
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Profil</h3>
              <p className="text-gray-600">Wer du bist. Was du machst. Wie man dich erreicht. Alles auf einen Blick.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Charakter</h3>
              <p className="text-gray-600">Die Geschichte dahinter. Deine Werte. Warum du tust, was du tust.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Team / Netzwerk</h3>
              <p className="text-gray-600">Dein Team, deine Partner oder deine Zielgruppe — je nachdem, was zu dir passt.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Angebot</h3>
              <p className="text-gray-600">Was du bietest. Ob Dienstleistung, Produkt oder Speisekarte — klar und übersichtlich.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">5</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Specials</h3>
              <p className="text-gray-600">Das Besondere. Tipps, Wissen, Quiz, Geschenke für deine Besucher. Was du willst.</p>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert es */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Drei Schritte. Fertig.
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Scannen</h3>
              <p className="text-gray-600">Dein Kunde hält das Handy an den QR-Code.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Speichern</h3>
              <p className="text-gray-600">Die Karte öffnet sich. Mit einem Klick als Kontakt gespeichert.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Immer dabei</h3>
              <p className="text-gray-600">Von jetzt an griffbereit. Im Telefon. Ohne Suche.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Für jeden, der sich zeigen will.
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-slate-800">🍽️ Restaurant</h3>
              <p className="text-gray-600">Speisekarte, Öffnungszeiten, Reservierung, Quiz für die Wartezeit.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-slate-800">🏥 Praxis / Therapie</h3>
              <p className="text-gray-600">Vita, Methoden, Terminbuchung, Übungen für Zuhause.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-slate-800">🔨 Handwerk</h3>
              <p className="text-gray-600">Leistungen, Referenzen, direkte Anfrage, Tipps rund ums Haus.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-slate-800">💼 Selbstständige</h3>
              <p className="text-gray-600">Profil, Angebot, Philosophie, Kontakt — alles professionell auf einen Blick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preis */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Keine versteckten Kosten. Kein technischer Stress.
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Jede Charactercard ist individuell. Deshalb gibt es keinen Festpreis auf der Webseite. 
            Du bekommst ein faires Angebot — transparent und ohne Überraschungen.
          </p>
          
          <div className="bg-white text-slate-900 rounded-xl p-8 max-w-lg mx-auto">
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Fixpreis für die Erstellung — einmalig</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Monatliche Servicepauschale — Hosting, Wartung, Updates inklusive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Du musst dich um nichts Technisches kümmern</span>
              </li>
            </ul>
            
            <button className="w-full bg-slate-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-slate-800 transition-colors">
              Preis anfragen
            </button>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Lass uns reden.</h2>
          <p className="text-gray-600 mb-8">
            Du willst wissen, ob eine Charactercard für dich passt? Schreib mir. Ich antworte persönlich.
          </p>
          
          <a 
            href="mailto:koordination.sdolak@gmail.com" 
            className="inline-block bg-slate-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Jetzt anfragen
          </a>
          
          <p className="mt-6 text-gray-500">
            koordination.sdolak@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 CCQ Charactercard — Stefania Dolak</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
