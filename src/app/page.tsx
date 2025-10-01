'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Code2, Palette, Zap, Github, Linkedin, Mail, Download } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "TailwindCSS", "Figma", "Docker", "AWS", "GraphQL", "Prisma"
  ]

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Nowoczesne aplikacje web z React, Next.js i TypeScript"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Projektowanie intuicyjnych interfejsów z dbałością o user experience"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optymalizacja wydajności i szybkości ładowania aplikacji"
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Dostępny do współpracy</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Mikołaj Karla
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer & UI/UX Designer tworzący nowoczesne, 
            wydajne aplikacje web z dbałością o szczegóły
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 group">
              Zobacz moje projekty
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/70 backdrop-blur-md border-white/20 hover:bg-white/90">
              <Download className="mr-2 h-4 w-4" />
              Pobierz CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="bg-white/50 backdrop-blur-md hover:bg-white/80 border border-white/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/50 backdrop-blur-md hover:bg-white/80 border border-white/20">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/50 backdrop-blur-md hover:bg-white/80 border border-white/20">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">O mnie</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Passion for creating exceptional digital experiences
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Jestem frontend developerem z ponad 3-letnim doświadczeniem w tworzeniu 
                nowoczesnych aplikacji web. Specjalizuję się w React, Next.js i TypeScript, 
                zawsze dbając o najwyższą jakość kodu i user experience.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Łączę umiejętności techniczne z poczuciem estetyki, tworząc rozwiązania 
                które są nie tylko funkcjonalne, ale także piękne wizualnie.
              </p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-white/70 backdrop-blur-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-white/50">
                  <AvatarImage src="/api/placeholder/128/128" alt="Mikołaj Karla" />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    MK
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mikołaj Karla</h3>
                  <p className="text-gray-600 mb-4">Frontend Developer & Designer</p>
                  <div className="flex justify-center gap-2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      3+ lat doświadczenia
                    </Badge>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce delay-700" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 animate-bounce delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Usługi</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Czym się zajmuję
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferuję kompleksowe usługi w zakresie tworzenia nowoczesnych aplikacji web
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-md border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na nowy projekt?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Skontaktuj się ze mną i omówmy szczegóły Twojego pomysłu
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-white/90">
              <Mail className="mr-2 h-4 w-4" />
              Napisz do mnie
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Zobacz portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
