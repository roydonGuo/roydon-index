'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in-left">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border animate-scale-in"
            style={{ 
              backgroundColor: 'rgba(34, 211, 238, 0.1)',
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-cyan)' }}></div>
            <span className="text-sm font-mono" style={{ color: 'var(--accent-cyan)' }}>SYSTEM ONLINE 👾</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <div className="mb-2 animate-fade-in-up" style={{ color: 'var(--text-primary)' }}>👋HEY,I AM</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient animate-fade-in-up animation-delay-100">
              Roydon
            </div>
          </h1>
          
          <div className="text-xl mb-6 font-mono animate-fade-in-up animation-delay-200" style={{ color: 'var(--accent-cyan)' }}>&gt; 全栈开发工程师</div>
          
          <p className="text-lg mb-4 animate-fade-in-up animation-delay-300" style={{ color: 'var(--text-secondary)' }}>
            专注于 <span style={{ color: 'var(--accent-cyan)' }}>Java 后端</span>、
            <span style={{ color: 'var(--accent-cyan)' }}>前端开发</span> 和 
            <span style={{ color: 'var(--accent-cyan)' }}>Android 移动端</span>，
            致力于 <span style={{ color: 'var(--accent-cyan)' }}>分布式系统</span> 和 
            <span style={{ color: 'var(--accent-cyan)' }}>AI 应用</span> 的落地实践。
          </p>
          
          <p className="mb-8 animate-fade-in-up animation-delay-400" style={{ color: 'var(--text-secondary)' }}>
            从 Spring Boot 到 Vue/React，从微服务架构到 AI PaaS 平台，用代码创造价值。
          </p>
          
          <div className="flex gap-4 animate-fade-in-up animation-delay-500">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full font-semibold transition-all duration-200 inline-flex items-center gap-2 hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--accent-cyan)',
                color: 'var(--bg-primary)'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              查看项目
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border rounded-full font-semibold transition-all duration-200 inline-flex items-center gap-2 hover:scale-105 hover:border-accent-cyan"
              style={{ 
                borderColor: 'var(--border-secondary)',
                color: 'var(--text-secondary)'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              联系我
            </a>
          </div>
        </div>
        
        {/* 代码窗口 */}
        <div className="code-window rounded-xl overflow-hidden animate-fade-in-right animate-float">
          <div className="code-header px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm ml-2 font-mono" style={{ color: 'var(--text-muted)' }}>roydon/profile.java</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="mb-2">
              <span className="text-purple-400">public class</span>{' '}
              <span className="text-yellow-400">Developer</span> {'{'}
            </div>
            <div className="mb-4"></div>
            <div className="ml-4 mb-2">
              <span className="text-purple-400">private</span>{' '}
              <span style={{ color: 'var(--accent-cyan)' }}>String</span>{' '}
              name = <span className="text-green-400">&quot;Roydon&quot;</span>;
            </div>
            <div className="ml-4 mb-2">
              <span className="text-purple-400">private</span>{' '}
              <span style={{ color: 'var(--accent-cyan)' }}>String</span>{' '}
              role = <span className="text-green-400">&quot;全栈工程师&quot;</span>;
            </div>
            <div className="mb-4"></div>
            <div className="ml-4 mb-2" style={{ color: 'var(--text-muted)' }}>// 技术栈</div>
            <div className="ml-4 mb-2">
              <span className="text-purple-400">private</span>{' '}
              <span style={{ color: 'var(--accent-cyan)' }}>String[]</span>{' '}
              skills = {'{'}
            </div>
            <div className="ml-8 mb-2">
              <span className="text-green-400">&quot;Java&quot;</span>,{' '}
              <span className="text-green-400">&quot;Spring Boot&quot;</span>,
            </div>
            <div className="ml-8 mb-2">
              <span className="text-green-400">&quot;Vue&quot;</span>,{' '}
              <span className="text-green-400">&quot;React&quot;</span>,{' '}
              <span className="text-green-400">&quot;Android&quot;</span>,
            </div>
            <div className="ml-8 mb-2">
              <span className="text-green-400">&quot;分布式&quot;</span>,{' '}
              <span className="text-green-400">&quot;AI 应用&quot;</span>
            </div>
            <div className="ml-4 mb-2">{'};'}</div>
            <div className="mb-4"></div>
            <div className="ml-4 mb-2" style={{ color: 'var(--text-muted)' }}>// 使命</div>
            <div className="ml-4 mb-2">
              <span className="text-purple-400">public void</span>{' '}
              <span className="text-yellow-400">mission</span>() {'{'}
            </div>
            <div className="ml-8 mb-2">
              System.out.<span className="text-yellow-400">println</span>(
              <span className="text-green-400">&quot;用代码创造价值&quot;</span>);
            </div>
            <div className="ml-8 mb-2">
              System.out.<span className="text-yellow-400">println</span>(
              <span className="text-green-400">&quot;持续学习与成长&quot;</span>);
              <span className="animate-pulse">|</span>
            </div>
            <div className="ml-4 mb-2">{'}'}</div>
            <div className="mb-2">{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
