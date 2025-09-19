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
import povoacaoEnergiaLogo from './assets/povoacao_energia_logo.png'
import vegetationIntervention from './assets/vegetation_intervention_real.jpeg'
import electricalMaintenance from './assets/electrical_network_maintenance_real.jpeg'
import electricalSafety from './assets/electrical_safety_real.png'
import aboutSectionImage from './assets/about_section_image.jpg'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50"
    >
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={reaLogo} alt="R&A Logo" className="h-32 w-auto max-w-xs" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Serviços</a>
              <a href="#clients" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Clientes</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  <Leaf className="w-4 h-4 mr-1" />
                  Empresa Amiga da Natureza
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  R&A Serviços e 
                  <span className="text-orange-500"> Manutenções </span>
                  <span className="text-blue-600">Elétricas</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Especializada em prestação de serviços de intervenção em vegetação em linha de transmissão 
                  e redes de distribuição de MT/BT, oferecendo soluções seguras e sustentáveis para o setor elétrico.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Nossos Serviços
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2">
                  Saiba Mais
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600">Segurança</div>
                </div>

              </div>
            </div>
            <div className="relative">
              <img 
                src={vegetationIntervention} 
                alt="Intervenção em Vegetação" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Certificação ISO</div>
                    <div className="text-sm text-gray-600">Qualidade Garantida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Procurando sempre oferecer o melhor equilíbrio entre o meio ambiente e a interferência humana
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                  <Scissors className="w-10 h-10 text-orange-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Limpeza de Faixa de Servidão</CardTitle>
                <CardDescription className="text-lg">
                  Serviços especializados manuais para manutenção de faixas de servidão em linhas de transmissão e redes de distribuição
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-6">
                  <img 
                    src={vegetationIntervention} 
                    alt="Limpeza de Faixa de Servidão" 
                    className="w-full max-w-2xl h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="max-w-2xl mx-auto">
                  <h4 className="font-semibold text-lg mb-3 text-orange-600 text-center">Serviços Manuais Especializados</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      Limpeza de faixa de servidão manual
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      Reabertura de faixa de servidão manual
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      Poda e corte de árvore
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      Recuperação de estrada de acesso (corte de vegetação)
                    </li>
                  </ul>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-green-800">Compromisso Ambiental</h4>
                  <p className="text-sm text-green-700">
                    Todos os nossos serviços são realizados com foco na preservação ambiental, garantindo o equilíbrio entre a manutenção da infraestrutura elétrica e a proteção do meio ambiente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Serviços Complementares
            </h3>
            <p className="text-lg text-gray-600">
              Serviços adicionais especializados para infraestrutura elétrica
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Scissors className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="font-semibold text-gray-900">Reabertura de Faixa Manual</h4>
              </div>
              <p className="text-sm text-gray-600">Serviços manuais especializados de reabertura de faixas de servidão</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="font-semibold text-gray-900">Instalação de Colchetes</h4>
              </div>
              <p className="text-sm text-gray-600">Instalação especializada de sistemas de fixação</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900">Aterramento e Seccionamento</h4>
              </div>
              <p className="text-sm text-gray-600">Instalação de aterramento e seccionamento de cercas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <motion.section
        id="clients"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">
              Nossos Clientes
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Parcerias de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A confiança nos nossos serviços geraram parcerias de muito sucesso
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-8 items-center"
              animate={{ x: [-1200, 0] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={neoenergia} alt="Neoenergia" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={edpLogo} alt="EDP" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={santaMaria} alt="Santa Maria" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={linharesGeracao} alt="Linhares Geração" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={tropicaliaLogo} alt="Tropicalia Transmissora" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={povoacaoEnergiaLogo} alt="Povoacao Energia" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              {/* Duplicando para efeito contínuo */}
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={neoenergia} alt="Neoenergia" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={edpLogo} alt="EDP" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={santaMaria} alt="Santa Maria" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={linharesGeracao} alt="Linhares Geração" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={tropicaliaLogo} alt="Tropicalia Transmissora" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
                <img src={povoacaoEnergiaLogo} alt="Povoacao Energia" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-white"
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Estamos prontos para atender suas necessidades em serviços elétricos especializados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="opacity-90">(27) 99874-6554</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                <p className="opacity-90">rea@rea.srv.br</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p className="opacity-90">Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
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
              <img src={reaLogo} alt="R&A Logo" className="h-32 w-auto max-w-xs" />
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

