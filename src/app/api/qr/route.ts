import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET() {
  // vCard Daten direkt im QR-Code — iOS erkennt das als Visitenkarte
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:CCQ
N:CCQ;;;;
ORG:CCQ Charactercard
TEL;TYPE=CELL:+41 79 000 00 00
EMAIL;TYPE=WORK:hello@ccq-card.ch
URL:https://ccq-produktseite.vercel.app
NOTE:Erkannt werden fuer das was wirklich zaehlt
END:VCARD`;

  try {
    // QR-Code als SVG generieren (besser skalierbar)
    const qrSvg = await QRCode.toString(vcard, {
      type: "svg",
      width: 300,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    });

    return new NextResponse(qrSvg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    return new NextResponse("QR-Code Fehler", { status: 500 });
  }
}
