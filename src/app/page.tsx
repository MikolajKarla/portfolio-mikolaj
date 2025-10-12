'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { ArrowRight, Code2, Mail, Settings, Smartphone } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const technologies = [
    "React.js", "Next.js", "Vue.js", "TypeScript", "Node.js", "PHP", 
    "WordPress", "Shopify", "Webflow", "MySQL", "MongoDB", "PostgreSQL",
    "AWS", "Vercel", "Docker", "Git", "RESTful APIs", "GraphQL", "Stripe", "PayPal"
  ]

  const services = [
    {
      icon: Code2,
      title: t('services.websites.title'),
      description: t('services.websites.description')
    },
    {
      icon: Smartphone,
      title: t('services.webapps.title'),
      description: t('services.webapps.description')
    },
    {
      icon: Settings,
      title: t('services.automation.title'),
      description: t('services.automation.description')
    }
  ]

  if (!mounted) return null

  return (
  <div className="min-h-screen bg-background">
      {/* Hero Section with Glassmorphism */}
  <section className="py-20 bg-background">
      
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">{t('hero.greeting')}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-accent">
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </div>
          </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                            <Badge variant="secondary" className="mb-4">{t('about.badge')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-white/70 backdrop-blur-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-white/50">
                  <span className="text-4xl font-bold text-white">K</span>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t('company.name')}</h3>
                  <p className="text-muted-foreground mb-4">{t('company.type')}</p>
                  <div className="flex justify-center gap-2">
                    <Badge className="bg-primary text-primary-foreground">
                      {t('company.badge')}
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
            <Badge variant="secondary" className="mb-4">{t('services.badge')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.description')}
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
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-white/90">
              <Mail className="mr-2 h-4 w-4" />
              {t('cta.contact')}
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              {t('cta.portfolio')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
