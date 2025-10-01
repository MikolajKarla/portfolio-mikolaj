'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Award,
  GraduationCap,
  Briefcase
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Resume() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = {
    name: "Mikołaj Karla",
    title: "Frontend Developer & UI/UX Designer",
    email: "hello@mikolajkarla.dev",
    phone: "+48 123 456 789",
    location: "Warszawa, Polska",
    linkedin: "linkedin.com/in/mikolajkarla",
    github: "github.com/mikolajkarla",
    website: "mikolajkarla.dev"
  }

  const summary = `Doświadczony Frontend Developer z ponad 3-letnim stażem w tworzeniu nowoczesnych aplikacji web. 
  Specjalizuję się w React, Next.js i TypeScript, łącząc umiejętności techniczne z poczuciem estetyki. 
  Pasjonat clean code i najlepszych praktyk rozwoju oprogramowania.`

  const experience = [
    {
      company: "Tech Solutions Sp. z o.o.",
      position: "Senior Frontend Developer",
      period: "01.2023 - obecnie",
      location: "Warszawa",
      responsibilities: [
        "Rozwój aplikacji SaaS w React i Next.js dla międzynarodowych klientów",
        "Optymalizacja wydajności aplikacji - poprawa Core Web Vitals o 40%",
        "Mentoring junior developerów i code review",
        "Współpraca z zespołem UX/UI w procesie design system development",
        "Implementacja CI/CD pipeline i automatycznych testów"
      ],
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "GraphQL", "Jest"]
    },
    {
      company: "Digital Agency Creative",
      position: "Full Stack Developer",
      period: "03.2022 - 12.2022",
      location: "Warszawa",
      responsibilities: [
        "Tworzenie responsywnych stron internetowych i aplikacji e-commerce",
        "Rozwój API w Node.js i integracja z zewnętrznymi systemami",
        "Zarządzanie bazami danych PostgreSQL i optymalizacja zapytań",
        "Współpraca bezpośrednio z klientami i zbieranie wymagań",
        "Wdrażanie projektów na serwery produkcyjne"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Stripe API", "AWS"]
    },
    {
      company: "Freelance",
      position: "Web Developer",
      period: "06.2021 - 02.2022",
      location: "Praca zdalna",
      responsibilities: [
        "Realizacja projektów dla lokalnych firm i startupów",
        "Tworzenie stron wizytówkowych i sklepów internetowych",
        "Konsultacje techniczne i doradztwo w zakresie digitalizacji",
        "Zarządzanie pełnym cyklem życia projektów od koncepcji do wdrożenia"
      ],
      technologies: ["JavaScript", "WordPress", "PHP", "MySQL", "HTML/CSS"]
    }
  ]

  const education = [
    {
      institution: "Politechnika Warszawska",
      degree: "Inżynier, Informatyka",
      period: "2019 - 2023",
      description: "Specjalizacja: Inżynieria Oprogramowania. Praca dyplomowa: 'Optymalizacja wydajności aplikacji React'"
    }
  ]

  const skills = [
    { category: "Frontend", items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "TailwindCSS", level: 95 },
      { name: "SASS/SCSS", level: 85 }
    ]},
    { category: "Backend", items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "REST API", level: 90 },
      { name: "GraphQL", level: 80 }
    ]},
    { category: "Tools & Others", items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 90 },
      { name: "Jest / Testing", level: 85 },
      { name: "Webpack / Vite", level: 80 }
    ]}
  ]

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456"
    },
    {
      name: "Meta Front-End Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-789012"
    }
  ]

  const languages = [
    { name: "Polski", level: "Natywny" },
    { name: "Angielski", level: "C1 - Zaawansowany" },
    { name: "Niemiecki", level: "A2 - Podstawowy" }
  ]

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Kompleksowa platforma e-commerce z panelem admin",
      technologies: ["Next.js", "Stripe", "Prisma"],
      url: "github.com/mikolajkarla/ecommerce"
    },
    {
      name: "Task Management App",
      description: "Aplikacja do zarządzania projektami z real-time updates",
      technologies: ["React", "Socket.io", "Node.js"],
      url: "github.com/mikolajkarla/taskmanager"
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with download button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <Badge variant="secondary" className="mb-4">CV / Resume</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Curriculum Vitae
            </h1>
          </div>
          
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Pobierz PDF
          </Button>
        </div>

        {/* Personal Info */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {contactInfo.name}
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                {contactInfo.title}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{contactInfo.location}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{contactInfo.linkedin}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{contactInfo.github}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{contactInfo.website}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              Profil zawodowy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {summary}
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              Doświadczenie zawodowe
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {exp.position}
                      </h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-600 mt-1 md:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              Wykształcenie
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-green-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-green-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-gray-600 mt-1 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Umiejętności techniczne
            </h3>
            
            <div className="space-y-6">
              {skills.map((category, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {category.category}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-600">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Two column layout for remaining sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Certifications */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Certyfikaty
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {cert.name}
                    </h4>
                    <p className="text-blue-600 text-sm">{cert.issuer}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-600">{cert.date}</span>
                      <span className="text-xs text-gray-500">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Języki obce
              </h3>
              
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {lang.name}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Projects */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Kluczowe projekty
            </h3>
            
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {project.name}
                    </h4>
                    <ExternalLink className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-blue-600">{project.url}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          Dokument wygenerowany: {new Date().toLocaleDateString('pl-PL')}
        </div>
      </div>
    </div>
  )
}