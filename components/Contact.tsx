export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span style={{ color: 'var(--accent-cyan)' }}># </span>
          <span style={{ color: 'var(--text-primary)' }}>联系我</span>
        </h2>
        
        <p className="text-center mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
          欢迎交流技术、探讨项目合作，或者只是简单地打个招呼
        </p>
        
        <div 
          className="rounded-2xl p-8 text-center mb-12"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '2px solid var(--accent-cyan)'
          }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            寻求技术合作或项目咨询？
          </h3>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            我专注于全栈开发、分布式系统和 AI 应用，期待与你一起创造价值
          </p>
          <a
            href="mailto:roydon_guo@163.com"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--accent-cyan)',
              color: 'var(--bg-primary)'
            }}
          >
            发送邮件
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:roydon_guo@163.com"
            className="rounded-xl p-6 card-hover transition-all duration-200 text-center group cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: 'var(--accent-cyan)'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>邮箱</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>roydon_guo@163.com</p>
          </a>
          
          <a
            href="https://github.com/roydonGuo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-6 card-hover transition-all duration-200 text-center group cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: 'var(--accent-cyan)'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>GitHub</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>@roydonGuo</p>
          </a>
          
          <a
            href="https://blog.csdn.net/weixin_43934607"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-6 card-hover transition-all duration-200 text-center group cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: 'var(--accent-cyan)'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.05 3.5c-.46-.45-1.12-.5-1.7-.5H5.65c-.58 0-1.24.05-1.7.5C3.5 3.95 3 4.6 3 5.35v13.3c0 .75.5 1.4.95 1.85.46.45 1.12.5 1.7.5h12.7c.58 0 1.24-.05 1.7-.5.45-.45.95-1.1.95-1.85V5.35c0-.75-.5-1.4-.95-1.85zM12 18.5c-3.58 0-6.5-2.92-6.5-6.5S8.42 5.5 12 5.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5zm0-11c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>CSDN</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>技术博客</p>
          </a>
          
          <a
            href="https://juejin.cn/user/3350967174838701"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-6 card-hover transition-all duration-200 text-center group cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: 'var(--accent-cyan)'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 36 28">
                <path d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>掘金</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>技术社区</p>
          </a>
        </div>
        
        {/* 其他联系方式 */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            更多联系方式
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div 
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>微信：</span>
              <span className="text-sm font-semibold ml-2" style={{ color: 'var(--text-primary)' }}>roydon_guo</span>
            </div>
            <div 
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>QQ：</span>
              <span className="text-sm font-semibold ml-2" style={{ color: 'var(--text-primary)' }}>可通过邮件获取</span>
            </div>
          </div>
        </div>
        
        <footer 
          className="mt-20 pt-8 text-center text-sm"
          style={{ 
            borderTop: '1px solid var(--border-primary)',
            color: 'var(--text-muted)'
          }}
        >
          <p>© 2026 Roydon. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
