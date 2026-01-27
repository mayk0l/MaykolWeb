import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/context/ModeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida en Valparaíso | Maykol Salgado",
  description:
    "Desarrollo de software, apps web y automatización con IA para empresas de la Quinta Región. MVPs, sistemas a medida y consultoría técnica. Cotización gratis en 24h.",
  keywords: [
    "desarrollo de software valparaíso",
    "programador quinta región",
    "desarrollo web viña del mar",
    "software a medida chile",
    "automatización con inteligencia artificial",
    "MVP startup chile",
    "desarrollador freelance valparaíso",
    "aplicaciones web empresas",
    "consultoría tecnológica",
    "Next.js React TypeScript",
  ],
  authors: [{ name: "Maykol Salgado" }],
  creator: "Maykol Salgado",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://maykolsalgado.me",
    siteName: "Maykol Salgado - Desarrollo de Software",
    title: "Desarrollo de Software a Medida | Quinta Región",
    description:
      "Convierte tu idea en un producto que factura. Software a medida, MVPs y automatización con IA. Cotización gratis.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Maykol Salgado - Desarrollo de Software en Valparaíso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de Software | Maykol Salgado",
    description:
      "Software a medida para empresas de la Quinta Región. Cotización gratis en 24h.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://maykolsalgado.me",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
