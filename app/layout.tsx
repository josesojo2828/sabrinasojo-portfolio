import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Título base y plantilla para subpáginas
  title: {
    default: "Sabrina Sojo | Estratega Digital & Community Manager",
    template: "%s | Sabrina Sojo"
  },
  // Descripción optimizada con palabras clave
  description: "Transformo seguidores en clientes leales. Estrategias de contenido, gestión de redes sociales y growth marketing para marcas ambiciosas que buscan resultados reales.",

  // Palabras clave para buscadores
  keywords: [
    "Community Manager",
    "Estrategia Digital",
    "Redes Sociales",
    "Marketing de Contenidos",
    "Sabrina Sojo",
    "Growth Marketing",
    "Social Media Manager Venezuela", // O la ubicación que aplique
    "Gestión de RRSS"
  ],

  // Créditos de autoría
  authors: [
    { name: "Sabrina Sojo" },
    { name: "Quantic Arch", url: "https://quanticarch.com" }
  ],
  creator: "Sabrina Sojo",

  // Configuración para compartir en Redes Sociales (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sabrinasojo.com", // Cambia esto por el dominio real cuando lo tengas
    title: "Sabrina Sojo | Estrategia Digital Real",
    description: "Ayudo a marcas a dejar de publicar por publicar y empezar a construir activos digitales que generan ventas.",
    siteName: "Sabrina Sojo Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Debes colocar una imagen de 1200x630px en tu carpeta public
        width: 1200,
        height: 630,
        alt: "Sabrina Sojo - Estrategia Digital",
      },
    ],
  },

  // Configuración para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Sabrina Sojo | Estratega Digital",
    description: "Transformo seguidores en clientes. Estrategia y gestión de RRSS.",
    // creator: "@sabrinasojo", // Descomentar si tiene usuario de Twitter
    images: ["/og-image.jpg"],
  },

  // Instrucciones para los robots de Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Iconos
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* Importante: lang="es" para SEO en español */
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}