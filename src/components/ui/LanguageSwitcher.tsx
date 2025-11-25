'use client'

import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === 'pl' ? 'en' : 'pl')
    }
    
    return (
        <Button
            variant="light"
            size="sm"
            onClick={toggleLanguage}
            className="h-8 px-3 rounded-full hover:bg-accent/50 transition-all duration-200"
            title={`Switch to ${language === 'pl' ? 'English' : 'Polish'}`}
        >
            <Globe className="h-4 w-4 text-foreground" />
            <span className="ml-1 text-xs font-medium">
                {language.toUpperCase()}
            </span>
        </Button>
    )
}
