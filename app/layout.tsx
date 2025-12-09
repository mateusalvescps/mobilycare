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
  title: "Mobilicare | Transporte Acessível em Campinas",
  description:
    "Transporte especializado para cadeirantes com segurança, pontualidade e atendimento humanizado em Campinas. Sua rota de autonomia começa aqui.",
  keywords: "transporte acessível, cadeirantes, mobilidade, Campinas, transporte adaptado",
  openGraph: {
    title: "Mobilicare | Sua Rota de Autonomia",
    description: "Transporte acessível com excelência e cuidado humano",
    type: "website",
  },
  generator: "v0.app",
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
