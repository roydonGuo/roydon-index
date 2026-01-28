export default function Skills() {
  const skillCategories = [
    {
      title: '后端开发',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['Java', 'Spring Boot', 'Spring Cloud', 'MyBatis', 'MySQL', 'Redis', 'RabbitMQ'],
      color: 'cyan',
    },
    {
      title: '前端开发',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Element UI', 'Ant Design'],
      color: 'blue',
    },
    {
      title: '移动开发',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['Android', 'Java', 'Kotlin', 'Jetpack', 'Material Design', 'Retrofit', 'Room'],
      color: 'green',
    },
    {
      title: '分布式 & 微服务',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ['Nacos', 'Dubbo', 'Sentinel', 'Gateway', 'Feign', 'Docker', 'Nginx'],
      color: 'purple',
    },
    {
      title: 'AI & 智能应用',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: ['Python', 'LangChain', 'OpenAI API', 'RAG', 'Prompt Engineering', 'AI Agent'],
      color: 'pink',
    },
    {
      title: '开发工具 & 其他',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Git', 'Maven', 'IDEA', 'VS Code', 'Postman', 'Linux', 'Jenkins'],
      color: 'orange',
    },
  ];

  return (
    <section 
      id="skills" 
      className="relative py-20 px-6 z-10"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span style={{ color: 'var(--accent-cyan)' }}># </span>
          <span style={{ color: 'var(--text-primary)' }}>技术栈</span>
        </h2>
        <p className="text-center mb-16" style={{ color: 'var(--text-muted)' }}>
          全栈开发 · 移动端 · 分布式系统 · AI 应用
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 card-hover cursor-pointer"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge px-3 py-1 rounded-lg text-sm cursor-pointer"
                    style={{ 
                      backgroundColor: 'var(--bg-hover)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 技能统计 */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              7+
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>后端技术</div>
          </div>
          
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              7+
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>前端框架</div>
          </div>
          
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              7+
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>移动开发</div>
          </div>
          
          <div 
            className="text-center p-6 rounded-xl"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-cyan)' }}>
              40+
            </div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>技术栈总数</div>
          </div>
        </div>

        {/* 技术路线图 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            技术成长路线
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 时间线 */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5"
                style={{ backgroundColor: 'var(--border-primary)' }}
              ></div>
              
              <div className="space-y-12">
                {/* 2024 - 全栈 + AI */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div 
                      className="px-4 py-2 rounded-full font-bold"
                      style={{ 
                        backgroundColor: 'var(--bg-card)',
                        border: '2px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      2024 - 至今
                    </div>
                  </div>
                  <div 
                    className="rounded-xl p-6"
                    style={{ 
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-primary)'
                    }}
                  >
                    <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      全栈开发 + AI 应用
                    </h4>
                    <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                      深入分布式系统架构，探索 AI 技术在业务场景中的应用，
                      掌握 LangChain、RAG 等前沿技术。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Spring Cloud', 'Vue 3', 'React', 'Android', 'LangChain', 'AI Agent'].map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 rounded text-xs"
                          style={{ 
                            backgroundColor: 'rgba(34, 211, 238, 0.1)',
                            color: 'var(--accent-cyan)',
                            border: '1px solid rgba(34, 211, 238, 0.3)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2023 - Java 后端 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div 
                      className="px-4 py-2 rounded-full font-bold"
                      style={{ 
                        backgroundColor: 'var(--bg-card)',
                        border: '2px solid var(--border-secondary)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      2023
                    </div>
                  </div>
                  <div 
                    className="rounded-xl p-6"
                    style={{ 
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-primary)'
                    }}
                  >
                    <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Java 后端开发
                    </h4>
                    <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                      系统学习 Java 后端技术栈，掌握 Spring Boot、MyBatis 等主流框架，
                      参与企业级项目开发。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Spring Boot', 'MyBatis', 'MySQL', 'Redis', 'Maven'].map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 rounded text-xs"
                          style={{ 
                            backgroundColor: 'var(--bg-hover)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-secondary)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2020-2022 - 基础学习 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div 
                      className="px-4 py-2 rounded-full font-bold"
                      style={{ 
                        backgroundColor: 'var(--bg-card)',
                        border: '2px solid var(--border-secondary)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      2020 - 2022
                    </div>
                  </div>
                  <div 
                    className="rounded-xl p-6"
                    style={{ 
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-primary)'
                    }}
                  >
                    <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      计算机基础 & Web 开发
                    </h4>
                    <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                      学习计算机基础知识，掌握数据结构、算法、操作系统等核心课程，
                      开始接触 Web 开发技术。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'HTML/CSS', 'JavaScript', 'MySQL', '数据结构', '算法'].map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 rounded text-xs"
                          style={{ 
                            backgroundColor: 'var(--bg-hover)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-secondary)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
