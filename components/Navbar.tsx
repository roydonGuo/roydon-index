'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div
        style={{ background: 'var(--nav-bg)' }}
        className={`max-w-7xl mx-auto backdrop-blur-lg rounded-2xl border border-primary transition-all duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold font-mono">
              <span className="text-primary">DEVELOPER</span>
              <span className="text-accent-cyan">.DEV</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                首页
              </a>
              <a
                href="#about"
                className="text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                关于
              </a>
              <a
                href="#skills"
                className="text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                技术栈
              </a>
              <a
                href="#projects"
                className="text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                项目
              </a>
              <a
                href="#services"
                className="text-secondary hover:text-accent-cyan transition-colors duration-200"
              >
                服务
              </a>
            </div>

            <div className="flex items-center gap-4">
              {/* 社交媒体图标 */}
              <div className="hidden md:flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/roydonGuo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-muted hover:text-accent-cyan transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* CSDN */}
                <a
                  href="https://blog.csdn.net/m0_51390535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-muted hover:text-accent-cyan transition-colors duration-200"
                  aria-label="CSDN"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.3 6.5c-.4 0-.7.3-.7.7v9.6c0 .4.3.7.7.7h4.4c.4 0 .7-.3.7-.7V7.2c0-.4-.3-.7-.7-.7H5.3zm8.5 0c-.4 0-.7.3-.7.7v9.6c0 .4.3.7.7.7h4.4c.4 0 .7-.3.7-.7V7.2c0-.4-.3-.7-.7-.7h-4.4zM2 4h20v16H2V4z" />
                  </svg>
                </a>

                {/* 掘金 */}
                <a
                  href="https://juejin.cn/user/4429277496092392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-muted hover:text-accent-cyan transition-colors duration-200"
                  aria-label="掘金"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 36 28">
                    <path d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L9.61993 6.40201L6.66016 8.78181L17.5863 17.3955ZM0 12.1824L2.95977 14.5622L5.91953 12.1824L2.95977 9.80262L0 12.1824ZM17.5863 23.2891L25.5499 17.0029L28.5096 19.3827L17.5863 28L6.66016 19.3827L9.61993 17.0029L17.5863 23.2891Z" />
                  </svg>
                </a>

                {/* 分隔线 */}
                <div className="w-px h-6 border-secondary" style={{ borderWidth: '1px' }}></div>

                {/* 主题切换 */}
                <ThemeToggle />

                {/* 分隔线 */}
                <div className="w-px h-6 border-secondary" style={{ borderWidth: '1px' }}></div>
              </div>

              {/* 联系我按钮 */}
              <a
                href="#contact"
                className="px-6 py-2 rounded-lg font-medium transition-colors duration-200 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400 light:bg-slate-900 light:text-white light:hover:bg-cyan-600"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
