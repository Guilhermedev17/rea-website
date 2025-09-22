import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Shield, Zap, Users, Award, CheckCircle, Scissors, TreePine, Wrench, HardHat, Leaf, Building, MessageCircle, Menu, X, Home, Briefcase, Star, Info, Contact } from 'lucide-react'
import './App.css'
import './scroll-fix.css'
import './mobile-responsive.css'

// Função para scroll suave otimizada
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Calcula a altura do header dinamicamente
    const header = document.querySelector('header')
    const headerHeight = header ? header.offsetHeight + 20 : 140
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth'
    })
  }
}

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



// Componente de Menu Mobile Melhorado
function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleMenu}
        />
      )}
      
      {/* Menu Panel */}
      <motion.div
        className={`fixed top-0 right-0 z-50 w-80 max-w-[85vw] h-screen max-h-screen shadow-2xl overflow-hidden flex flex-col md:hidden mobile-menu-fixed ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        style={{ height: '100vh', maxHeight: '100vh' }}
      >
        {/* Background - Solid neutral color */}
        <div className="absolute inset-0 bg-slate-800"></div>
        
        {/* Header do Menu */}
        <div className="relative flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <img src={reaLogoTransparente} alt="R&A Logo" className="h-8 sm:h-10 w-auto" />
            <div className="text-white">
              <h3 className="font-bold text-lg">R&A</h3>
              <p className="text-xs text-white/80">Serviços Elétricos</p>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-white/20 transition-colors touch-manipulation"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden overscroll-contain mobile-menu-content" style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}>
          <nav className="p-4 sm:p-6 space-y-3" role="navigation">
            {[
              { label: 'Início', id: 'home', icon: Home, description: 'Página inicial' },
              { label: 'Serviços', id: 'services', icon: Briefcase, description: 'Nossos serviços' },
              { label: 'Clientes', id: 'clients', icon: Star, description: 'Parceiros de sucesso' },
              { label: 'Sobre', id: 'about', icon: Info, description: 'Nossa empresa' },
              { label: 'Contato', id: 'contact', icon: Contact, description: 'Fale conosco' }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    toggleMenu()
                    setTimeout(() => scrollToSection(item.id), 300) // Pequeno delay para fechar o menu antes de rolar
                  }}
                  className="flex items-center w-full text-left p-4 text-white hover:bg-white/20 rounded-xl transition-all duration-200 font-medium border border-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent touch-manipulation backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                  transition={{ delay: isOpen ? 0.1 * index : 0, duration: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base">{item.label}</div>
                    <div className="text-sm text-white/70">{item.description}</div>
                  </div>
                </motion.button>
              )
            })}
          </nav>
          
          {/* Action Buttons */}
          <div className="relative p-4 sm:p-6 border-t border-white/20 space-y-3 flex-shrink-0">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/27998746554"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent touch-manipulation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: isOpen ? 0.6 : 0, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              <span>Falar no WhatsApp</span>
            </motion.a>
            
            {/* Webmail Link */}
            <motion.a
              href="https://webmail.rea.srv.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full bg-white/20 hover:bg-white/30 text-white text-center py-3 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent touch-manipulation backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: isOpen ? 0.7 : 0, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 mr-3" />
              <span>Acessar Webmail</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

// Componente Carousel das fotos da empresa
function EmpresaCarousel() {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isPaused, setIsPaused] = React.useState(false)
  const [loadedImages, setLoadedImages] = React.useState(new Set())
  const [isMobile, setIsMobile] = React.useState(false)
  
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

  // Detect mobile screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
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
      onMouseEnter={() => !isMobile && setIsPaused(true)}
      onMouseLeave={() => !isMobile && setIsPaused(false)}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="w-full h-64 md:h-96 bg-gray-300 flex items-center justify-center">
            <div className="text-gray-500 text-sm md:text-lg font-medium">Carregando fotos...</div>
          </div>
        </div>
      )}

      {/* Container das imagens com slide */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <motion.div 
          className="flex w-full h-full"
          animate={{ x: `-${currentImage * 100}%` }}
          transition={{ 
            type: "tween", 
            duration: 0.8, 
            ease: "easeInOut" 
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

      {/* Setas de navegação - sempre visíveis no mobile */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-all duration-200 md:opacity-0 md:group-hover:opacity-100 opacity-80"
        style={{ opacity: isMobile ? 0.8 : (isPaused ? 1 : 0) }}
      >
        <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-all duration-200 md:opacity-0 md:group-hover:opacity-100 opacity-80"
        style={{ opacity: isMobile ? 0.8 : (isPaused ? 1 : 0) }}
      >
        <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicadores - mais visíveis no mobile */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 md:space-x-2 empresa-carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white shadow-lg scale-110' 
                : 'bg-white/60 hover:bg-white/80 hover:scale-105'
            }`}
          />
        ))}
      </div>


    </div>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('home')
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  // Fecha o menu quando pressionar ESC
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])
  
  // Sistema de detecção de seção ativa baseado no scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'clients', 'about', 'contact']
      const scrollPosition = window.scrollY + 200 // Offset para melhor detecção
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Chamada inicial
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Previne scroll quando o menu está aberto
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.height = '100%'
      document.body.classList.add('menu-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
      document.body.style.height = 'unset'
      document.body.classList.remove('menu-open')
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
      document.body.style.height = 'unset'
      document.body.classList.remove('menu-open')
    }
  }, [isMobileMenuOpen])
  
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
          <div className="container mx-auto px-4 py-2 md:py-1">
            <motion.div 
              className="flex items-center justify-between"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="flex items-center space-x-3 md:space-x-6">
                <motion.img 
                  src={reaLogoTransparente} 
                  alt="R&A Logo" 
                  className="h-8 md:h-12 w-auto transition-transform duration-300 hover:scale-105" 
                  variants={scaleIn}
                />
                <motion.div 
                  className="hidden lg:flex items-center space-x-4 text-sm text-gray-600"
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
                className="flex items-center space-x-2 md:space-x-4"
                variants={fadeInUp}
              >
                {/* WhatsApp Button - Hidden on mobile, shown on desktop */}
                <a 
                  href="https://wa.me/27998746554" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-sm"
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  WhatsApp
                </a>
                
                {/* Mobile Menu Button */}
                <motion.button
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Barra Inferior - Navegação - Hidden on mobile */}
        <motion.div 
          className="hidden md:block bg-gradient-to-r from-green-600 to-green-700 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="container mx-auto px-4">
            <motion.nav 
              className="flex items-center space-x-6 lg:space-x-8 py-3"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.button 
                onClick={() => scrollToSection('home')}
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group cursor-pointer text-sm md:text-base"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('services')}
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group cursor-pointer text-sm md:text-base"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('clients')}
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group cursor-pointer text-sm md:text-base"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Clientes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('about')}
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group cursor-pointer text-sm md:text-base"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group cursor-pointer text-sm md:text-base"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
              <motion.a 
                href="https://webmail.rea.srv.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group text-sm md:text-base"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                Webmail
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
              </motion.a>
              <motion.div 
                className="ml-auto hidden lg:block"
                variants={fadeInUp}
              >
                <span className="text-green-200 text-sm">Sooretama/ES</span>
              </motion.div>
            </motion.nav>
          </div>
        </motion.div>
      </motion.header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      


      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-6 md:space-y-8" variants={fadeInUp}>
              <motion.div className="space-y-3 md:space-y-4" variants={staggerContainer}>
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
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
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
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
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
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">

          
          {/* Hero Image Section */}
          <motion.div 
            className="relative mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={vegetationManagementHQ} 
                alt="Supressão em vegetação manual" 
                className="w-full h-48 md:h-64 object-cover"
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
                      className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 services-specialized-icon-container"
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Scissors className="w-12 h-12 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 tracking-wide"
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
                    className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl leading-relaxed px-4 md:px-0"
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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <TreePine className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors leading-tight">Supressão em Vegetação Manual</h4>
              <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Remoção manual especializada de vegetação em faixas de servidão</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Scissors className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">Poda e Corte de Árvores</h4>
              <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Poda e corte de árvores em linha de transmissão e redes de distribuição de energia elétrica</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">Recuperação de Acesso em Vegetação</h4>
              <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Recuperação de acesso em vegetação, aterramento e seccionamento de cercas</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
              variants={scaleIn}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Wrench className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">Consertos de Porteiras</h4>
              <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Consertos especializados de porteiras e colchetes</p>
            </motion.div>
          </motion.div>

          {/* Environmental Commitment */}
          <div className="relative">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-16 md:-translate-y-32 translate-x-16 md:translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-white/10 rounded-full translate-y-12 md:translate-y-24 -translate-x-12 md:-translate-x-24"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <Leaf className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Compromisso Ambiental</h3>
                </div>
                <p className="text-base md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-4xl">
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
        className="py-12 md:py-16 lg:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
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
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Parcerias de Sucesso
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0"
              variants={fadeInUp}
            >
              A confiança nos nossos serviços geraram parcerias de muito sucesso
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative overflow-hidden py-6 md:py-8 logos-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Gradientes de fade nas laterais - mais suaves */}
            <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-scroll-logos">
              {/* Array de logos otimizado - duplicado para scroll contínuo */}
              {[
                { src: edpLogo, alt: "EDP" },
                { src: neoenergiaNovaVersao, alt: "Neoenergia" },
                { src: santaMaria, alt: "Santa Maria" },
                { src: linharesGeracao, alt: "Linhares Geração" },
                { src: tropicaliaLogo, alt: "Tropicalia Transmissora" }
              ].concat([
                { src: edpLogo, alt: "EDP" },
                { src: neoenergiaNovaVersao, alt: "Neoenergia" },
                { src: santaMaria, alt: "Santa Maria" },
                { src: linharesGeracao, alt: "Linhares Geração" },
                { src: tropicaliaLogo, alt: "Tropicalia Transmissora" }
              ]).map((logo, index) => (
                <motion.div 
                  key={index}
                  className="flex justify-center items-center p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm min-w-[180px] md:min-w-[240px] h-24 md:h-32 mx-2 md:mx-4 group flex-shrink-0"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-12 md:max-h-20 max-w-[120px] md:max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200" 
                  />
                </motion.div>
              ))}
            </div>
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
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-6">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Nossa Empresa</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                  R&A Serviços e Manutenções Elétricas
                </h2>
                
                <div className="flex justify-center mb-6 md:mb-8">
                  <img 
                    src={reaLogoTransparentClean} 
                    alt="R&A Logo" 
                    className="w-32 md:w-40 lg:w-48 h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-left px-4 md:px-0">
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
              
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                <Card className="text-center p-4 md:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Missão</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Prover excelência em nossos serviços, com agilidade, confiabilidade e inovação.</p>
                </Card>
                
                <Card className="text-center p-4 md:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Visão</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Ser uma empresa de referência, reconhecida pelos clientes, colaboradores, comunidade e fornecedores, pela qualidade de nossos serviços.</p>
                </Card>
                
                <Card className="text-center p-4 md:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Valores</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Ética, Respeito, Profissionalismo, Transparência, Espírito de equipe, Humildade, Responsabilidade e Sustentabilidade.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50"
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
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Fale Conosco
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0"
              variants={fadeInUp}
            >
              Estamos prontos para atender suas necessidades em serviços elétricos especializados
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{ 
                y: -3,
                boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Telefone</h3>
              <p className="text-sm md:text-base text-gray-600">(27) 99874-6554</p>
              <p className="text-sm md:text-base text-gray-600">(27) 99984-0445</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{ 
                y: -3,
                boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">E-mail</h3>
              <p className="text-sm md:text-base text-gray-600">rea@rea.srv.br</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{
                y: -3,
                boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Endereço</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center group"
              variants={scaleIn}
              whileHover={{
                y: -3,
                boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Endereço de Apoio</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Av. Cerejeira, 9 andar, Sala 916<br />Torre I, Movelar<br />Linhares-ES, CEP 29906-014</p>
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
        className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-6 md:py-8 pb-20 md:pb-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="space-y-2 md:space-y-3 col-span-1 sm:col-span-2 md:col-span-1">
              <img src={reaLogoTransparente} alt="R&A Logo" className="h-8 md:h-12 w-auto footer-logo" />
              <p className="text-green-100 text-xs leading-relaxed footer-description">
                Especializada em serviços elétricos com foco na segurança, qualidade e preservação ambiental.
              </p>
            </div>
            
            <div className="footer-services-section">
              <h4 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm">Serviços</h4>
              <ul className="space-y-1 text-xs text-green-100">
                <li>Supressão em Vegetação Manual</li>
                <li>Poda e Corte de Árvores</li>
                <li>Recuperação de Acesso em Vegetação</li>
                <li>Consertos de Porteiras</li>
              </ul>
            </div>
            
            <div className="footer-company-section">
              <h4 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm">Empresa</h4>
              <ul className="space-y-1 text-xs text-green-100">
                <li>10+ Anos de Experiência</li>
                <li>Empresa Amiga da Natureza</li>
                <li>Linhas de Transmissão</li>
                <li>Redes de Distribuição MT/BT</li>
              </ul>
            </div>
            
            <div className="footer-contact-section">
              <h4 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm">Contato</h4>
              <div className="flex flex-col gap-y-1 text-xs text-green-100">
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-2 flex-shrink-0" />
                  (27) 99874-6554
                </div>
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-2 flex-shrink-0" />
                  (27) 99984-0445
                </div>
                <div className="flex items-center">
                  <Mail className="w-3 h-3 mr-2 flex-shrink-0" />
                  rea@rea.srv.br
                </div>

                <div className="flex items-start w-full hidden md:flex">
                  <MapPin className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000</span>
                </div>
                <div className="flex items-start w-full hidden md:flex">
                  <MapPin className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">Av. Cerejeira, 9 andar, Sala 916<br />Torre I, Movelar<br />Linhares-ES, CEP 29906-014</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-600/30 mt-4 md:mt-6 pt-3 md:pt-4 text-center text-xs text-green-100">
            <p>© 2025 R&A Serviços e Manutenções Elétricas. Todos os direitos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
}

export default App

