export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span style={{ color: 'var(--accent-cyan)' }}># </span>
          <span style={{ color: 'var(--text-primary)' }}>共建未来</span>
        </h2>
        
        <p className="text-center mb-12" style={{ color: 'var(--text-muted)' }}>
          无论是有趣的 AI 想法，还在寻求的合作机会，请随时找交流。
        </p>
        
        <div 
          className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-8 text-center mb-12"
          style={{
            background: `linear-gradient(to right, var(--accent-cyan), var(--accent-blue))`
          }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--bg-primary)' }}>
            准备好开始你的项目了吗？
          </h3>
          <p className="mb-6" style={{ color: 'var(--bg-primary)', opacity: 0.8 }}>
            让我们一起将你的想法变为现实
          </p>
          <a
            href="mailto:roydon_guo@163.com"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            style={{
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)'
            }}
          >
            立即联系
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>CSDN</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>技术博客</p>
          </a>
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
