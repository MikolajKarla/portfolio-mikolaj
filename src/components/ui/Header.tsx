'use client'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Menu, X, Globe } from 'lucide-react'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'

import { useLanguage } from '@/contexts/LanguageContext'
import React, { useState, useEffect } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.services'), href: '/services' },
        { name: t('nav.portfolio'), href: '/portfolio' },
        { name: t('nav.contact'), href: '/contact' },
    ]

    const toggleLanguage = () => {
        setLanguage(language === 'pl' ? 'en' : 'pl')
    }

    const getHeaderStyles = () => ({
        borderColor: 'var(--border)',
        
        borderWidth: '1px',
        boxShadow: scrolled ? '0 20px 25px -5px var(--border)' : '0 10px 15px -3px var(--border)'
    })

    return (
        <NavigationMenu 
            className={`
                transition-all duration-300 ease-in-out
                flex flex-col lg:flex-row justify-between items-center 
                px-4 sm:px-6 lg:px-8 py-3 lg:py-2
                backdrop-blur-lg rounded-2xl lg:rounded-full shadow-lg
                xs:min-w-full sm:min-w-3/5
                bg-background/90
                ${menuOpen ? 'rounded-2xl' : 'lg:rounded-full'}
            `}
            style={getHeaderStyles()}>
            {/* Mobile Header */}
            <div className="w-full flex lg:hidden justify-between items-center">
                <NavigationMenuItem className='list-none'>
                    <NavigationMenuLink 
                        href="/" 
                        className='font-bold text-lg transition-all duration-300 text-foreground animate-pulse hover:animate-none'
                    >
                        KFreelance
                    </NavigationMenuLink>
                </NavigationMenuItem>
                
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 hover:bg-accent/50 rounded-lg transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X className="h-5 w-5 text-foreground" />
                    ) : (
                        <Menu className="h-5 w-5 text-foreground" />
                    )}
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className={`
                w-full lg:hidden transition-all duration-300 ease-in-out overflow-hidden
                ${menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}>
                <div className="flex flex-col gap-2 pb-4">
                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.name} className='list-none'>
                                <NavigationMenuLink 
                                    href={item.href}
                                    className={`block px-4 py-2 text-center rounded-lg transition-all duration-200 font-medium text-foreground hover:bg-accent/20 hover:text-accent`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </div>
                    
                    {/* Controls */}
                    <div className='flex justify-center gap-2 pt-2 border-t border-border/30'>
                        <ThemeSwitcher className="rounded-lg hover:bg-accent/50" />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleLanguage}
                            className="rounded-lg hover:bg-accent/50 transition-all duration-200"
                            title={`Switch to ${language === 'pl' ? 'English' : 'Polish'}`}
                        >
                            <Globe className="h-4 w-4 text-foreground" />
                            <span className="ml-1 text-xs font-medium">
                                {language.toUpperCase()}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="w-full hidden lg:flex justify-between items-center">
                {/* Left Navigation */}
                <div className="flex items-center gap-1">
                    {navItems.slice(0, 2).map((item) => (
                        <NavigationMenuItem key={item.name} className='list-none'>
                            <NavigationMenuLink 
                                href={item.href}
                                className='px-4 py-2 rounded-full text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-200 font-medium text-sm'
                            >
                                {item.name}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </div>

                {/* Center Logo */}
                <NavigationMenuItem className='list-none'>
                    <NavigationMenuLink 
                        href="/" 
                        className='font-bold text-xl hover:scale-105 transition-transform duration-200 text-foreground hover:animate-pulse hover:bg-transparent'
                    >
                        KFreelance
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Right Navigation */}
                <div className="flex items-center gap-1">
                    {navItems.slice(2).map((item) => (
                        <NavigationMenuItem key={item.name} className='list-none'>
                            <NavigationMenuLink 
                                href={item.href}
                                className='px-4 py-2 rounded-full text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-200 font-medium text-sm'
                            >
                                {item.name}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                    
                    {/* Controls */}
                    <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border/30">
                        <ThemeSwitcher 
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full hover:bg-accent/50"
                        />
                        
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleLanguage}
                            className="h-8 px-2 rounded-full hover:bg-accent/50 transition-all duration-200"
                            title={`Switch to ${language === 'pl' ? 'English' : 'Polish'}`}
                        >
                            <Globe className="h-4 w-4 text-foreground" />
                            <span className="ml-1 text-xs font-medium">
                                {language.toUpperCase()}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    )
}

export default Header
