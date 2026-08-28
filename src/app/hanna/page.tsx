import type { Metadata } from "next";
import HannaCard from "./HannaCard";
import "./hanna.css";

export const metadata: Metadata = {
  title: "Hanna — CCQ CharacterCard",
  description: "Hanna begleitet Mediendesign, visuelle Konzeption und Design-Umsetzung im CCQ-Team.",
};

export default function HannaPage() {
  return <HannaCard />;
}
