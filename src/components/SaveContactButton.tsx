"use client";

export default function SaveContactButton() {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:CCQ
N:CCQ;;;;
ORG:CCQ Charactercard
TEL;TYPE=CELL:+41 79 000 00 00
EMAIL;TYPE=WORK:hello@ccq-card.ch
URL:https://ccq-produktseite.vercel.app
NOTE:Erkannt werden fuer das, was wirklich zaehlt. Digitale Visitenkarte via CCQ Charactercard.
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "ccq.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleSaveContact}
      className="inline-block bg-black text-white font-bold py-4 px-8 hover:bg-gray-800 transition cursor-pointer"
    >
      📇 Als Kontakt speichern
    </button>
  );
}
