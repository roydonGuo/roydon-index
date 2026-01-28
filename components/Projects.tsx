export default function Projects() {
  const projects = [
    {
      title: '芝士学爆',
      subtitle: '短视频学习平台',
      description: '一个创新的短视频教育平台，结合抖音式的短视频体验与在线学习功能，为用户提供碎片化、趣味化的学习方式。支持视频上传、点赞评论、个性化推荐等核心功能。',
      tags: ['Vue.js', 'Spring Boot', 'MySQL', 'Redis', 'FFmpeg'],
      badge: '在线访问',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      gradient: 'from-emerald-500/20 to-cyan-500/20',
      link: 'http://43.240.221.8:5173',
      features: ['短视频播放', '智能推荐', '互动评论', '用户系统'],
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: '服装行业 SaaS ERP',
      subtitle: '企业资源管理系统',
      description: '面向服装行业的一体化 SaaS ERP 解决方案，涵盖采购、库存、销售、财务等全业务流程。采用微服务架构，支持多租户、多门店管理，帮助企业实现数字化转型。',
      tags: ['Spring Cloud', 'Vue 3', 'MySQL', 'Redis', 'RabbitMQ'],
      badge: '企业级',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      features: ['多租户架构', '库存管理', '订单系统', '数据报表'],
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: '支付中台系统',
      subtitle: '统一支付网关',
      description: '企业级支付中台解决方案，整合微信支付、支付宝等多种支付渠道，提供统一的支付接口。支持订单管理、对账系统、退款处理等完整支付流程，确保交易安全可靠。',
      tags: ['Spring Boot', 'MySQL', 'Redis', 'RocketMQ', 'Docker'],
      badge: '高并发',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      gradient: 'from-purple-500/20 to-pink-500/20',
      features: ['多渠道支付', '订单管理', '自动分账', '安全加密'],
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: '超市收银 SaaS 系统',
      subtitle: '零售行业 POS 系统',
      description: '面向零售行业的智能收银解决方案，支持快速收银、订单挂单、会员管理、商品管理等核心功能。界面简洁直观，操作流畅高效，帮助商家提升收银效率和顾客体验。',
      tags: ['Vue.js', 'Spring Boot', 'MySQL', 'Redis', 'WebSocket'],
      badge: '零售行业',
      badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      features: ['快速收银', '订单挂单', '会员管理', '商品管理'],
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'AI PaaS 平台',
      subtitle: '基于 Spring AI 的智能平台',
      description: '企业级 AI 应用开发平台，基于 Spring AI 框架构建。提供 AI 模型接入、Prompt 管理、向量数据库、RAG 检索等核心能力，帮助企业快速构建智能应用。',
      tags: ['Spring AI', 'LangChain', 'Vector DB', 'OpenAI', 'Python'],
      badge: 'AI 驱动',
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      features: ['模型管理', 'RAG 检索', 'Prompt 工程', 'API 网关'],
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: '企业定制 CRM',
      subtitle: '客户关系管理系统',
      description: '为企业量身定制的 CRM 系统，涵盖客户管理、销售跟进、商机管理、数据分析等功能。支持移动端访问，帮助销售团队提升工作效率，实现精细化客户运营。',
      tags: ['Spring Boot', 'Vue.js', 'Android', 'MySQL', 'Echarts'],
      badge: '全平台',
      badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      gradient: 'from-orange-500/20 to-red-500/20',
      features: ['客户管理', '销售漏斗', '移动办公', '数据看板'],
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span style={{ color: 'var(--accent-cyan)' }}># </span>
          <span style={{ color: 'var(--text-primary)' }}>项目经验</span>
        </h2>
        <p className="text-center mb-16" style={{ color: 'var(--text-muted)' }}>
          从短视频平台到企业级系统，从支付中台到 AI 应用
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden card-hover cursor-pointer"
              style={{ 
                background: `linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)`,
                border: '1px solid var(--border-primary)'
              }}
            >
              {/* 项目头部 */}
              <div 
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                <div style={{ color: 'var(--text-primary)', opacity: 0.2 }}>
                  {project.icon}
                </div>
              </div>
              
              {/* 项目内容 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <span 
                    className={`px-2 py-1 border rounded text-xs font-medium whitespace-nowrap ml-2`}
                    style={{
                      backgroundColor: 'rgba(34, 211, 238, 0.1)',
                      color: 'var(--accent-cyan)',
                      borderColor: 'rgba(34, 211, 238, 0.3)'
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
                
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                
                {/* 核心功能 */}
                <div className="mb-4">
                  <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>核心功能</div>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-1 text-xs"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <svg className="w-3 h-3 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 技术栈 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded text-xs"
                      style={{ 
                        backgroundColor: 'var(--bg-hover)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* 操作按钮 */}
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-primary)' }}>
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                      style={{ color: 'var(--accent-cyan)' }}
                    >
                      在线访问
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>企业内部项目</span>
                  )}
                  <button 
                    className="text-sm inline-flex items-center gap-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    查看详情
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 项目统计 */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              6+
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>完成项目</div>
          </div>
          
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              4
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>企业级系统</div>
          </div>
          
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              100%
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>项目交付率</div>
          </div>
          
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              全栈
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>开发能力</div>
          </div>
        </div>

        {/* GitHub 链接 */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/roydonGuo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm transition-all duration-200"
            style={{ 
              border: '1px solid var(--accent-cyan)',
              color: 'var(--accent-cyan)'
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            VIEW ALL ON GITHUB
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
