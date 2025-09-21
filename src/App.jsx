import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Shield, Zap, Users, Award, CheckCircle, Scissors, TreePine, Wrench, HardHat, Leaf, Building, MessageCircle } from 'lucide-react'
import './App.css'
import './scroll-fix.css'

// Import das imagens
import reaLogo from './assets/rea_logo_transparent_final.png'
import reaLogoNova from './assets/rea_logo_nova_oficial.jpg'
import reaLogoTransparente from './assets/rea_logo_nova_transparente.png'
import reaLogoClean from './assets/rea_logo_clean.jpg'
import reaLogoTransparentClean from './assets/rea_logo_transparent_clean.png'
import neoenergia from './assets/neoenergia_logo_new_transparent.png'
import neoenergiaNew from './assets/neoenergia_logo_nova.png'
import neoenergiaOficial from './assets/neoenergia_logo_oficial.png'
import neoenergiaTransparente from './assets/neoenergia_logo_transparente.png'
import neoenergiaFinalTransparente from './assets/neoenergia_logo_final_transparente.png'
import neoenergiaNovaVersao from './assets/neoenergia_logo_nova_versao.png'
import edpLogo from './assets/edp_logo_improved.png'
import santaMaria from './assets/santa_maria_logo_new_transparent.png'
import linharesGeracao from './assets/linhares_geracao_logo_new_transparent.png'
import tropicaliaLogo from './assets/tropicalia_logo_official.png'
import enevaLogo from './assets/eneva_logo.png'
import coelbaLogo from './assets/coelba_logo.png'
import vegetationIntervention from './assets/vegetation_intervention_real.jpeg'
import electricalMaintenance from './assets/electrical_network_maintenance_real.jpeg'
import electricalSafety from './assets/electrical_safety_real.png'
import empresaImagem1 from './assets/imagem1.jpg'
import empresaImagem2 from './assets/imagem2.jpg'
import empresaImagem3 from './assets/imagem3.jpg'
import empresaImagem4 from './assets/imagem4.jpg'
import empresaImagem5 from './assets/imagem5.jpeg'
import aboutSectionImage from './assets/about_section_image.jpg'
import vegetationManagementHQ from './assets/vegetation_management_high_quality.jpg'

// Variantes de animação para melhor performance e suavidade
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.95 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Componente Carousel das fotos da empresa
function EmpresaCarousel() {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isPaused, setIsPaused] = React.useState(false)
  const [loadedImages, setLoadedImages] = React.useState(new Set())
  
  const images = [
    {
      src: empresaImagem1,
      alt: "Equipe R&A em Treinamento de Segurança"
    },
    {
      src: empresaImagem2,
      alt: "Profissional R&A com Veículo da Empresa"
    },
    {
      src: empresaImagem3,
      alt: "Equipe R&A com Veículos e Equipamentos"
    },
    {
      src: empresaImagem4,
      alt: "Frota de Veículos R&A"
    },
    {
      src: empresaImagem5,
      alt: "Equipe R&A em Treinamento de Altura"
    }
  ]

  // Preload das imagens
  React.useEffect(() => {
    const preloadImages = () => {
      images.forEach((image, index) => {
        const img = new Image()
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]))
          if (index === 0) setIsLoading(false) // Primeira imagem carregada
        }
        img.src = image.src
      })
    }
    preloadImages()
  }, [])

  // Timer do carousel com pause
  React.useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    
    return () => clearInterval(timer)
  }, [images.length, isPaused])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div 
      className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
            <div className="text-gray-500 text-lg font-medium">Carregando fotos...</div>
          </div>
        </div>
      )}

      {/* Container das imagens com slide */}
      <div className="relative w-full h-96 overflow-hidden">
        <motion.div 
          className="flex w-full h-full"
          animate={{ x: `-${currentImage * 100}%` }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="min-w-full h-full relative"
            >
              <motion.img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{ 
                  opacity: loadedImages.has(index) ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Setas de navegação */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
        style={{ opacity: isPaused ? 1 : 0 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
        style={{ opacity: isPaused ? 1 : 0 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white shadow-lg scale-110' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-105'
            }`}
          />
        ))}
      </div>


    </div>
  )
}

function App() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50"
    >
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Barra Superior - Logo e Informações */}
        <motion.div 
          className="bg-white/95 backdrop-blur-sm border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="container mx-auto px-4 py-3">
            <motion.div 
              className="flex items-center justify-between"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="flex items-center space-x-6">
                <motion.img 
                  src={reaLogoTransparente} 
                  alt="R&A Logo" 
                  className="h-20 w-auto transition-transform duration-300 hover:scale-105" 
                  variants={scaleIn}
                />
                <motion.div 
                  className="hidden md:flex items-center space-x-4 text-sm text-gray-600"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span>Especialistas em Linhas de Transmissão</span>
                  </motion.div>

                </motion.div>
              </div>
              <motion.div 
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <a 
                  href="https://wa.me/27998746554" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Barra Inferior - Navegação */}
        <motion.div 
          className="bg-gradient-to-r from-green-600 to-green-700 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="container mx-auto px-4">
            <motion.nav 
              className="flex items-center space-x-8 py-3"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.a 
                href="#home" 
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#services" 
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#clients" 
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Clientes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#about" 
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="https://webmail.rea.srv.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Webmail
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
              </motion.a>
              <motion.div 
                className="ml-auto hidden md:block"
                variants={fadeInUp}
              >
                <span className="text-green-200 text-sm">Sooretama/ES</span>
              </motion.div>
            </motion.nav>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-8" variants={fadeInUp}>
              <motion.div className="space-y-4" variants={staggerContainer}>
                <motion.div variants={scaleIn}>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Leaf className="w-4 h-4 mr-2" />
                    </motion.div>
                    <span className="font-semibold text-sm">Empresa Amiga da Natureza</span>
                  </div>
                </motion.div>
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  R<motion.span className="text-orange-500">&</motion.span>A Serviços e 
                  <motion.span 
                    className="text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  > Manutenções </motion.span>
                  <motion.span 
                    className="text-gray-900"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >Elétricas</motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  Especializada em prestação de serviços de intervenção em vegetação em linha de transmissão 
                  e redes de distribuição de MT/BT, oferecendo soluções seguras e sustentáveis para o setor elétrico.
                </motion.p>
              </motion.div>

            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUp}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <EmpresaCarousel />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">

          
          {/* Hero Image Section */}
          <motion.div 
            className="relative mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={vegetationManagementHQ} 
                alt="Supressão em vegetação manual" 
                className="w-full h-64 object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/60"></div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-center text-white">
                  <motion.div 
                    className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Scissors className="w-12 h-12 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-4xl font-bold mb-4 tracking-wide"
                    variants={fadeInUp}
                    style={{ 
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Serviços Especializados
                  </motion.h3>
                  <motion.p 
                    className="text-xl opacity-90 max-w-2xl leading-relaxed"
                    variants={fadeInUp}
                    style={{ 
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      fontWeight: '400'
                    }}
                  >
                    Soluções sustentáveis e especializadas para o setor elétrico, sempre priorizando o equilíbrio ambiental
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <TreePine className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors">Supressão em Vegetação Manual</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Remoção manual especializada de vegetação em faixas de servidão</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Scissors className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">Poda e Corte de Árvores</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Poda e corte de árvores em linha de transmissão e redes de distribuição de energia elétrica</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Recuperação de Acesso em Vegetação</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Recuperação de acesso vegetação, aterramento e seccionamento de cercas</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Wrench className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">Consertos de Porteiras</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Consertos especializados de porteiras e colchetes</p>
            </motion.div>
          </motion.div>

          {/* Environmental Commitment */}
          <div className="relative">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Compromisso Ambiental</h3>
                </div>
                <p className="text-xl opacity-90 leading-relaxed max-w-4xl">
                  Todos os nossos serviços são realizados com foco na preservação ambiental, garantindo o equilíbrio perfeito entre a manutenção da infraestrutura elétrica e a proteção do meio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>



      {/* Clients Section */}
      <motion.section
        id="clients"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={scaleIn}>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-4">
                <Users className="w-4 h-4 mr-2" />
                <span className="font-semibold">Nossos Clientes</span>
              </div>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              Parcerias de Sucesso
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              A confiança nos nossos serviços geraram parcerias de muito sucesso
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative overflow-hidden py-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Gradientes de fade nas laterais - mais suaves */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              className="flex space-x-8 items-center animate-scroll-smooth"
              style={{ willChange: 'transform' }}
            >
              {/* Primeira série de logos */}
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={edpLogo} alt="EDP" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={santaMaria} alt="Santa Maria" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={linharesGeracao} alt="Linhares Geração" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={tropicaliaLogo} alt="Tropicalia Transmissora" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              

              
              {/* Segunda série para continuidade */}
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={neoenergiaNovaVersao} alt="Neoenergia" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={edpLogo} alt="EDP" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={santaMaria} alt="Santa Maria" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={linharesGeracao} alt="Linhares Geração" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={tropicaliaLogo} alt="Tropicalia Transmissora" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              {/* Segunda série para transição imperceptível */}
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={edpLogo} alt="EDP" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={santaMaria} alt="Santa Maria" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={linharesGeracao} alt="Linhares Geração" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={tropicaliaLogo} alt="Tropicalia Transmissora" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              

            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-6">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Nossa Empresa</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  R&A Serviços e Manutenções Elétricas
                </h2>
                
                <div className="flex justify-center mb-8">
                  <img 
                    src={reaLogoTransparentClean} 
                    alt="R&A Logo" 
                    className="w-48 h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed text-left">
                  <p>
                    A <strong className="text-gray-900">R&A SERVIÇOS E MANUTENÇÕES ELÉTRICAS</strong>, com sede em Sooretama/ES, é uma empresa especializada em prestação de serviços de intervenção em vegetação em linha de transmissão e redes de distribuição de MT/BT.
                  </p>
                  <p>
                    A intervenção em vegetação é uma manutenção necessária, sem prejuízos ao meio ambiente, para que não haja risco de interrupção no fornecimento de energia quando ocorrem chuvas e ventos fortes.
                  </p>
                  <p>
                    Temos por objetivo oferecer toda a qualidade que os nossos clientes precisam, contando com uma equipe profissional que se empenha para inovar e crescer, com cursos específicos em Segurança, Meio Ambiente e Saúde do Trabalho garantindo a satisfação de nossos clientes.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Missão</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Prover excelência em nossos serviços, com agilidade, confiabilidade e inovação.</p>
                </Card>
                
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Visão</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Ser uma empresa de referência, reconhecida pelos clientes, colaboradores, comunidade e fornecedores, pela qualidade de nossos serviços.</p>
                </Card>
                
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">Valores</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Ética, Respeito, Profissionalismo, Transparência, Espírito de equipe, Humildade, Responsabilidade e Sustentabilidade.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={scaleIn}>
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="font-semibold">Entre em Contato</span>
              </div>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              Fale Conosco
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Estamos prontos para atender suas necessidades em serviços elétricos especializados
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Telefone</h3>
              <p className="text-gray-600">(27) 99874-6554</p>
              <p className="text-gray-600">(27) 99984-0445</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">E-mail</h3>
              <p className="text-gray-600">rea@rea.srv.br</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Endereço</h3>
              <p className="text-gray-600 text-sm">Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Endereço de Apoio</h3>
              <p className="text-gray-600 text-sm">Av. Cerejeira, 9 andar, Sala 916<br />Torre I, Movelar<br />Linhares-ES, CEP 29906-014</p>
            </motion.div>
          </motion.div>
          

        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <img src={reaLogoTransparente} alt="R&A Logo" className="h-12 w-auto" />
              <p className="text-green-100 text-xs leading-relaxed">
                Especializada em serviços elétricos com foco na segurança, qualidade e preservação ambiental.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">Serviços</h4>
              <ul className="space-y-1 text-xs text-green-100">
                <li>Supressão em Vegetação Manual</li>
                <li>Poda e Corte de Árvores</li>
                <li>Recuperação de Acesso em Vegetação</li>
                <li>Consertos de Porteiras</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">Empresa</h4>
              <ul className="space-y-1 text-xs text-green-100">
                <li>15+ Anos de Experiência</li>
                <li>Empresa Amiga da Natureza</li>
                <li>Linhas de Transmissão</li>
                <li>Redes de Distribuição MT/BT</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contato</h4>
              <div className="space-y-1 text-xs text-green-100">
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-2" />
                  (27) 99874-6554
                </div>
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-2" />
                  (27) 99984-0445
                </div>
                <div className="flex items-center">
                  <Mail className="w-3 h-3 mr-2" />
                  rea@rea.srv.br
                </div>

                <div className="flex items-start">
                  <MapPin className="w-3 h-3 mr-2 mt-0.5" />
                  <span>Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-3 h-3 mr-2 mt-0.5" />
                  <span>Av. Cerejeira, 9 andar, Sala 916<br />Torre I, Movelar<br />Linhares-ES, CEP 29906-014</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-600/30 mt-6 pt-4 text-center text-xs text-green-100">
            <p>&copy; 2024 R&A Serviços e Manutenções Elétricas. Todos os direitos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
}

export default App

