'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/ContactForm"
import { Github, Linkedin, Twitter, Calendar, MessageCircle, Coffee } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/MikolajKarla",
    username: "@MikolajKarla"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/miko%C5%82aj-karla-b445a1250/",
    username: "linkedin.com/in/mikolajkarla"
  },
  {
    icon: Twitter,
    name: "X (Twitter)",
    url: "https://twitter.com/mikolajkarla",
    username: "@mikolajkarla"
  }
]

const highlightItems = [
  {
    icon: Calendar,
    title: "Konsultacja 30 min",
    description: "Pierwsza rozmowa online, żeby poznać cele i zakres projektu."
  },
  {
    icon: MessageCircle,
    title: "Warsztat discovery",
    description: "Wspólne doprecyzowanie funkcji, strategii i harmonogramu."
  },
  {
    icon: Coffee,
    title: "Spotkanie na żywo",
    description: "Możliwość spotkania w Warszawie, jeśli preferujesz rozmowę offline."
  }
]

const faqs = [
  {
    question: "Jak długo trwa realizacja projektu?",
    answer:
      "Czas zależy od złożoności: landing page do 2 tygodni, sklepy i aplikacje 4–8 tygodni, rozbudowane systemy 2–4 miesiące."
  },
  {
    question: "Czy mogę liczyć na wsparcie po wdrożeniu?",
    answer:
      "Tak, oferuję 30 dni wsparcia w cenie projektu oraz pakiety maintenance dopasowane do Twoich potrzeb."
  },
  {
    question: "Jak wygląda start współpracy?",
    answer:
      "Zaczynamy od konsultacji i warsztatu discovery, żeby zebrać wymagania i stworzyć roadmapę działań."
  }
]

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-radial ">
      <div className="relative mx-auto w-full max-w-8xl px-5 py-12 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ContactForm className="w-full sm:col-span-2 p-3 xl:col-span-3" />

          

          <Card className="relative flex h-full w-full flex-col overflow-hidden border lg:rounded-tr-4xl border-white/10 bg-[var(--color-secondary)] text-white shadow-2xl sm:col-span-1 xl:col-span-1">
            <div className="pointer-events-none absolute inset-0  opacity-45" />
            <div className="relative h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Proces</Badge>
                <CardTitle className="text-2xl font-semibold">Jak zaczynamy współpracę</CardTitle>
                <CardDescription className="text-white/70 pb-4">
                  Przejdziemy przez kluczowe etapy, żeby dostarczyć strategię i harmonogram dopasowany do Twoich celów.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4   sm:grid-cols-1">
                {highlightItems.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-secondary)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="text-sm text-white/70">{description}</p>
                  </div>
                ))}
              </CardContent>
            </div>
          </Card>

          <Card className="relative flex h-full w-full flex-col overflow-hidden lg:rounded-bl-4xl border border-white/10 bg-[var(--color-secondary)] text-white shadow-2xl sm:col-span-1 xl:col-span-2">
            <div className="pointer-events-none absolute inset-0  opacity-45" />
            <div className="relative h-full">
              <CardHeader className="pb-6">
                <Badge variant="secondary" className="w-fit">FAQ</Badge>
                <CardTitle className="text-2xl font-semibold ">Najczęstsze pytania</CardTitle>
                <CardDescription className="text-white/70">
                  Krótko i konkretnie o tym, jak przebiega współpraca. 
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 items-end  grid-cols-1 xl:grid-cols-2">
                {faqs.map(({ question, answer }) => (
                  <div key={question} className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/10 p-5">
                    <p className="text-sm font-semibold">{question}</p>
                    <p className="text-sm text-white/70">{answer}</p>
                  </div>
                ))}
              </CardContent>
            </div>
          </Card>


          <Card className="relative flex h-full w-full flex-col overflow-hidden lg:rounded-br-4xl border   border-white/10 bg-[var(--color-secondary)] text-white shadow-2xl sm:col-span-2 xl:col-span-2">
            <div className="pointer-events-none absolute inset-0  opacity-50" />
            <div className="relative h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Social Media</Badge>
                <CardTitle className="text-xl font-semibold">Znajdź mnie w sieci</CardTitle>
                <CardDescription className="text-white/70 ">
                  Aktualizacje projektowe i wskazówki dla przedsiębiorców.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white/80 to-white/40 text-[var(--color-secondary)] group-hover:scale-105">
                      <social.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-xs text-white/60">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}