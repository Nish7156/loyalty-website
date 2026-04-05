import { createContext, useContext } from 'react'

export type Theme = 'dark' | 'light'

export interface ThemeContextValue {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
})

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}

export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme') as Theme | null
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.add('light')
    root.classList.remove('dark')
  }
  localStorage.setItem('theme', theme)
}
