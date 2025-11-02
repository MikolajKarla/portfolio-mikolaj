'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'pl' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pl: {
    // Navigation
    'nav.about': 'O nas',
    'nav.services': 'Strony Internetowe',
    'nav.portfolio': 'Case Studies',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.greeting': 'Cześć, jesteśmy',
    'hero.title': 'KFreelance',
    'hero.subtitle': 'Agencja Cyfrowa',
    'hero.description': 'Tworzymy nowoczesne strony internetowe, aplikacje webowe i automatyzujemy procesy biznesowe dla Twojej firmy.',
    'hero.cta.primary': 'Bezpłatna konsultacja',
    'hero.cta.secondary': 'Zobacz nasze usługi',
    
    // About Section
    'about.badge': 'O nas',
    'about.title': 'Dlaczego warto wybrać KFreelance?',
    'about.description': 'Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem w tworzeniu rozwiązań cyfrowych. Pomagamy firmom rozwijać się w internecie poprzez profesjonalne strony internetowe, funkcjonalne aplikacje webowe i inteligentne automatyzacje procesów biznesowych.',
    
    // Services Section
    'services.badge': 'Nasze Usługi',
    'services.title': 'Co oferujemy',
    'services.description': 'Specjalizujemy się w tworzeniu stron internetowych, aplikacji webowych i automatyzacji procesów biznesowych',
    'services.websites.title': 'Strony Internetowe',
    'services.websites.description': 'Responsywne strony internetowe dostosowane do Twoich potrzeb biznesowych',
    'services.webapps.title': 'Aplikacje Webowe',
    'services.webapps.description': 'Zaawansowane aplikacje webowe z nowoczesnym interfejsem użytkownika',
    'services.automation.title': 'Automatyzacje',
    'services.automation.description': 'Automatyzacja procesów biznesowych i integracje systemów',
    
    // Company Info
    'company.name': 'KFreelance',
    'company.type': 'Agencja Cyfrowa',
    'company.badge': 'Profesjonalne rozwiązania',
    
    // CTA Section
    'cta.title': 'Gotowy na rozwój swojego biznesu?',
    'cta.description': 'Skontaktuj się z nami i omówmy, jak możemy pomóc Twojej firmie',
    'cta.contact': 'Skontaktuj się z nami',
    'cta.portfolio': 'Zobacz nasze projekty',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Websites & Services',
    'nav.portfolio': 'Case Studies',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, we are',
    'hero.title': 'KFreelance',
    'hero.subtitle': 'Digital Agency',
    'hero.description': 'We create modern websites, web applications and automate business processes for your company.',
    'hero.cta.primary': 'Free Consultation',
    'hero.cta.secondary': 'See our services',
    
    // About Section
    'about.badge': 'About us',
    'about.title': 'Why choose KFreelance?',
    'about.description': 'We are a team of specialists with years of experience in creating digital solutions. We help companies grow online through professional websites, functional web applications and intelligent business process automation.',
    
    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'What we offer',
    'services.description': 'We specialize in creating websites, web applications and business process automation',
    'services.websites.title': 'Websites',
    'services.websites.description': 'Responsive websites tailored to your business needs',
    'services.webapps.title': 'Web Applications',
    'services.webapps.description': 'Advanced web applications with modern user interface',
    'services.automation.title': 'Automation',
    'services.automation.description': 'Business process automation and system integrations',
    
    // Company Info
    'company.name': 'KFreelance',
    'company.type': 'Digital Agency',
    'company.badge': 'Professional solutions',
    
    // CTA Section
    'cta.title': 'Ready to grow your business?',
    'cta.description': 'Contact us and let\'s discuss how we can help your company',
    'cta.contact': 'Contact us',
    'cta.portfolio': 'View our projects',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Only run on client side
    if (typeof window === 'undefined') return 'pl'
    
    // Check if user has manually set language before (localStorage)
    const savedLanguage = localStorage.getItem('preferred-language') as Language | null
    if (savedLanguage && (savedLanguage === 'pl' || savedLanguage === 'en')) {
      return savedLanguage
    }
    
    // Auto-detect from browser
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('pl')) {
      return 'pl'
    }
    // Default to English for all other languages
    return 'en'
  })

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    // Save user preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pl']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}