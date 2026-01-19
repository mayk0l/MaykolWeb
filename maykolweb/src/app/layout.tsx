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
  title: "Maykol Salgado | La Lógica del Constructor",
  description:
    "Venture Architect de Limache, Chile. Líder Técnico en iTalenPRO, fundador de Volat y socio en SportPlay. Construyendo ecosistemas tecnológicos que facturan.",
  keywords: [
    "Venture Architect",
    "Líder Técnico",
    "Software Factory",
    "Next.js Developer",
    "Chile",
    "Tech Lead",
    "Full Stack Developer",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Maykol Nicolás Salgado Ramos" }],
  creator: "Maykol Salgado",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://maykolsalgado.me",
    siteName: "Maykol Salgado - La Lógica del Constructor",
    title: "Maykol Salgado | Venture Architect",
    description:
      "Venture Architect. Construyendo ecosistemas tecnológicos que facturan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maykol - The Builder's Logic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maykol | The Builder's Logic",
    description:
      "Venture Architect. Construyendo infraestructuras que facturan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
