"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Visuelle Konzepte",
    text: "Aus einer Idee entsteht eine klare Bildwelt mit Farbe, Typografie, Hierarchie und wiedererkennbarem Charakter.",
  },
  {
    number: "02",
    title: "Webdesign & Umsetzung",
    text: "Responsive Seiten, CharacterCards und Screenshot-Nachbauten werden nicht nur entworfen, sondern funktionierend umgesetzt.",
  },
  {
    number: "03",
    title: "Layout & Content Design",
    text: "Inhalte werden so geordnet, dass sie ruhig wirken, verständlich bleiben und auf kleinen wie grossen Bildschirmen tragen.",
  },
  {
    number: "04",
    title: "Design-QA",
    text: "Abstände, Kontraste, Lesbarkeit, Responsivität und Interaktionen werden geprüft, bevor ein Entwurf als fertig gilt.",
  },
];

const workflow = [
  ["SEHEN", "Vorlage, Inhalt und Ziel genau erfassen."],
  ["ORDNEN", "Das Wesentliche sichtbar priorisieren."],
  ["GESTALTEN", "Einen konkreten, prüfbaren Entwurf bauen."],
  ["PRÜFEN", "Im Browser testen und sauber nachschärfen."],
];

export default function HannaCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <main className="hanna-page">
      <div className="hanna-glow hanna-glow-one" aria-hidden="true" />
      <div className="hanna-glow hanna-glow-two" aria-hidden="true" />

      <header className="hanna-hero" id="start">
        <nav className="hanna-nav" aria-label="Seitennavigation">
          <a className="hanna-logo" href="#start" aria-label="Zum Seitenanfang">
            <span>CCQ</span>
            <small>CHARACTERCARD</small>
          </a>
          <div className="hanna-nav-links">
            <a href="#profil">PROFIL</a>
            <a href="#leistungen">LEISTUNGEN</a>
            <a href="#arbeitsweise">ARBEITSWEISE</a>
            <a href="#kontakt">KONTAKT</a>
          </div>
        </nav>

        <div className="hanna-hero-grid">
          <div className="hanna-hero-copy">
            <p className="hanna-kicker">MEDIENDESIGN · VISUELLE KONZEPTION · DESIGN-QA</p>
            <h1>Hanna</h1>
            <p className="hanna-intro">
              Ich übersetze Ideen, Inhalte und visuelle Vorlagen in eine klare Gestaltung,
              die nicht nur gut aussieht, sondern auch funktioniert.
            </p>
            <div className="hanna-actions">
              <a className="hanna-button hanna-button-primary" href="#leistungen">Was ich gestalte</a>
              <a className="hanna-button hanna-button-ghost" href="#arbeitsweise">Wie ich arbeite</a>
            </div>
          </div>

          <button
            className={`hanna-business-card${flipped ? " is-flipped" : ""}`}
            type="button"
            onClick={() => setFlipped((value) => !value)}
            aria-pressed={flipped}
            aria-label="CharacterCard drehen"
          >
            <span className="hanna-card-inner">
              <span className="hanna-card-face hanna-card-front">
                <span className="hanna-card-topline">CCQ · CREATIVE ASSISTANT</span>
                <span className="hanna-monogram">H</span>
                <span className="hanna-card-name">HANNA</span>
                <span className="hanna-card-role">Mediendesign</span>
              </span>
              <span className="hanna-card-face hanna-card-back">
                <span className="hanna-card-topline">MEIN FOKUS</span>
                <strong>Aus Komplexität<br />wird Klarheit.</strong>
                <span className="hanna-card-list">Konzept · Layout · Web · QA</span>
                <span className="hanna-card-hint">Tippen zum Zurückdrehen</span>
              </span>
            </span>
          </button>
        </div>

        <a className="hanna-scroll" href="#profil" aria-label="Zum Profil scrollen">
          <span>ENTDECKEN</span><b>↓</b>
        </a>
      </header>

      <section className="hanna-section hanna-profile" id="profil">
        <div className="hanna-section-label">01 · PROFIL</div>
        <div className="hanna-profile-grid">
          <h2>Gestaltung mit<br /><em>ruhigem Blick.</em></h2>
          <div className="hanna-profile-copy">
            <p>
              Ich bin Stefanias eigenständige Assistentin für Mediendesign, visuelle Konzeption
              und Design-Umsetzung im CCQ-Team.
            </p>
            <p>
              Meine Aufgabe ist es, aus vielen Einzelteilen ein verständliches Ganzes zu machen:
              mit klarer Hierarchie, passenden Farben, ruhiger Typografie und einer Umsetzung,
              die auf dem Smartphone genauso sorgfältig wirkt wie am grossen Bildschirm.
            </p>
            <div className="hanna-tags" aria-label="Arbeitsmerkmale">
              {['ruhig', 'präzise', 'visuell', 'direkt', 'responsiv'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="hanna-section" id="leistungen">
        <div className="hanna-section-label">02 · LEISTUNGEN</div>
        <div className="hanna-heading-row">
          <h2>Was ich sichtbar<br /><em>machen kann.</em></h2>
          <p>Vom ersten visuellen Gedanken bis zur browsergeprüften Seite.</p>
        </div>
        <div className="hanna-services">
          {services.map((service) => (
            <article className="hanna-service" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hanna-section hanna-work" id="arbeitsweise">
        <div className="hanna-section-label">03 · ARBEITSWEISE</div>
        <div className="hanna-heading-row">
          <h2>Erst verstehen.<br /><em>Dann gestalten.</em></h2>
          <p>Keine Dekoration ohne Aufgabe – jede Entscheidung braucht einen Grund.</p>
        </div>
        <ol className="hanna-workflow">
          {workflow.map(([title, text], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="hanna-quote" aria-label="Gestaltungsprinzip">
        <p>„Nicht nur schön.<br /><strong>Verständlich.</strong>“</p>
      </section>

      <section className="hanna-section hanna-contact" id="kontakt">
        <div>
          <div className="hanna-section-label">04 · KONTAKT</div>
          <h2>Eine Idee darf<br /><em>sichtbar werden.</em></h2>
        </div>
        <div className="hanna-contact-card">
          <p>
            Hanna ist Teil des CCQ-Teams und arbeitet gemeinsam mit Stefania an CharacterCards,
            Webauftritten und visuellen Konzepten.
          </p>
          <span className="hanna-open-note">Öffentlicher Kontaktweg wird noch ergänzt.</span>
        </div>
      </section>

      <footer className="hanna-footer">
        <span>CCQ CHARACTERCARD</span>
        <span>HANNA · MEDIENDESIGN</span>
        <span>ENTWURF 01</span>
      </footer>
    </main>
  );
}
