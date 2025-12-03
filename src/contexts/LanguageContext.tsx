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

    // Websites Page
    'websites.hero.heading1': 'Wszystko, co Cyfrowe:',
    'websites.hero.heading2': 'W jednym miejscu.',
    'websites.hero.description': 'Nasze strony internetowe, aplikacje i sklepy są projektowane, aby generować mierzalne rezultaty. Stawiamy na intuicyjny User Experience (UX) i czysty kod, który maksymalizuje zyski.',
    'websites.hero.offer.0': 'Strony Internetowe',
    'websites.hero.offer.1': 'E-commerce',
    'websites.hero.offer.2': 'Aplikacje Webowe',
    'websites.hero.offer.3': 'SEO Techniczne',
    'websites.hero.offer.4': 'Automatyzacja',
    'websites.hero.offer.5': 'Wsparcie IT',
    'websites.process.step1.title': 'Rozmowa i Decyzja:',
    'websites.process.step1.description': 'Zaczynamy od dokładnej rozmowy na temat Twojego biznesu i celów. Ustalamy, jak najlepiej wykonać projekt (technologia, funkcjonalności) i dogrywamy wszystkie szczegóły.',
    'websites.process.step2.title': 'Planowanie i Rozpisanie Zadań:',
    'websites.process.step2.description': 'Cały projekt jest rozpisany na konkretne zadania w przejrzystej aplikacji, którą uzgodnimy wcześniej. Domyślnie używam ClickUp’a.',
    'websites.process.step3.title': 'Weryfikacja Postępów:',
    'websites.process.step3.description': 'Pokazuję Ci postępy na każdym etapie tworzenia na dedykowanym serwerze testowym. Dzięki temu masz pewność, że wszystko jest zgodne z Twoimi oczekiwaniami.',
    'websites.process.step4.title': 'Wdrożenie i Uruchomienie:',
    'websites.process.step4.description': 'Po Twojej akceptacji przenosimy gotową stronę na serwer docelowy, upewniając się, że wszystko działa płynnie i bezbłędnie.',
    'websites.case.title': 'Wykonanie:',
    'websites.caseOne.items.design': 'Design',
    'websites.caseOne.items.build': 'Stworzenie nowej strony od zera',
    'websites.caseOne.items.pixel': 'Implementacja Pixel FB',
    'websites.caseOne.items.support': 'Wsparcie i Poprawki',
    'websites.caseOne.items.hosting': 'Wdrożenie na hosting',
    'websites.case.pagespeed.title': 'Wyniki PageSpeed:',
    'websites.case.pagespeed.performance': 'Wydajność:',
    'websites.case.pagespeed.seo': 'SEO:',
    'websites.caseOne.imageAlt': 'Makieta strony Rezydencja',
    'websites.caseTwo.items.build': 'Stworzenie strony',
    'websites.caseTwo.items.woocommerce': 'Wdrożenie WooCommerce',
    'websites.caseTwo.items.elearning': 'Wdrożenie platformy e-learningowej LearnDash',
    'websites.caseTwo.items.newsletter': 'Newsletter',
    'websites.caseTwo.imageAlt': 'Makieta sklepu Agata',
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

    // Websites Page
    'websites.hero.heading1': 'Everything digital,',
    'websites.hero.heading2': 'All in one place.',
    'websites.hero.description': 'Our websites, apps and stores are designed to deliver measurable results. We focus on intuitive UX and clean code that maximizes profit.',
    'websites.hero.offer.0': 'Websites',
    'websites.hero.offer.1': 'E-commerce',
    'websites.hero.offer.2': 'Web Applications',
    'websites.hero.offer.3': 'Technical SEO',
    'websites.hero.offer.4': 'Automation',
    'websites.hero.offer.5': 'IT Support',
    'websites.process.step1.title': 'Discovery & Decisions',
    'websites.process.step1.description': 'We begin with an in-depth conversation about your business and goals. We define the best tech stack, features and finalize every detail.',
    'websites.process.step2.title': 'Planning & Task Breakdown',
    'websites.process.step2.description': 'The whole project is mapped into actionable tasks inside a transparent workspace. By default we organize everything in ClickUp.',
    'websites.process.step3.title': 'Progress Verification',
    'websites.process.step3.description': 'You see progress at every stage on a dedicated staging environment, so you always know things align with expectations.',
    'websites.process.step4.title': 'Implementation & Launch',
    'websites.process.step4.description': 'After your approval we move the finished site to the production server, ensuring everything runs smoothly and without errors.',
    'websites.case.title': 'Delivery',
    'websites.caseOne.items.design': 'Design',
    'websites.caseOne.items.build': 'Full website build from scratch',
    'websites.caseOne.items.pixel': 'Meta Pixel implementation',
    'websites.caseOne.items.support': 'Ongoing support & fixes',
    'websites.caseOne.items.hosting': 'Hosting deployment',
    'websites.case.pagespeed.title': 'PageSpeed results:',
    'websites.case.pagespeed.performance': 'Performance:',
    'websites.case.pagespeed.seo': 'SEO:',
    'websites.caseOne.imageAlt': 'Rezydencja website mockup',
    'websites.caseTwo.items.build': 'Website build',
    'websites.caseTwo.items.woocommerce': 'WooCommerce deployment',
    'websites.caseTwo.items.elearning': 'LearnDash e-learning setup',
    'websites.caseTwo.items.newsletter': 'Newsletter automation',
    'websites.caseTwo.imageAlt': 'Agata store mockup',
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