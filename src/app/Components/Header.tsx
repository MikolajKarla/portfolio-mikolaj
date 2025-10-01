'use client'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Moon, Sun, Menu, X, Globe } from 'lucide-react'
import React, { useState, useEffect } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Resume', href: '/resume' },
        { name: 'Contact', href: '/contact' },
    ]

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        // Here you would implement actual dark mode logic
    }

    return (
        <NavigationMenu className={`
            transition-all duration-300 ease-in-out
            flex flex-col lg:flex-row justify-between items-center 
            px-4 sm:px-6 lg:px-8 py-3 lg:py-2
            bg-white/70 backdrop-blur-lg border border-white/20 
            rounded-2xl lg:rounded-full shadow-lg shadow-black/5
            w-[95vw] sm:w-[90vw] md:w-4/5 lg:w-3/5 xl:w-1/2
            ${scrolled ? 'shadow-xl shadow-black/10 bg-white/80' : ''}
            ${menuOpen ? 'rounded-2xl' : 'lg:rounded-full'}
        `}>
            {/* Mobile Header */}
            <div className="w-full flex lg:hidden justify-between items-center">
                <NavigationMenuItem className='list-none'>
                    <NavigationMenuLink 
                        href="/" 
                        className='font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300'
                    >
                        Mikołaj Karla
                    </NavigationMenuLink>
                </NavigationMenuItem>
                
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 hover:bg-white/50 rounded-lg transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X className="h-5 w-5 text-gray-700" />
                    ) : (
                        <Menu className="h-5 w-5 text-gray-700" />
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
                                    className='block px-4 py-2 text-center rounded-lg text-gray-700 hover:bg-white/70 hover:text-blue-600 transition-all duration-200 font-medium'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </div>
                    
                    {/* Controls */}
                    <div className='flex justify-center gap-2 pt-2 border-t border-white/30'>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleDarkMode}
                            className="rounded-lg hover:bg-white/50 transition-all duration-200"
                        >
                            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-lg hover:bg-white/50 transition-all duration-200"
                        >
                            <Globe className="h-4 w-4" />
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
                                className='px-4 py-2 rounded-full text-gray-700 hover:bg-white/70 hover:text-blue-600 transition-all duration-200 font-medium text-sm'
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
                        className='font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200'
                    >
                        Mikołaj Karla
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Right Navigation */}
                <div className="flex items-center gap-1">
                    {navItems.slice(2).map((item) => (
                        <NavigationMenuItem key={item.name} className='list-none'>
                            <NavigationMenuLink 
                                href={item.href}
                                className='px-4 py-2 rounded-full text-gray-700 hover:bg-white/70 hover:text-blue-600 transition-all duration-200 font-medium text-sm'
                            >
                                {item.name}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                    
                    {/* Controls */}
                    <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/30">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleDarkMode}
                            className="w-8 h-8 p-0 rounded-full hover:bg-white/50 transition-all duration-200"
                        >
                            {darkMode ? 
                                <Sun className="h-4 w-4 text-yellow-600" /> : 
                                <Moon className="h-4 w-4 text-gray-600" />
                            }
                        </Button>
                        
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full hover:bg-white/50 transition-all duration-200"
                        >
                            <Globe className="h-4 w-4 text-gray-600" />
                        </Button>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    )
}

export default Header
