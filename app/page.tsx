'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Date de lancement (30 jours à partir de maintenant)
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const floatVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 relative overflow-hidden">
      <div className="wave-bg"></div>
      <div className="wave-bg-2"></div>
      
      <motion.div
        className="z-10 w-full max-w-5xl flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={floatVariants}
          animate={{ 
            y: [0, -10, 0],
            transition: { 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          className="mb-6 md:mb-8"
        >
          <div className="">
            {/* <div className="logo-placeholder w-[130px] h-[130px] md:w-[170px] md:h-[170px]">
              Fondation<br />Soeurs<br />de Femme
            </div> */}
            <Image
              src="https://res.cloudinary.com/dblzafklq/image/upload/v1740729362/pb1a18wpkp7n5so6qy83.png"
              alt="fsf logo"
              width={100}
              height={100}
              className=""
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 md:mb-10">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">Fondation Soeurs de Femme</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Notre nouveau site est en cours de développement pour mieux servir notre mission.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="animated-border p-4 md:p-8 bg-white/90 backdrop-blur-sm shadow-xl mb-8 md:mb-12 w-full max-w-3xl"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-primary-blue">Lancement prévu dans</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { label: 'Jours', value: countdown.days },
              { label: 'Heures', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Secondes', value: countdown.seconds }
            ].map((item) => (
              <div key={item.label} className="countdown-item flex-1 min-w-[80px] md:min-w-[100px]">
                <div className="text-2xl md:text-5xl font-bold text-primary-blue mb-1 md:mb-2">
                  {item.value}
                </div>
                <div className="text-xs md:text-base text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* <motion.div variants={itemVariants} className="mb-8 md:mb-10 w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-primary-blue">Restez informé</h2>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
              Recevez une notification dès que notre site sera en ligne.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent flex-grow text-sm md:text-base"
              />
              <button className="btn-primary px-4 md:px-6 py-2 md:py-3 rounded-md font-medium text-sm md:text-base">
                M&apos;avertir
              </button>
            </div>
          </div>
        </motion.div> */}

        <motion.div variants={itemVariants} className="mb-8 md:mb-10 w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-primary-blue">Contactez-nous</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue mt-1">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="text-sm md:text-base font-medium">Téléphone</p>
                  <p className="text-sm text-gray-600">+243 829 824 946</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue mt-1">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="text-sm md:text-base font-medium">Téléphone</p>
                  <p className="text-sm text-gray-600">+33 7 58 55 94 32</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue mt-1">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <p className="text-sm md:text-base font-medium">Email</p>
                  <p className="text-sm text-gray-600">contact@fsf.cd</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-sm md:text-base font-medium">Adresse</p>
                  <p className="text-sm text-gray-600">
                    Avenue Kimpoko numéro 18 Quartier Masiala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-primary-blue">Suivez-nous</h3>
          <div className="flex space-x-6 md:space-x-8 mt-2 mb-10 md:mb-5">
            {[
              { name: 'Facebook', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              ) },
              { name: 'Instagram', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              ) },
              { name: 'Twitter', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              ) }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="social-icon flex flex-col items-center text-gray-600 hover:text-primary-blue transition-colors"
              >
                <span className="mb-1 md:mb-2">{social.icon}</span>
                <span className="text-xs md:text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-4 md:bottom-4 text-center text-xs md:text-sm text-gray-600 z-10">
        © {new Date().getFullYear()} Fondation Soeurs de Femme. Tous droits réservés.
      </div>
    </main>
  )
}