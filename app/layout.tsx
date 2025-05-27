import { Geist, Geist_Mono, Montserrat, Michroma, Orbitron } from "next/font/google";
import "./globals.css";

import ClientWrapper from "@/components/organisms/ClientWrapper.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: "800",
});

export const metadata = {
  title: "CS2 | CS:GO Case Opening, Cool Skins | Skin.Club",
  description: "Get all your favorite CS2 skins at the best prices. Provably Fair, instant trades, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${michroma.variable} ${orbitron.variable}`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
