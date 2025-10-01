'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("wszystkie")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Nowoczesna platforma e-commerce z panelem administracyjnym, systemem płatności i zarządzaniem magazynem.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      category: "fullstack",
      githubUrl: "https://github.com/mikolajkarla/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplikacja do zarządzania zadaniami z funkcją drag & drop, powiadomieniami i colaboracją w zespole.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
      category: "frontend",
      githubUrl: "https://github.com/mikolajkarla/taskmanager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description: "Interfejs do komunikacji z AI wykorzystujący najnowsze modele językowe i real-time streaming.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI API", "Supabase", "Tailwind", "Framer Motion"],
      category: "frontend",
      githubUrl: "https://github.com/mikolajkarla/ai-chat",
      liveUrl: "https://ai-chat-demo.vercel.app",
      featured: false,
      year: "2024"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsywne portfolio z animacjami, dark mode i optymalizacją SEO.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      category: "frontend",
      githubUrl: "https://github.com/mikolajkarla/portfolio",
      liveUrl: "https://mikolajkarla.dev",
      featured: false,
      year: "2023"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Dashboard pogodowy z mapami interaktywnymi, prognozami i alertami pogodowymi.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Weather API", "Leaflet", "Chart.js"],
      category: "frontend",
      githubUrl: "https://github.com/mikolajkarla/weather",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      featured: false,
      year: "2023"
    },
    {
      id: 6,
      title: "Blog CMS",
      description: "System zarządzania treścią z edytorem WYSIWYG, kategoryzacją i SEO.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Sanity", "TypeScript", "Tailwind"],
      category: "fullstack",
      githubUrl: "https://github.com/mikolajkarla/blog-cms",
      liveUrl: "https://blog-cms-demo.vercel.app",
      featured: false,
      year: "2023"
    }
  ]

  const categories = [
    { value: "wszystkie", label: "Wszystkie" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile" }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === "wszystkie" || project.category === selectedFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = projects.filter(project => project.featured)

  if (!mounted) return null

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Moje Projekty
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wybrane prace showcasujące moje umiejętności w tworzeniu nowoczesnych aplikacji web
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Wyróżnione projekty</h2>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden bg-white/60 backdrop-blur-md border-white/20 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-400 text-sm">Project Screenshot</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="text-sm text-gray-500 mt-1">{project.year}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 hover:opacity-100">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 hover:opacity-100">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-white/70">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Wszystkie projekty</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Szukaj projektów..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/60 backdrop-blur-md border-white/20"
                />
              </div>
              
              {/* Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedFilter === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(category.value)}
                    className={selectedFilter === category.value 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                      : "bg-white/60 backdrop-blur-md border-white/20"
                    }
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden bg-white/60 backdrop-blur-md border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Screenshot</div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="text-sm text-gray-500">{project.year}</div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-white/70">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-white/70">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="h-12 w-12 mx-auto mb-4" />
                Nie znaleziono projektów
              </div>
              <p className="text-gray-600">
                Spróbuj zmienić kryteria wyszukiwania lub filtry
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Chcesz zobaczyć więcej?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Sprawdź mój GitHub lub skontaktuj się ze mną w sprawie współpracy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-white/90">
              <Github className="mr-2 h-4 w-4" />
              Zobacz GitHub
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}