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
    'hero.title': 'KM-Designs',
    'hero.subtitle': 'Agencja Cyfrowa',
    'hero.description': 'Tworzymy nowoczesne strony internetowe, aplikacje webowe i automatyzujemy procesy biznesowe dla Twojej firmy.',
    'hero.cta.primary': 'Bezpłatna konsultacja',
    'hero.cta.secondary': 'Zobacz nasze usługi',
    
    // About Section
    'about.badge': 'O nas',
    'about.title': 'Dlaczego warto wybrać KM-Designs?',
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
    'company.name': 'KM-Designs',
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

    // Privacy Policy
    'privacy.note.important': 'Ważna uwaga:',
    'privacy.note.body': 'Poniższy dokument jest jedynie wzorem przygotowanym na podstawie podanych informacji. Aby mieć pewność, że w pełni spełnia wymogi prawne (w tym RODO/GDPR) i odpowiada specyfice Twojej działalności,',
    'privacy.note.consult': 'skonsultuj go z prawnikiem.',
    'privacy.updated': 'Aktualizacja: grudzień 2025',
    'privacy.title': 'Polityka Prywatności strony km-designs.pl',
    'privacy.admin': 'Administrator: Mikołaj Karla, Bielsko-Biała, ul. Koszykowa 4',
    'privacy.contact.emailLabel': 'E-mail:',
    'privacy.contact.phoneLabel': 'Telefon:',
    'privacy.contact.siteLabel': 'Serwis:',
    'privacy.section1.title': '1. Informacje ogólne',
    'privacy.section1.body': 'Administratorem danych osobowych jest Mikołaj Karla prowadzący stronę https://km-designs.pl/. Można się z nim skontaktować pod adresem e-mail contact@km-designs.pl lub telefonicznie pod numerem +48 731 866 536.',
    'privacy.section2.title': '2. Cele i podstawy przetwarzania danych',
    'privacy.section2.description': 'Twoje dane osobowe są przetwarzane w poniższych celach wraz z odpowiadającymi im podstawami prawnymi RODO.',
    'privacy.table.header.purpose': 'Cel przetwarzania',
    'privacy.table.header.scope': 'Zakres danych',
    'privacy.table.header.legal': 'Podstawa prawna',
    'privacy.table.header.retention': 'Okres przechowywania',
    'privacy.section3.title': '3. Prawa osób, których dane dotyczą',
    'privacy.section3.description': 'Masz prawo do:',
    'privacy.section4.title': '4. Odbiorcy danych',
    'privacy.section4.description': 'Twoje dane mogą trafiać do podmiotów wspierających działanie serwisu:',
    'privacy.section5.title': '5. Pliki cookies (ciasteczka)',
    'privacy.section5.description': 'Serwis wykorzystuje cookies w następujących celach:',
    'privacy.section5.browserInfo': 'Możesz zarządzać plikami cookies w ustawieniach swojej przeglądarki. Ograniczenie ich użycia może jednak wpłynąć na działanie serwisu.',
    'privacy.section6.title': '6. Postanowienia końcowe',
    'privacy.section6.description': 'Administrator zastrzega sobie prawo do zmian w niniejszej polityce. Aktualna wersja jest zawsze dostępna na stronie.',
    'privacy.processing.contact.purpose': 'Obsługa formularza kontaktowego',
    'privacy.processing.contact.scope': 'Imię, adres e-mail, treść wiadomości, ewentualnie numer telefonu.',
    'privacy.processing.contact.legal': 'Art. 6 ust. 1 lit. f) RODO – prawnie uzasadniony interes polegający na komunikacji z użytkownikami.',
    'privacy.processing.contact.retention': 'Przez czas niezbędny do obsługi zapytania, a następnie okres wynikający z przepisów prawa lub do momentu sprzeciwu.',
    'privacy.processing.newsletter.purpose': 'Prowadzenie newslettera',
    'privacy.processing.newsletter.scope': 'Adres e-mail.',
    'privacy.processing.newsletter.legal': 'Art. 6 ust. 1 lit. a) RODO – dobrowolna zgoda na otrzymywanie treści marketingowych.',
    'privacy.processing.newsletter.retention': 'Do momentu wycofania zgody na jego otrzymywanie.',
    'privacy.processing.analytics.purpose': 'Analiza i statystyka',
    'privacy.processing.analytics.scope': 'Adres IP, data i czas wizyty, dane o urządzeniu i systemie (z cookies).',
    'privacy.processing.analytics.legal': 'Art. 6 ust. 1 lit. f) RODO – uzasadniony interes polegający na ulepszaniu serwisu.',
    'privacy.processing.analytics.retention': 'Przez czas określony w ustawieniach plików cookies.',
    'privacy.rights.access': 'dostępu do swoich danych i otrzymania ich kopii',
    'privacy.rights.rectification': 'sprostowania (poprawienia) danych',
    'privacy.rights.erasure': 'usunięcia danych („prawo do bycia zapomnianym”), jeśli jest to uzasadnione',
    'privacy.rights.restriction': 'ograniczenia przetwarzania danych',
    'privacy.rights.portability': 'przenoszenia danych',
    'privacy.rights.objection': 'wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie',
    'privacy.rights.withdraw': 'wycofania zgody w dowolnym momencie (np. newsletter) bez wpływu na legalność wcześniejszego przetwarzania',
    'privacy.rights.complaint': 'wniesienia skargi do Prezesa UODO, jeśli uznasz, że przetwarzanie narusza przepisy',
    'privacy.recipients.hosting': 'Firmom hostingowym świadczącym usługi serwerowe',
    'privacy.recipients.analytics': 'Dostawcom narzędzi analitycznych (np. Google Analytics)',
    'privacy.recipients.newsletter': 'Dostawcom systemów mailingowych wykorzystywanych do newslettera',
    'privacy.cookies.essential': 'Zapewnienia prawidłowego działania strony (cookies niezbędne).',
    'privacy.cookies.functional': 'Zapamiętania preferencji dotyczących układu, języka itp. (cookies funkcjonalne).',
    'privacy.cookies.analytics': 'Prowadzenia anonimowych statystyk, które pomagają ulepszać serwis (cookies analityczne).',

    // Footer
    'footer.contact.headingQuestion': 'Masz pytanie?',
    'footer.contact.headingDiscuss': 'Chcesz omówić szczegóły?',
    'footer.nav.heading': 'Przejdź do:',
    'footer.nav.about': 'O mnie',
    'footer.policy.heading': 'Polityka:',
    'footer.policy.privacy': 'Polityka Prywatności',
    'footer.policy.cookies': 'Cookies',
    'footer.tagline': 'Realizujemy projekty dopasowane do Twoich potrzeb.',

    // Home Page
    'home.hero.title': 'Nowoczesne aplikacje, sklepy i strony internetowe dla Twojego biznesu.',
    'home.hero.subtitle': 'Budujemy cyfrowe narzędzia, które faktycznie realizują Twoje cele biznesowe. Stawiam na nowoczesny design i czysty kod.',
    'home.hero.cta.primary': 'Omówmy Twój projekt',
    'home.hero.cta.secondary': 'Zobacz Case Studies',
    'home.hero.imageAlt': 'Zdjęcie zespołu KM-Design',
    'home.whatWeDo.heading': 'Czym się zajmujemy?',
    'home.sections.design.title': 'Strategic Design (UI/UX)',
    'home.sections.design.body': 'Tworzę nowoczesne i intuicyjne projekty graficzne. Strona musi wyglądać świetnie, ale przede wszystkim ma być prosta w obsłudze i skutecznie prowadzić klienta do celu.',
    'home.sections.design.imageAlt': 'Projekt interfejsu internetowego',
    'home.sections.build.title': 'Strony, Aplikacje, Sklepy',
    'home.sections.build.body': 'Realizuję szeroki zakres projektów: od szybkich stron WordPress, przez zaawansowane aplikacje internetowe, po wydajne sklepy e-commerce.',
    'home.sections.build.imageAlt': 'Ilustracja stron i aplikacji',
    'home.sections.seo.title': 'SEO Techniczne',
    'home.sections.seo.body': 'Dbam o to, aby projekt był od podstaw zoptymalizowany pod wyszukiwarki. Czysty kod, szybkie ładowanie i struktura przyjazna Google to baza pod dalsze działania marketingowe.',
    'home.sections.seo.imageAlt': 'Graficzne przedstawienie SEO',
    'home.sections.support.title': 'Wsparcie i poprawki',
    'home.sections.support.body': 'Potrzebujesz szybkich poprawek lub nowej funkcjonalności? Pomagam utrzymać i rozwijać Twój cyfrowy projekt.',
    'home.sections.support.imageAlt': 'Zespół wspierający wdrożenia',
    'home.cta.heading': 'Rozpocznij współpracę, która wpłynie na wzrost Twojego biznesu.',
    'home.cta.body': 'Umów bezpłatną konsultację i dowiedz się, jak zmieniam koncepcje w mierzalne wyniki i przewagę rynkową.',
    'home.cta.button': 'Omów konsultację',
    'home.faq.badge': 'Przeczytaj najczęstsze pytania',
    'home.faq.heading': 'Masz obawy przed zaczęciem współpracy?',
    'home.faq.body': 'To normalne. Zebraliśmy i wyczerpująco odpowiedzieliśmy na pytania, które pojawiają się przed nową inwestycją cyfrową.',
    'home.faq.body2': 'Nasza współpraca opiera się na pełnej transparentności.',
    'home.faq.item': 'Gwarancję i wsparcie strony',
    'home.faq.item-1.question': 'Jak wygląda rozliczenie za projekt?',
    'home.faq.item-2.question': 'Ile czasu zajmuje stworzenie strony/projektu?',
    'home.faq.item-3.question': 'Czy będę mógł sam edytować treści na stronie?',
    'home.faq.item-4.question': 'Co dzieje się po zakończeniu projektu? Czy zapewniacie wsparcie?',
    'home.faq.item-5.question': 'Co jeśli wstępna wizja mi się nie spodoba?',
    'home.faq.item-1.answer': 'Stawiamy na jasne zasady. Wycena jest zawsze przygotowywana indywidualnie przed rozpoczęciem prac (Fixed Price) lub rozliczamy się godzinowo (Time & Material) przy stałej obsłudze. Nie zaskoczymy Cię ukrytymi kosztami.',
    'home.faq.item-2.answer': 'Standardowy projekt wizytówki to około 2-3 tygodnie. Rozbudowane serwisy i sklepy zajmują zazwyczaj od 4 do 8 tygodni. Dokładny harmonogram otrzymasz zawsze wraz z umową.',
    'home.faq.item-3.answer': 'Tak. Tworzymy strony w oparciu o intuicyjne systemy (CMS), które pozwalają na łatwą edycję tekstów i zdjęć bez wiedzy programistycznej. Po wdrożeniu przeprowadzimy dla Ciebie krótkie szkolenie.',
    'home.faq.item-4.answer': 'Nie zostawiamy Cię samego. Oferujemy miesięczne pakiety opieki technicznej lub doraźną pomoc w razie awarii. Na wykonaną stronę udzielamy również gwarancji technicznej.',
    'home.faq.item-5.answer': 'Pracujemy etapami, abyś miał pełną kontrolę nad procesem. Najpierw przygotowujemy projekt graficzny (makietę), który omawiamy i dopieszczamy. Dopiero po Twojej pełnej akceptacji wizualnej przystępujemy do programowania. Dzięki temu masz pewność, że finalna strona będzie wyglądać dokładnie tak, jak tego oczekujesz.',


    // Contact Page
    'contact.process.badge': 'Proces',
    'contact.process.title': 'Jak zaczynamy współpracę',
    'contact.process.description': 'Przejdziemy przez kluczowe etapy, żeby przygotować strategię i harmonogram dopasowany do Twoich celów.',
    'contact.process.items.consult.title': 'Konsultacja 30 min',
    'contact.process.items.consult.description': 'Pierwsza rozmowa online, żeby poznać cele i zakres projektu.',
    'contact.process.items.discovery.title': 'Warsztat discovery',
    'contact.process.items.discovery.description': 'Wspólnie doprecyzujemy funkcje, strategię i harmonogram działań.',
    'contact.process.items.meeting.title': 'Spotkanie na żywo',
    'contact.process.items.meeting.description': 'Możemy spotkać się w Warszawie, jeśli preferujesz rozmowę offline.',
    'contact.faq.badge': 'FAQ',
    'contact.faq.title': 'Najczęstsze pytania',
    'contact.faq.description': 'Krótko i konkretnie o tym, jak przebiega współpraca.',
    'contact.faq.q1': 'Jak długo trwa realizacja projektu?',
    'contact.faq.a1': 'Landing page do 2 tygodni, sklepy i aplikacje 4–8 tygodni, rozbudowane systemy 2–4 miesiące – wszystko zależy od zakresu.',
    'contact.faq.q2': 'Czy mogę liczyć na wsparcie po wdrożeniu?',
    'contact.faq.a2': 'Tak, w cenie masz 30 dni wsparcia oraz możliwość rozszerzenia o pakiety maintenance.',
    'contact.faq.q3': 'Jak wygląda start współpracy?',
    'contact.faq.a3': 'Zaczynamy od konsultacji i warsztatu discovery, aby zebrać wymagania i stworzyć roadmapę działań.',
    'contact.social.badge': 'Social Media',
    'contact.social.title': 'Znajdź mnie w sieci',
    'contact.social.description': 'Publikuję aktualizacje projektowe i wskazówki dla przedsiębiorców.',
    'contact.form.badge': 'Kontakt',
    'contact.form.title': 'Porozmawiajmy o Twoim projekcie',
    'contact.form.description': 'Wypełnij formularz, a odezwę się maksymalnie w ciągu 24 godzin z propozycją kolejnych kroków.',
    'contact.form.dataSafety': 'Twoje dane są bezpieczne – użyjemy ich wyłącznie do kontaktu związanego z zapytaniem.',
    'contact.form.name.label': 'Imię i nazwisko',
    'contact.form.name.placeholder': 'Jak się nazywasz?',
    'contact.form.email.label': 'Adres e-mail',
    'contact.form.email.placeholder': 'Napisz swój e-mail',
    'contact.form.company.label': 'Firma (opcjonalnie)',
    'contact.form.company.placeholder': 'Nazwa firmy lub projektu',
    'contact.form.message.label': 'Opisz swoje potrzeby',
    'contact.form.message.placeholder': 'Opisz krótko projekt, zakres prac lub oczekiwany termin.',
    'contact.form.consent': 'Klikając wyślij, potwierdzasz zgodę na kontakt i przetwarzanie danych zgodnie z polityką prywatności.',
    'contact.form.submit': 'Wyślij wiadomość',
    'contact.form.alert.success': 'Wiadomość została wysłana pomyślnie!',
    'contact.form.alert.unknownError': 'Wystąpił nieznany błąd podczas wysyłania wiadomości.',
    'contact.form.alert.errorPrefix': 'Błąd podczas wysyłania wiadomości:',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Websites & Services',
    'nav.portfolio': 'Case Studies',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, we are',
    'hero.title': 'KM-Designs',
    'hero.subtitle': 'Digital Agency',
    'hero.description': 'We create modern websites, web applications and automate business processes for your company.',
    'hero.cta.primary': 'Free Consultation',
    'hero.cta.secondary': 'See our services',
    
    // About Section
    'about.badge': 'About us',
    'about.title': 'Why choose KM-Designs?',
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
    'company.name': 'KM-Designs',
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

    // Privacy Policy
    'privacy.note.important': 'Important note:',
    'privacy.note.body': 'This document is only a template prepared from the provided information. To make sure it fully complies with legal requirements (including GDPR) and reflects the specifics of your business,',
    'privacy.note.consult': 'consult it with a lawyer.',
    'privacy.updated': 'Updated: December 2025',
    'privacy.title': 'Privacy Policy for km-designs.pl',
    'privacy.admin': 'Controller: Mikołaj Karla, Bielsko-Biała, ul. Koszykowa 4',
    'privacy.contact.emailLabel': 'Email:',
    'privacy.contact.phoneLabel': 'Phone:',
    'privacy.contact.siteLabel': 'Website:',
    'privacy.section1.title': '1. General Information',
    'privacy.section1.body': 'The data controller is Mikołaj Karla, owner of https://km-designs.pl/. You can contact him via contact@km-designs.pl or by phone at +48 731 866 536.',
    'privacy.section2.title': '2. Purposes and legal bases of processing',
    'privacy.section2.description': 'Your personal data is processed for the purposes listed below together with their respective GDPR legal bases.',
    'privacy.table.header.purpose': 'Purpose of processing',
    'privacy.table.header.scope': 'Data scope',
    'privacy.table.header.legal': 'Legal basis',
    'privacy.table.header.retention': 'Retention period',
    'privacy.section3.title': '3. Data subject rights',
    'privacy.section3.description': 'You have the right to:',
    'privacy.section4.title': '4. Data recipients',
    'privacy.section4.description': 'Your data may be shared with service providers that support the website:',
    'privacy.section5.title': '5. Cookies',
    'privacy.section5.description': 'The website uses cookies for the following purposes:',
    'privacy.section5.browserInfo': 'You can manage cookies in your browser settings, though restricting them may impact the website experience.',
    'privacy.section6.title': '6. Final provisions',
    'privacy.section6.description': 'The Administrator reserves the right to update this policy. The current version is always available on the website.',
    'privacy.processing.contact.purpose': 'Handling the contact form',
    'privacy.processing.contact.scope': 'Name, email address, message content, optionally phone number.',
    'privacy.processing.contact.legal': 'Art. 6(1)(f) GDPR – legitimate interest consisting of communicating with users.',
    'privacy.processing.contact.retention': 'For the time needed to answer the inquiry and then as required by law or until an objection is raised.',
    'privacy.processing.newsletter.purpose': 'Running the newsletter',
    'privacy.processing.newsletter.scope': 'Email address.',
    'privacy.processing.newsletter.legal': 'Art. 6(1)(a) GDPR – your voluntary consent to receive marketing content.',
    'privacy.processing.newsletter.retention': 'Until you withdraw your consent.',
    'privacy.processing.analytics.purpose': 'Analytics and statistics',
    'privacy.processing.analytics.scope': 'IP address, visit date and time, device and system data (from cookies).',
    'privacy.processing.analytics.legal': 'Art. 6(1)(f) GDPR – legitimate interest of improving the service.',
    'privacy.processing.analytics.retention': 'For the duration defined in the cookie settings.',
    'privacy.rights.access': 'access your data and receive a copy of it',
    'privacy.rights.rectification': 'rectify (correct) your data',
    'privacy.rights.erasure': 'erase your data (“right to be forgotten”) where justified',
    'privacy.rights.restriction': 'restrict processing of your data',
    'privacy.rights.portability': 'transfer your data',
    'privacy.rights.objection': 'object to processing based on legitimate interest',
    'privacy.rights.withdraw': 'withdraw consent at any time (e.g., newsletter) without affecting prior lawful processing',
    'privacy.rights.complaint': 'lodge a complaint with the Polish Data Protection Authority if you believe processing violates the law',
    'privacy.recipients.hosting': 'Hosting companies providing server infrastructure',
    'privacy.recipients.analytics': 'Analytics providers (e.g., Google Analytics)',
    'privacy.recipients.newsletter': 'Newsletter platforms used to send mailings',
    'privacy.cookies.essential': 'Ensure the website functions properly (essential cookies).',
    'privacy.cookies.functional': 'Remember layout/language preferences (functional cookies).',
    'privacy.cookies.analytics': 'Provide anonymous statistics that help improve the service (analytics cookies).',

    // Footer
    'footer.contact.headingQuestion': 'Have a question?',
    'footer.contact.headingDiscuss': 'Want to discuss details?',
    'footer.nav.heading': 'Navigate to:',
    'footer.nav.about': 'About me',
    'footer.policy.heading': 'Policy:',
    'footer.policy.privacy': 'Privacy Policy',
    'footer.policy.cookies': 'Cookies',
    'footer.tagline': 'We deliver projects tailored to your needs.',

    // Home Page
    'home.hero.title': 'Modern apps, stores and websites for your business.',
    'home.hero.subtitle': 'We build digital tools that truly deliver your business goals. I focus on modern design and clean code.',
    'home.hero.cta.primary': 'Let’s discuss your project',
    'home.hero.cta.secondary': 'See case studies',
    'home.hero.imageAlt': 'KM-Design team portrait',
    'home.whatWeDo.heading': 'What we do?',
    'home.sections.design.title': 'Strategic Design (UI/UX)',
    'home.sections.design.body': 'I craft modern, intuitive visuals. A site must look great, but more importantly it must stay simple to use and guide clients straight to the goal.',
    'home.sections.design.imageAlt': 'Interface concept mockup',
    'home.sections.build.title': 'Websites, Apps, Stores',
    'home.sections.build.body': 'I handle everything from fast WordPress sites, through advanced web apps, to high-performing e-commerce builds.',
    'home.sections.build.imageAlt': 'Illustration of websites and apps',
    'home.sections.seo.title': 'Technical SEO',
    'home.sections.seo.body': 'I make sure each project is optimized for search from day one—clean code, fast loading, and a structure Google loves, ready for future campaigns.',
    'home.sections.seo.imageAlt': 'SEO performance graphics',
    'home.sections.support.title': 'Support & enhancements',
    'home.sections.support.body': 'Need quick fixes or a new feature on an existing site? I help maintain and expand your digital product.',
    'home.sections.support.imageAlt': 'Team providing support updates',
    'home.cta.heading': 'Start a collaboration that grows your business.',
    'home.cta.body': 'Book a free consultation to see how we turn concepts into measurable results and a market advantage.',
    'home.cta.button': 'Book a consultation',
    'home.faq.badge': 'Read the most common questions',
    'home.faq.heading': 'Worried about starting a collaboration?',
    'home.faq.body': 'That’s normal. We gathered and answered the questions that usually appear before a new digital investment. Our work is built on full transparency.',
    'home.faq.body2': 'Our collaboration is based on full transparency.',
    'home.faq.item': 'Warranty and ongoing support',
    'home.faq.item-1.question': 'How is the project billed?',
    'home.faq.item-2.question': 'How long does a site/project take?',
    'home.faq.item-3.question': 'Will I be able to edit the content myself?',
    'home.faq.item-4.question': 'What happens after the project ends? Do you provide support?',
    'home.faq.item-5.question': 'What if I don’t like the initial concept?',
    'home.faq.item-1.answer': 'We keep things transparent. Pricing is prepared individually before we start (Fixed Price), or we work hourly (Time & Material) for ongoing support. No hidden costs.',
    'home.faq.item-2.answer': 'A standard business site takes about 2–3 weeks. Larger portals and stores usually take 4–8 weeks. You always receive a detailed schedule with the contract.',
    'home.faq.item-3.answer': 'Yes. We build sites on intuitive CMS systems that allow you to edit text and images without any coding skills. After launch, we provide a short training session.',
    'home.faq.item-4.answer': 'We don’t leave you on your own. We offer monthly technical care packages or ad‑hoc help if anything breaks. We also provide a technical warranty for the delivered site.',
    'home.faq.item-5.answer': 'We work in stages so you have full control. First we prepare a visual design (mockup), then review and refine it together. Only after you fully approve the visuals do we start development, ensuring the final site matches your expectations.',

    // Contact Page
    'contact.process.badge': 'Process',
    'contact.process.title': 'How we kick things off',
    'contact.process.description': 'We walk through the key steps to deliver a strategy and schedule aligned with your goals.',
    'contact.process.items.consult.title': '30‑minute consultation',
    'contact.process.items.consult.description': 'The first online call to understand your objectives and project scope.',
    'contact.process.items.discovery.title': 'Discovery workshop',
    'contact.process.items.discovery.description': 'Together we refine features, strategy and the delivery roadmap.',
    'contact.process.items.meeting.title': 'In-person meeting',
    'contact.process.items.meeting.description': 'Happy to meet in Warsaw if you prefer an offline conversation.',
    'contact.faq.badge': 'FAQ',
    'contact.faq.title': 'Most common questions',
    'contact.faq.description': 'Short, direct answers about how the collaboration works.',
    'contact.faq.q1': 'How long does a project take?',
    'contact.faq.a1': 'Landing pages take up to 2 weeks, shops and apps 4–8 weeks, large systems 2–4 months depending on scope.',
    'contact.faq.q2': 'Is there support after launch?',
    'contact.faq.a2': 'Yes, every project includes 30 days of support plus optional maintenance packages.',
    'contact.faq.q3': 'How do we start working together?',
    'contact.faq.a3': 'We begin with a consultation and discovery workshop to gather requirements and build the roadmap.',
    'contact.social.badge': 'Social Media',
    'contact.social.title': 'Find me online',
    'contact.social.description': 'I share project updates and tips for founders.',
    'contact.form.badge': 'Contact',
    'contact.form.title': 'Let’s talk about your project',
    'contact.form.description': 'Fill out the form and I’ll reply within 24 hours with the next steps.',
    'contact.form.dataSafety': 'Your data stays safe — we only use it to respond to your inquiry.',
    'contact.form.name.label': 'Full name',
    'contact.form.name.placeholder': 'What should we call you?',
    'contact.form.email.label': 'Email address',
    'contact.form.email.placeholder': 'Drop your email here',
    'contact.form.company.label': 'Company (optional)',
    'contact.form.company.placeholder': 'Company or project name',
    'contact.form.message.label': 'Tell me what you need',
    'contact.form.message.placeholder': 'Describe the project, scope or ideal timeline.',
    'contact.form.consent': 'By clicking send you agree to be contacted and have your data processed according to the privacy policy.',
    'contact.form.submit': 'Send message',
    'contact.form.alert.success': 'Your message has been sent successfully!',
    'contact.form.alert.unknownError': 'An unknown error occurred while sending the message.',
    'contact.form.alert.errorPrefix': 'Error while sending the message:',
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