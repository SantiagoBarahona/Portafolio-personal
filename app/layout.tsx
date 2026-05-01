import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

/* ─── Fuentes tipográficas ─── */
// Barlow Condensed: titulares estilo señalética de metro
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

// Barlow: cuerpo limpio y legible
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santiago Zapata Barahona — Portafolio",
  description:
    "Portafolio profesional de Santiago Zapata Barahona, estudiante de Ingeniería de Sistemas en la Universidad de Antioquia, desarrollador web y Scrum Master.",
  keywords: ["portafolio", "ingeniería de sistemas", "desarrollador web", "Next.js", "Medellín"],
  authors: [{ name: "Santiago Zapata Barahona" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
