'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface ThemeSwitcherProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ 
  variant = 'light', 
  size = 'sm',
  className = ''
}) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={`transition-all duration-200 ${className}`}
      aria-label={`Przełącz na motyw ${theme === 'light' ? 'ciemny' : 'jasny'}`}
      title={`Przełącz na motyw ${theme === 'light' ? 'ciemny' : 'jasny'}`}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-yellow-500 transition-colors duration-200" />
      ) : (
        <Moon className="h-4 w-4 transition-colors duration-200" style={{color: '#9f8a64'}} />
      )}
    </Button>
  )
}

export default ThemeSwitcher