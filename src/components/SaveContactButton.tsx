"use client";

export default function SaveContactButton() {
  const handleShare = async () => {
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:CCQ
N:CCQ;;;;
ORG:CCQ Charactercard
TEL;TYPE=CELL:+41 79 000 00 00
EMAIL;TYPE=WORK:hello@ccq-card.ch
URL:https://ccq-produktseite.vercel.app
NOTE:Erkannt werden fuer das was wirklich zaehlt
END:VCARD`;

    const file = new File([vcardContent], "ccq.vcf", {
      type: "text/vcard",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        // @ts-ignore - navigator.share mit files ist neu
        await navigator.share({
          files: [file],
          title: "CCQ Kontakt",
          text: "Speichere CCQ als Kontakt",
        });
      } catch (err) {
        // Nutzer hat abgebrochen oder Fehler
        console.log("Share abgebrochen:", err);
      }
    } else {
      // Fallback: Datei herunterladen
      const blob = new Blob([vcardContent], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ccq.vcf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-block bg-black text-white font-bold py-4 px-8 hover:bg-gray-800 transition cursor-pointer"
    >
      📇 Als Kontakt speichern
    </button>
  );
}
