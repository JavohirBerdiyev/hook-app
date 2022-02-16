import React, { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setIteme] = useState('light');

  const toggleTheme = () => {
    if(theme !== 'dark') {
      localStorage.setItem('theme', 'dark');
      setIteme('dark');
    } else {
      localStorage.setItem('theme', 'light')
      setIteme('light')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if(localTheme) {
      setIteme(localTheme)
    }
  }, [])
 
  return { theme, toggleTheme  }
}
