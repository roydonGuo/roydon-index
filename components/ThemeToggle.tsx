'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setShowMenu(false);
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-muted border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-9 h-9 flex items-center justify-center text-muted hover:text-accent-cyan transition-colors duration-200"
        aria-label="切换主题"
      >
        {theme === 'light' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
        {theme === 'dark' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
        {theme === 'system' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          ></div>
          <div 
            className="absolute right-0 mt-2 w-40 bg-card border border-primary rounded-lg shadow-lg overflow-hidden z-50"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-primary)'
            }}
          >
            <button
              onClick={() => handleThemeChange('light')}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-colors duration-200 ${
                theme === 'light' 
                  ? 'text-accent-cyan' 
                  : 'text-secondary hover:bg-hover'
              }`}
              style={theme === 'light' ? { 
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                color: 'var(--accent-cyan)'
              } : {}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-sm">浅色模式</span>
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'text-accent-cyan' 
                  : 'text-secondary hover:bg-hover'
              }`}
              style={theme === 'dark' ? { 
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                color: 'var(--accent-cyan)'
              } : {}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span className="text-sm">深色模式</span>
            </button>
            <button
              onClick={() => handleThemeChange('system')}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-colors duration-200 ${
                theme === 'system' 
                  ? 'text-accent-cyan' 
                  : 'text-secondary hover:bg-hover'
              }`}
              style={theme === 'system' ? { 
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                color: 'var(--accent-cyan)'
              } : {}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">跟随系统</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
