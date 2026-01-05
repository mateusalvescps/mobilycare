"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Shield,
  Clock,
  Heart,
  Stethoscope,
  Calendar,
  Plane,
  BookOpen,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import QRCode from "react-qr-code"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Forçar play do vídeo em mobile
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play()
        } catch (error) {
          console.log("Autoplay bloqueado, tentando novamente...")
          // Tentar novamente após interação do usuário
          document.addEventListener('touchstart', async () => {
            if (videoRef.current) {
              try {
                await videoRef.current.play()
              } catch (e) {
                console.log("Não foi possível reproduzir o vídeo")
              }
            }
          }, { once: true })
        }
      }
    }

    playVideo()

    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.85
        if (isInView) {
          element.classList.add("animate-fade-in-up")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Image src="/logo-mobilicare.png" alt="Mobilycare Logo" width={50} height={50} className="w-12 h-12" />
              <span className="text-2xl font-bold text-primary">Mobilycare</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#conheca"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Conheça
              </Link>
              <Link
                href="#servicos"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="#diferenciais"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Diferenciais
              </Link>
            </div>

            <Button
              asChild
              className="bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Link href="https://wa.me/5519997905115" target="_blank" rel="noopener noreferrer">
                Agende sua viagem
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Vídeo de fundo */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video_background_inicio.mp4" type="video/mp4" />
        </video>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,75,127,0.75)] to-[rgba(27,75,127,0.85)] z-[1]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance animate-fade-in">
              Sua Rota de Autonomia
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transporte acessível com excelência, segurança e cuidado humano em Campinas e Região (Valinhos, Vinhedo, Jundiaí, Paulínia, Hortolândia, Sumaré)
            </p>
            <div
              className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              <span className="text-white/90">
                Atendimento em Campinas e Região | Motoristas treinados | Disponível Todos os dias!
              </span>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                asChild
                className="bg-[#25D366] text-white hover:bg-[#20BA5A] text-lg px-10 py-8 shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300 font-bold"
              >
                <Link href="https://wa.me/5519997905115" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  AGENDE SUA VIAGEM
                </Link>
              </Button>
            </div>
            
            {/* QR Code para mobile */}
            <div className="hidden md:flex justify-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="bg-white p-4 rounded-2xl shadow-2xl flex flex-col items-center">
                <QRCode
                  value="https://wa.me/5519997905115"
                  size={150}
                  level="H"
                />
                <p className="text-center text-sm text-gray-600 mt-2 flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Escaneie para agendar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="conheca" className="py-24 bg-primary animate-on-scroll">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground text-balance">
                {(() => {
                  const years = new Date().getFullYear() - 2017;
                  return years >= 10 ? `Há mais de ${years} anos` : `Há ${years} anos`;
                })()} transformando mobilidade em autonomia
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Transporte acessível com segurança e respeito. Nossa missão é garantir sua autonomia para ir onde você precisar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-primary-foreground/90">Satisfação dos Clientes</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">Todos os dias</div>
                <div className="text-primary-foreground/90">Disponível para você</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Bento Box */}
      <section id="sistema" className="py-24 animate-on-scroll">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 animate-bounce-subtle">
              Sistema Exclusivo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Sistema Mobilycare®</h2>
            <p className="text-xl text-muted-foreground">Excelência e inovação em cada detalhe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all duration-500 bg-card border-border hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">Veículos Adaptados</h3>
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/spin1.png"
                  alt="Chevrolet Spin adaptada"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chevrolet Spin adaptadas com rampa de acesso, cintos de segurança especiais e equipamentos para sua proteção.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Rampa de acesso segura
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Manutenção preventiva
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Seguro de passageiros
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-500 bg-card border-border hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">Pontualidade</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Respeitamos seu tempo e seus compromissos. Chegamos no horário combinado para você não perder consultas e compromissos.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Flexibilidade de horários
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Atendimento via WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Confirmação de viagens
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-500 bg-card border-border hover:scale-105 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">Atendimento com Carinho</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tratamos cada pessoa com respeito, atenção e cuidado. Estamos aqui para tornar sua viagem tranquila e confortável.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Motoristas atenciosos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Auxílio no embarque e desembarque
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Atendimento familiar
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-muted/30 animate-on-scroll">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground">
              Mobilidade para todas as suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Stethoscope className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultas Médicas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transporte seguro para hospitais, clínicas, exames laboratoriais, fisioterapia e consultas
                especializadas. Pontualidade garantida para seus compromissos de saúde, com auxílio no embarque e
                desembarque.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Calendar className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lazer e Eventos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aproveite restaurantes, cinemas, shows, teatros, shoppings e eventos sociais com total conforto e
                independência. Sua diversão é nossa prioridade. Planejamento para eventos especiais e comemorações.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                <Plane className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Viagens e Aeroportos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transfers para aeroportos de Viracopos e Congonhas, viagens intermunicipais e de longa distância.
                Planejamento cuidadoso, auxílio com bagagens e jornadas tranquilas e seguras.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Serviço Corporativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Soluções de transporte para empresas que valorizam a inclusão. Contratos personalizados e
                    deslocamento de colaboradores.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Acompanhamento Familiar</h4>
                  <p className="text-sm text-muted-foreground">
                    Espaço confortável para acompanhantes. Porque sabemos que o apoio da família é fundamental em
                    momentos importantes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="py-24 bg-gradient-to-b from-background to-primary/5 animate-on-scroll">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Por Que Escolher a Mobilycare
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nossos Diferenciais</h2>
            <p className="text-xl text-muted-foreground">Tecnologia, segurança e humanização em cada viagem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Cobertura Regional</h4>
              <p className="text-sm text-muted-foreground">Campinas e Região (Valinhos, Vinhedo, Jundiaí, Paulínia, Hortolândia, Sumaré). Regiões distantes também (aeroporto, viagens)</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Equipe Dedicada</h4>
              <p className="text-sm text-muted-foreground">
                Motoristas experientes e preparados para atender você com segurança
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo-mobilicare.png"
                  alt="Mobilycare Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 brightness-0 invert"
                />
                <div className="text-3xl font-bold">Mobilycare</div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Transporte acessível com carinho e segurança. Sua autonomia é nossa missão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button asChild className="bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300">
                  <Link href="https://wa.me/5519997905115" target="_blank" rel="noopener noreferrer">
                    Agende sua viagem
                  </Link>
                </Button>
                <div className="bg-white p-3 rounded-lg flex flex-col items-center">
                  <QRCode
                    value="https://wa.me/5519997905115"
                    size={100}
                    level="H"
                  />
                  <p className="text-center text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Escaneie aqui
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Campinas e Região (Valinhos, Vinhedo, Jundiaí, Paulínia, Hortolândia, Sumaré)</li>
                <li>(19) 99790-5115</li>
                <li className="pt-2">
                  <span className="text-xs text-primary-foreground/60">Horário de atendimento: Disponível Todos os dias!</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#conheca" className="hover:text-accent transition-colors">
                    Conheça
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="hover:text-accent transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#diferenciais" className="hover:text-accent transition-colors">
                    Diferenciais
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Mobilycare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/5519997905115"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Agende sua viagem via WhatsApp"
      >
        <div className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-subtle hover:shadow-[#25D366]/50">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="font-semibold text-sm">Agende sua viagem</span>
        </div>
      </Link>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-on-scroll.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
