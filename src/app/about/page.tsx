'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Code, 
  Palette, 
  Zap, 
  Users, 
  Trophy, 
  Calendar,
  BookOpen,
  Coffee,
  Heart,
  Download,
  ExternalLink
} from "lucide-react"
import { useState, useEffect } from "react"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 98, category: "frontend" },
    { name: "React.js", level: 85, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },
    { name: "Python", level: 85, category: "backend" },
    { name: "PHP", level: 80, category: "backend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "MySQL", level: 85, category: "database" },
    { name: "MongoDB", level: 70, category: "database" },
    { name: "Laravel", level: 80, category: "framework" },
    { name: "FastAPI", level: 75, category: "framework" }
  ]

  const experience = [
    {
      company: "Freelance - WordPress Development",
      position: "Web Developer",
      period: "2024.06 - 2025.02",
      description: "Projektowanie i rozwijanie niestandardowych stron WordPress dla różnych klientów. Zarządzanie komunikacją z klientami przez cały cykl projektu od zbierania wymagań do finalnej realizacji.",
      technologies: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      company: "Record Sp. z o.o.",
      position: "Praktykant IT",
      period: "2024.11 - 2024.12",
      description: "Praca w zespole nad projektami IT, zapoznawanie się z profesjonalnym środowiskiem pracy, demonstrowanie zaangażowania i chęci nauki nowych rozwiązań.",
      technologies: ["Team Collaboration", "Professional Environment", "Various IT Tools"]
    },
    {
      company: "Korepetycje prywatne",
      position: "Korepetytor matematyki i informatyki", 
      period: "2023 - 2025",
      description: "Prowadzenie korepetycji z matematyki i informatyki, budowanie pozytywnych relacji z uczniami i rodzicami, dostosowywanie metod nauczania do indywidualnych potrzeb.",
      technologies: ["Teaching", "Communication", "Problem Solving", "Individual Approach"]
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      title: "Certyfikat Data Analysis",
      description: "FreeCodeCamp - potwierdzenie umiejętności analizy danych"
    },
    {
      icon: BookOpen,
      title: "Certyfikat JavaScript Algorithms",
      description: "FreeCodeCamp - algorytmy i struktury danych"
    },
    {
      icon: Code,
      title: "Student 5. klasy IT",
      description: "Prywatna szkoła techniczna informatyczna"
    },
    {
      icon: Users,
      title: "Praktyka zawodowa (96%)",
      description: "Ocena praktyczna z egzaminu EE.09"
    }
  ]

  const interests = [
    { icon: Palette, name: "Sztuki wizualne", description: "Pasja do tworzenia i oglądania sztuki" },
    { icon: Coffee, name: "Bieganie", description: "Aktywność fizyczna i sport" },
    { icon: BookOpen, name: "Programowanie", description: "Ciągłe uczenie się nowych technologii" },
    { icon: Heart, name: "Inwestowanie", description: "Zainteresowanie rynkami finansowymi" }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">O mnie</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: '#9f8a64'}}>
            Cześć, jestem Mikołaj
          </h1>
          <p className="text-xl mb-8 leading-relaxed" style={{color: '#6b5b47'}}>
            Student informatyki w prywatnej szkole technicznej w Bielsko-Białej. 
            Pasjonat programowania, który w wolnym czasie tworzy aplikacje web, 
            interesuje się sztukami wizualnymi i inwestowaniem.
          </p>              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Download className="mr-2 h-4 w-4" />
                  Pobierz CV
                </Button>
                <Button variant="outline" size="lg" className="bg-white/70 backdrop-blur-md border-white/20">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Zobacz LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                <Avatar className="w-40 h-40 mx-auto mb-6 ring-4 ring-white/50">
                  <AvatarImage src="/api/placeholder/160/160" alt="Mikołaj Karla" />
                  <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    MK
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Mikołaj Karla</h2>
                  <p className="text-gray-600 mb-4">Frontend Developer & UI Designer</p>
                  <div className="flex justify-center gap-2 mb-6">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      Dostępny
                    </Badge>
                    <Badge variant="outline" className="bg-white/70">
                      Warszawa
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">3+</div>
                      <div className="text-sm text-gray-600">Lat doświadczenia</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">15+</div>
                      <div className="text-sm text-gray-600">Projektów</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-600">10+</div>
                      <div className="text-sm text-gray-600">Klientów</div>
                    </div>
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

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Umiejętności</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologie, które wykorzystuję
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stale rozwijam swoje umiejętności, aby być na bieżąco z najnowszymi trendami w technologii
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-md border-white/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    <Badge variant="outline" className="bg-white/70 text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={skill.level} className="h-2" />
                    <div className="text-right text-sm text-gray-600">{skill.level}%</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Doświadczenie</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Moja ścieżka kariery
            </h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-md border-white/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">{exp.period}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 font-medium">{exp.company}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-white/70 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Osiągnięcia</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Liczby, które mówią same za siebie
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-md border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Zainteresowania</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Co robię poza kodowaniem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wierzę, że różnorodne zainteresowania pomagają w kreatywnym rozwiązywaniu problemów
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-md border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <interest.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {interest.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {interest.description}
                  </p>
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
            Pracujmy razem!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Szukasz developera, który łączy umiejętności techniczne z kreatywnością? Skontaktuj się ze mną!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-white/90">
              Rozpocznij projekt
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Pobierz CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}