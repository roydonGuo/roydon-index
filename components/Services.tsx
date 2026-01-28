export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: 'Blog',
      subtitle: 'blog.codinggo.cn',
      description: '技术博客',
      url: 'https://blog.codinggo.cn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: 'Shop',
      subtitle: 'shop.codinggo.cn',
      description: '在线商城',
      url: 'https://shop.codinggo.cn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'API',
      subtitle: 'api1.codinggo.cn',
      description: '开放接口',
      url: 'https://api1.codinggo.cn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Tools',
      subtitle: 'tools.codinggo.cn',
      description: '开发者工具',
      url: 'https://tools.codinggo.cn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Nav',
      subtitle: 'nav.codinggo.cn',
      description: '导航网站',
      url: 'https://nav.codinggo.cn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI',
      subtitle: 'ai.codinggo.cn',
      description: 'AI 助手',
      url: 'https://ai.codinggo.cn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Study',
      subtitle: 'study.codinggo.cn',
      description: '学习平台',
      url: 'https://study.codinggo.cn',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Video',
      subtitle: 'video.codinggo.cn',
      description: '流媒体平台',
      url: 'https://video.codinggo.cn',
    },
  ];

  return (
    <section 
      id="services" 
      className="relative py-20 px-6 z-10"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span style={{ color: 'var(--accent-cyan)' }}># </span>
          <span style={{ color: 'var(--text-primary)' }}>在线服务</span>
        </h2>
        <p className="text-center mb-16" style={{ color: 'var(--text-muted)' }}>
          个人开发的在线服务平台
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-6 card-hover cursor-pointer group"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{ 
                  backgroundColor: 'rgba(34, 211, 238, 0.1)',
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  color: 'var(--accent-cyan)'
                }}
              >
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <div className="text-sm mb-2 font-mono" style={{ color: 'var(--text-muted)' }}>
                {service.subtitle}
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
              
              <div 
                className="mt-4 pt-4 flex items-center justify-end"
                style={{ borderTop: '1px solid var(--border-primary)' }}
              >
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  style={{ color: 'var(--accent-cyan)' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
