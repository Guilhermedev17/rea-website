import React from 'react'
import { motion } from 'framer-motion'
import { X, MessageCircle, Mail } from 'lucide-react'

// Componente de Menu Mobile no estilo da Eneva
function MobileMenuEneva({ isOpen, toggleMenu, logo, menuItems = [] }) {

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
        className={`fixed top-0 right-0 z-50 w-full h-screen max-h-screen shadow-2xl overflow-hidden flex flex-col md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        style={{ height: '100vh', maxHeight: '100vh' }}
      >
        {/* Background - Cor clara */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Header do Menu */}
        <div className="relative flex flex-col items-center justify-center p-4 pb-2 border-b border-gray-200">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors touch-manipulation z-10"
            aria-label="Fechar menu"
          >
            <X className="w-7 h-7 text-gray-700" />
          </button>
          {logo && (
            <img src={logo} alt="Logo" className="h-10 w-auto mb-2" />
          )}
          <h2 className="text-lg font-semibold text-gray-700 uppercase tracking-wide">Menu Principal</h2>
        </div>
        
        {/* Menu Items - Estilo Eneva */}
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
          <nav className="space-y-0" role="navigation">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id || index}
                className="border-b border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ delay: isOpen ? 0.1 * index : 0, duration: 0.3 }}
              >
                <button
                  onClick={() => {
                    toggleMenu()
                    if (item.onClick) {
                      setTimeout(() => item.onClick(), 300)
                    }
                  }}
                  className="flex items-center justify-between w-full text-left p-4 text-gray-800 hover:bg-gray-100 transition-all duration-200 font-medium focus:outline-none focus:bg-gray-100 touch-manipulation"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg font-semibold uppercase tracking-wide">
                    {item.label}
                  </span>
                </button>
              </motion.div>
            ))}
           </nav>
          
          {/* Action Buttons */}
          <div className="relative p-4 space-y-3 flex-shrink-0">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/27998746554"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent touch-manipulation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: isOpen ? 0.6 : 0, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="ml-2">WhatsApp</span>
            </motion.a>
            
            {/* Webmail Link */}
            <motion.a
              href="https://webmail.rea.srv.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-transparent touch-manipulation border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: isOpen ? 0.7 : 0, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              <span className="ml-2">Webmail</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default MobileMenuEneva

