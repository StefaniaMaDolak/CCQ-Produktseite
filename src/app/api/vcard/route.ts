import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  const base64Image = readFileSync(
    join(process.cwd(), "public", "logo-tiny.base64.txt"),
    "utf-8"
  ).trim();

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:CCQ Charactercard",
    "N:Charactercard;CCQ;;;",
    "ORG:CCQ",
    "TEL;TYPE=CELL:+41 79 000 00 00",
    "EMAIL;TYPE=WORK:hello@ccq-card.ch",
    "URL:https://ccq-produktseite.vercel.app",
    `PHOTO;ENCODING=b;TYPE=JPEG:${base64Image}`,
    "NOTE:Erkannt werden fuer das was wirklich zaehlt",
    "END:VCARD",
  ].join("\\r\\n");

  return new NextResponse(vcard, {
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": 'inline; filename="ccq.vcf"',
    },
  });
}