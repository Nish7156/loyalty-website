import { useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext, getInitialTheme, applyTheme } from './useTheme'
import type { Theme } from './useTheme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Apply to DOM on every change
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Listen for system preference changes (only when user hasn't set a preference)
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
