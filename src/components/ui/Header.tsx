'use client'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import React, { useState, useEffect } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const { t } = useLanguage()

    useEffect(() => {

        let lastScrollTop = 0
        const headerHeight = 80 // Approximate header height

        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop
            
            // Update blur effect
            setScrolled(currentScroll > 20)
            
            // Hide/show header logic
            if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
                // Scrolling down & past header height
                setIsVisible(false)
            } else if (currentScroll < lastScrollTop) {
                // Scrolling up
                setIsVisible(true)
            }
            
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: t('nav.about') },
        { href: '/websites', label: t('nav.services') },
        // { href: '/case-studies', label: t('nav.portfolio') },
        { href: '/contact', label: t('nav.contact') }
    ]


    return (
        <NavigationMenu 
            className={`
                transition-all duration-300 ease-in-out
                flex flex-col lg:flex-row justify-between items-center 
                px-4 sm:px-4 lg:px-2
                xs:py-4 xs:px-12
                rounded-2xl lg:rounded-xl shadow-lg
                xs:min-w-fit sm:min-w-fit
                ${scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white'}
                ${menuOpen ? 'rounded-2xl' : ''}
                ${isVisible ? 'translate-y-0  opacity-100' : '-translate-y-full scale-80 opacity-0'}
                drop-shadow-2xl/40
            `}
        >
            {/* Mobile Header */}
            <div className="w-full flex lg:hidden justify-between items-center">
                <NavigationMenuItem className='list-none'>
                    <NavigationMenuLink 
                        href="/" 
                        className='font-bold text-lg  text-foreground'
                    >
                        <Image width={100} height={100} src="/KM-logo.png" alt="KM-Design Logo" className="h-14  w-auto"/>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                
                <Button
                    variant="light"
                    size="default"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="py-3 px-3 hover:bg-accent/50 rounded-lg transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X className="h-8 w-8 text-foreground" />
                    ) : (
                        <Menu className="h-8 w-8 text-foreground" />
                    )}
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className={`
                w-full lg:hidden transition-all duration-300 ease-in-out overflow-hidden 
                ${menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}>
                <div className="flex flex-col gap-6 pb-4">
                    {/* Navigation Links */}
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                        {navLinks.map((link) => (
                            <NavigationMenuItem asChild key={link.href}>
                                <li className='list-none'>
                                    <NavigationMenuLink 
                                        href={link.href}
                                        className='block text-center py-2 px-4 rounded-lg font-medium transition-all duration-200 text-foreground hover:bg-accent/50'
                                    >
                                        {link.label}
                                    </NavigationMenuLink>
                                </li>
                            </NavigationMenuItem>
                        ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <NavigationMenuItem asChild>
                        <li className='list-none'>
                            <NavigationMenuLink href="/contact" className='block'>
                                <Button variant="light" size="default" className="w-full">
                                    {t('hero.cta.primary')}
                                </Button>
                            </NavigationMenuLink>
                        </li>
                    </NavigationMenuItem>
                </div>
            </div>






            {/* Desktop Navigation */}
            <div className="w-full hidden lg:flex md:gap-8 lg:gap-20 justify-between items-center">

                {/* Left Navigation */}
                <div className="flex items-center">
                    <div className="logo">
                        <NavigationMenuItem className='list-none'>
                            <NavigationMenuLink 
                                href="/" 
                                className=' font-bold text-lg  duration-300 text-foreground '
                            >
                            <Image width={100} height={100} src="/KM-logo.png" alt="KM-Design Logo" className="h-16 w-auto"/>

                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </div>
                </div>

                {/* Center Navigation */}
                <div className="flex items-center md:gap-4 lg:gap-6 ">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.href} className='list-none'>
                            <NavigationMenuLink 
                                href={link.href}
                                className='font-semibold xs:text-sm text-md hover:scale-105 transition-transform duration-200 text-foreground hover:animate-pulse hover:bg-transparent'
                            >
                                <p>{link.label}</p>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </div>
                <div className="flex items-center gap-4">

                {/* Right Navigation */}
                <div className="flex items-center">
                    <NavigationMenuItem className='list-none'>
                        <NavigationMenuLink href="/contact">
                            <Button variant="light" size="lg">
                                {t('hero.cta.primary')}
                            </Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    )
}

export default Header
