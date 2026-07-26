import { NextResponse } from "next/server";

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:CCQ
N:CCQ;;;;
ORG:CCQ Charactercard
TEL;TYPE=CELL:+41 79 000 00 00
EMAIL;TYPE=WORK:hello@ccq-card.ch
URL:https://ccq-produktseite.vercel.app
NOTE:Erkannt werden fuer das\, was wirklich zaehlt. Digitale Visitenkarte via CCQ Charactercard.
END:VCARD`;

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
    },
  });
}
