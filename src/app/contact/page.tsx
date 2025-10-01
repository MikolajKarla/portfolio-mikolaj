'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Calendar,
  MessageCircle,
  Coffee
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@mikolajkarla.dev",
      description: "Odpowiem w ciągu 24 godzin",
      action: "mailto:hello@mikolajkarla.dev"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 123 456 789",
      description: "Pon-Pt, 9:00-17:00",
      action: "tel:+48123456789"
    },
    {
      icon: MapPin,
      title: "Lokalizacja",
      value: "Warszawa, Polska",
      description: "Pracuję zdalnie i lokalnie",
      action: null
    },
    {
      icon: Calendar,
      title: "Spotkanie",
      value: "Umów konsultację",
      description: "Bezpłatna 30-min rozmowa",
      action: "https://calendly.com/mikolajkarla"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/mikolajkarla",
      username: "@mikolajkarla"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/mikolajkarla",
      username: "Mikołaj Karla"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/mikolajkarla",
      username: "@mikolajkarla"
    }
  ]

  const services = [
    {
      icon: Coffee,
      title: "Konsultacje",
      description: "Bezpłatna rozmowa o Twoim projekcie"
    },
    {
      icon: MessageCircle,
      title: "Code Review",
      description: "Przegląd i optymalizacja kodu"
    },
    {
      icon: Clock,
      title: "Mentoring",
      description: "Wsparcie dla początkujących developerów"
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">Kontakt</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Skontaktuj się ze mną
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Masz pomysł na projekt? Chcesz współpracować? Napisz do mnie - chętnie porozmawiam!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/60 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Send className="h-6 w-6 text-blue-600" />
                  Wyślij wiadomość
                </CardTitle>
                <CardDescription>
                  Wypełnij formularz poniżej, a odezwę się do Ciebie najszybciej jak to możliwe
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Imię i nazwisko *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jan Kowalski"
                        required
                        className="bg-white/70 backdrop-blur-sm border-white/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jan@example.com"
                        required
                        className="bg-white/70 backdrop-blur-sm border-white/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Firma / Organizacja
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nazwa firmy (opcjonalne)"
                      className="bg-white/70 backdrop-blur-sm border-white/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Wiadomość *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Opisz swój projekt, pytanie lub propozycję współpracy..."
                      required
                      rows={6}
                      className="bg-white/70 backdrop-blur-sm border-white/20 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Wyślij wiadomość
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-md border-white/20 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-900 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-white/60 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Social Media</CardTitle>
                <CardDescription>Znajdź mnie w sieci</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors group">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{social.name}</div>
                      <div className="text-sm text-gray-600">{social.username}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-white/60 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Dodatkowe usługi</CardTitle>
                <CardDescription>Czym jeszcze mogę pomóc</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <service.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Często zadawane pytania
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-lg">Jak długo trwa realizacja projektu?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Czas realizacji zależy od złożoności projektu. Proste strony internetowe: 1-2 tygodnie, 
                  aplikacje web: 4-8 tygodni, złożone systemy: 2-4 miesiące.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-lg">Jakie są koszty współpracy?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Koszty ustalamy indywidualnie w zależności od zakresu prac. 
                  Oferuję zarówno rozliczenie za projekt jak i stawki godzinowe.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-lg">Czy świadczysz wsparcie po realizacji?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Tak! Oferuję 30 dni bezpłatnego wsparcia po oddaniu projektu oraz 
                  opcjonalne plany maintenance na dłuższy okres.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-lg">Czy pracujesz zdalnie?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Pracuję głównie zdalnie, co pozwala na współpracę z klientami z całej Polski. 
                  Spotkania osobiste możliwe w Warszawie i okolicach.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na rozmowę?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Zapraszam na bezpłatną 30-minutową konsultację, podczas której omówimy Twój projekt
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-white/90">
              <Calendar className="mr-2 h-4 w-4" />
              Umów spotkanie
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Mail className="mr-2 h-4 w-4" />
              Napisz email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}