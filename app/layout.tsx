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
  title: "Mobilycare | Transporte Acessível em Campinas e Região",
  description:
    "Há quase 10 anos transformando mobilidade em autonomia. Transporte especializado para cadeirantes em Campinas e Região (Valinhos, Vinhedo, Jundiaí, Paulínia, Hortolândia, Sumaré).",
  keywords: "transporte acessível, cadeirantes, mobilidade, Campinas, transporte adaptado, Valinhos, Vinhedo, Jundiaí",
  icons: {
    icon: "/logo-mobilicare.png",
    shortcut: "/logo-mobilicare.png",
    apple: "/logo-mobilicare.png",
  },
  openGraph: {
    title: "Mobilycare | Sua Rota de Autonomia",
    description: "Transporte acessível com excelência e cuidado humano em Campinas e Região",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
