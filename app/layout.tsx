import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mobilycare | Transporte Acessível para Cadeirantes em Campinas",
  description:
    "Transporte acessível para cadeirantes em Campinas e Região. Carros adaptados com rampa, motoristas treinados. Atendemos Valinhos, Vinhedo, Jundiaí, Paulínia, Hortolândia, Sumaré. Consultas médicas, aeroporto e lazer. Disponível todos os dias!",
  keywords: "transporte acessível, transporte acessível campinas, transporte cadeirante, carro adaptado cadeirante, transporte cadeira de rodas, mobilidade cadeirante, van adaptada, transporte pcd, transporte inclusivo, ambulância particular, transporte médico cadeirante, veículo adaptado, rampa cadeirante, chevrolet spin adaptada, transporte aeroporto cadeirante, Valinhos, Vinhedo, Jundiaí, Paulínia, Hortolândia, Sumaré",
  authors: [{ name: "Mobilycare" }],
  creator: "Mobilycare",
  publisher: "Mobilycare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-mobilicare.png",
    shortcut: "/logo-mobilicare.png",
    apple: "/logo-mobilicare.png",
  },
  openGraph: {
    title: "Mobilycare | Transporte Acessível para Cadeirantes em Campinas",
    description: "Transporte acessível com carros adaptados, rampa e motoristas treinados. Consultas médicas, aeroporto e lazer em Campinas e Região.",
    type: "website",
    locale: "pt_BR",
    url: "https://mobilycare.com.br",
    siteName: "Mobilycare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobilycare | Transporte Acessível para Cadeirantes",
    description: "Transporte acessível em Campinas e Região com carros adaptados",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mobilycare",
    "description": "Transporte acessível para cadeirantes em Campinas e Região com veículos adaptados",
    "url": "https://mobilycare.com.br",
    "telephone": "+5519997905115",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Campinas",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Campinas"
      },
      {
        "@type": "City",
        "name": "Valinhos"
      },
      {
        "@type": "City",
        "name": "Vinhedo"
      },
      {
        "@type": "City",
        "name": "Jundiaí"
      },
      {
        "@type": "City",
        "name": "Paulínia"
      },
      {
        "@type": "City",
        "name": "Hortolândia"
      },
      {
        "@type": "City",
        "name": "Sumaré"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Transporte Acessível",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transporte para Consultas Médicas",
            "description": "Transporte acessível para hospitais, clínicas e exames"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transporte para Aeroportos",
            "description": "Transfer para aeroportos de Viracopos e Congonhas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transporte para Lazer e Eventos",
            "description": "Transporte acessível para restaurantes, cinemas, shows e eventos"
          }
        }
      ]
    }
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
