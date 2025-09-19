import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Shield, Zap, Users, Award, CheckCircle, Scissors, TreePine, Wrench, HardHat, Leaf } from 'lucide-react'
import './App.css'

// Import das imagens
import reaLogo from './assets/rea_logo_transparent_final.png'
import neoenergia from './assets/neoenergia_logo_new_transparent.png'
import edpLogo from './assets/edp_logo_improved.png'
import santaMaria from './assets/santa_maria_logo_new_transparent.png'
import linharesGeracao from './assets/linhares_geracao_logo_new_transparent.png'
import tropicaliaLogo from './assets/tropicalia_logo_official.png'
import enevaLogo from './assets/eneva_logo.png'
import coelbaLogo from './assets/coelba_logo.png'
import vegetationIntervention from './assets/vegetation_intervention_real.jpeg'
import electricalMaintenance from './assets/electrical_network_maintenance_real.jpeg'
import electricalSafety from './assets/electrical_safety_real.png'
import aboutSectionImage from './assets/about_section_image.jpg'

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
                  src={reaLogo} 
                  alt="R&A Logo" 
                  className="h-20 w-auto transition-transform duration-300 hover:scale-105" 
                  variants={scaleIn}
                />
                <motion.div 
                  className="hidden md:flex items-center space-x-4 text-sm text-gray-600"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="flex items-center space-x-1 hover:text-green-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Empresa Amiga da Natureza</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Certificação ISO</span>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div 
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <div className="hidden md:block text-right text-sm">
                  <div className="text-gray-600">Atendimento</div>
                  <div className="font-semibold text-gray-900">(27) 99999-9999</div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-opacity duration-200 shadow-lg hover:shadow-xl">
                    <Phone className="w-4 h-4 mr-2" />
                    Contato
                  </Button>
                </motion.div>
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
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-opacity duration-200">
                    <Leaf className="w-4 h-4 mr-1" />
                    Empresa Amiga da Natureza
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  R&A Serviços e 
                  <motion.span 
                    className="text-orange-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  > Manutenções </motion.span>
                  <motion.span 
                    className="text-blue-600"
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
              <motion.div 
                className="flex flex-col items-center space-y-6"
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                    Nossos Serviços
                  </Button>
                </motion.div>
                
                <motion.div 
                  className="text-center group"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-blue-600 transition-transform duration-200"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                  >15+</motion.div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </motion.div>
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
              <motion.img 
                src={vegetationIntervention} 
                alt="Intervenção em Vegetação" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Shield className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900">Certificação ISO</div>
                    <div className="text-sm text-gray-600">Qualidade Garantida</div>
                  </div>
                </div>
              </motion.div>
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
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={scaleIn}>
              <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white mb-4 px-6 py-2 hover:scale-105 transition-transform duration-200">
                Nossos Serviços
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6"
              variants={fadeInUp}
            >
              Serviços Especializados
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Soluções sustentáveis e especializadas para o setor elétrico, sempre priorizando o equilíbrio ambiental
            </motion.p>
          </motion.div>
          
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
                src={vegetationIntervention} 
                alt="Limpeza de Faixa de Servidão" 
                className="w-full h-96 object-cover"
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
                    className="text-4xl font-bold mb-4"
                    variants={fadeInUp}
                  >
                    Limpeza de Faixa de Servidão
                  </motion.h3>
                  <motion.p 
                    className="text-xl opacity-90 max-w-2xl"
                    variants={fadeInUp}
                  >
                    Serviços manuais especializados para manutenção de linhas de transmissão e redes de distribuição
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
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group "
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
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors">Limpeza Manual</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Remoção manual de vegetação em faixas de servidão</p>
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
                <Scissors className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Reabertura Manual</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Reabertura especializada de faixas de servidão</p>
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
                <TreePine className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">Poda Técnica</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Poda e corte especializado de árvores</p>
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
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">Recuperação</h4>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Recuperação de acessos a linhas de transmissão</p>
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
              <Badge className="bg-orange-100 text-orange-800 mb-4 hover:bg-orange-200 transition-opacity duration-200">
                Nossos Clientes
              </Badge>
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
                <img src={neoenergia} alt="Neoenergia" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
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
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={enevaLogo} alt="Eneva" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
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
                <img src={coelbaLogo} alt="Coelba" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
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
                <img src={neoenergia} alt="Neoenergia" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
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
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={enevaLogo} alt="Eneva" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
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
                <img src={coelbaLogo} alt="Coelba" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
              </motion.div>
              
              {/* Terceira série para transição imperceptível */}
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={neoenergia} alt="Neoenergia" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
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
              
              <motion.div 
                className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm min-w-[240px] h-32 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img src={enevaLogo} alt="Eneva" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
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
                <img src={coelbaLogo} alt="Coelba" className="max-h-20 max-w-[200px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200 " />
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-4">
                  Nossa Empresa
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  R&A Serviços e Manutenções Elétricas
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A <strong>R&A SERVIÇOS E MANUTENÇÕES ELÉTRICAS</strong>, com sede em Sooretama/ES, é uma empresa especializada em prestação de serviços de intervenção em vegetação em linha de transmissão e redes de distribuição de MT/BT.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A intervenção em vegetação é uma manutenção necessária, sem prejuízos ao meio ambiente, para que não haja risco de interrupção no fornecimento de energia quando ocorrem chuvas e ventos fortes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Temos por objetivo oferecer toda a qualidade que os nossos clientes precisam, contando com uma equipe profissional que se empenha para inovar e crescer, com cursos específicos em Segurança, Meio Ambiente e Saúde do Trabalho garantindo a satisfação de nossos clientes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6 border-0 shadow-lg">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Missão</h3>
                  <p className="text-sm text-gray-600">Prover excelência em nossos serviços, com agilidade, confiabilidade e inovação.</p>
                </Card>
                
                <Card className="text-center p-6 border-0 shadow-lg">
                  <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Visão</h3>
                  <p className="text-sm text-gray-600">Ser uma empresa de referência, reconhecida pelos clientes, colaboradores, comunidade e fornecedores, pela qualidade de nossos serviços.</p>
                </Card>
                
                <Card className="text-center p-6 border-0 shadow-lg">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Valores</h3>
                  <p className="text-sm text-gray-600">Ética, Respeito, Profissionalismo, Transparência, Espírito de equipe, Humildade, Responsabilidade e Sustentabilidade.</p>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aboutSectionImage} 
                alt="Nossa Equipe" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-white text-blue-600 p-6 rounded-xl shadow-lg border border-blue-600">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Anos de Experiência</div>
                </div>
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
              <Badge className="bg-green-100 text-green-800 mb-4 hover:bg-green-200 transition-all duration-200">
                Entre em Contato
              </Badge>
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
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <Mail className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
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
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={reaLogo} alt="R&A Logo" className="h-16 w-auto" />
              <p className="text-gray-400 text-sm">
                Especializada em serviços elétricos com foco na segurança, qualidade e preservação ambiental.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Intervenção em Vegetação</li>
                <li>Manutenção de Redes MT/BT</li>
                <li>Segurança e Treinamento</li>
                <li>Consultoria Técnica</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sobre Nós</li>
                <li>Nossa Equipe</li>
                <li>Certificações</li>
                <li>Sustentabilidade</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (27) 99874-6554
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  rea@rea.srv.br
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  roberto@rea.srv.br
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span>Rua Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 R&A Serviços e Manutenções Elétricas. Todos os direitos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
}

export default App

