export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span style={{ color: 'var(--accent-cyan)' }}># </span>
          <span style={{ color: 'var(--text-primary)' }}>关于</span>
        </h2>
        
        {/* 顶部：个人介绍 + 教育背景 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 左侧：个人介绍 */}
          <div>
            <div className="flex items-start gap-3 mb-6">
              <svg 
                className="w-6 h-6 mt-1 flex-shrink-0" 
                style={{ color: 'var(--accent-cyan)' }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>关于我</h3>
                <p className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  你好，我是 <span className="font-semibold" style={{ color: 'var(--accent-cyan)' }}>Roydon</span>。
                  一名充满热情的全栈开发工程师，毕业于 <span style={{ color: 'var(--accent-cyan)' }}>中原工学院</span>（2020-2024）。
                </p>
                <p className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  我的技术栈涵盖 <span style={{ color: 'var(--accent-cyan)' }}>Java 后端</span>、
                  <span style={{ color: 'var(--accent-cyan)' }}>前端框架（Vue/React）</span>、
                  <span style={{ color: 'var(--accent-cyan)' }}>Android 开发</span> 以及 
                  <span style={{ color: 'var(--accent-cyan)' }}>分布式系统</span> 和 
                  <span style={{ color: 'var(--accent-cyan)' }}>AI 应用开发</span>。
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  从实习生到全栈工程师，我始终保持对技术的热爱和探索精神，
                  致力于用代码创造价值，解决实际问题。
                </p>
              </div>
            </div>
            
            {/* 引用卡片 */}
            <div 
              className="rounded-lg p-6 mt-6"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <blockquote 
                className="italic border-l-4 pl-4"
                style={{ 
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--accent-cyan)'
                }}
              >
                &quot;代码不仅是逻辑的堆砌，更是思想的表达。
                我相信技术的力量，也相信持续学习和实践能够让我们走得更远。&quot;
              </blockquote>
            </div>
            
            {/* 统计卡片 */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div 
                className="rounded-lg p-4"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>工作经验</div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>2+ 年</div>
              </div>
              <div 
                className="rounded-lg p-4"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>技术领域</div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>全栈 + AI</div>
              </div>
            </div>
          </div>
          
          {/* 右侧：教育背景卡片 */}
          <div>
            <div 
              className="rounded-xl p-6 card-hover cursor-pointer"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* 学校图标 */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.3)'
                  }}
                >
                  <svg 
                    className="w-7 h-7" 
                    style={{ color: 'var(--accent-cyan)' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                
                {/* 学校信息 */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      中原工学院
                    </h3>
                  </div>
                  <div className="text-sm mb-2" style={{ color: 'var(--accent-cyan)' }}>
                    本科 · 计算机相关专业
                  </div>
                  <span 
                    className="text-sm px-3 py-1 rounded-full inline-block"
                    style={{ 
                      backgroundColor: 'rgba(34, 211, 238, 0.1)',
                      color: 'var(--accent-cyan)',
                      border: '1px solid rgba(34, 211, 238, 0.3)'
                    }}
                  >
                    2020.09 - 2024.06
                  </span>
                </div>
              </div>
              
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                在校期间系统学习计算机基础知识，包括数据结构、算法、操作系统、计算机网络等核心课程。
                积极参与项目实践，培养了扎实的编程能力和问题解决能力。
              </p>
              
              {/* 核心课程 */}
              <div>
                <div className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>核心课程</div>
                <div className="flex flex-wrap gap-2">
                  {['数据结构', '算法设计', '操作系统', '计算机网络', '数据库原理', 'Java 程序设计'].map((course, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 rounded text-xs"
                      style={{ 
                        backgroundColor: 'var(--bg-hover)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-secondary)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 工作经历 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            工作经历
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 当前工作 */}
            <div 
              className="rounded-xl p-6 card-hover cursor-pointer"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-3 h-3 rounded-full mt-2"
                    style={{ backgroundColor: 'var(--accent-cyan)' }}
                  ></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                      广东星时代网络科技有限公司
                    </h4>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>2024.04 - 至今</span>
                  </div>
                  <div className="text-sm mb-3" style={{ color: 'var(--accent-cyan)' }}>
                    全栈开发工程师
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                    负责公司核心业务系统的全栈开发，涉及 Java 后端服务、Vue/React 前端应用、
                    Android 移动端开发。参与分布式系统架构设计，推动 AI 技术在业务场景中的落地应用，
                    提升系统性能和用户体验。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'Vue/React', 'Android', '分布式', 'AI 应用'].map((tech, index) => (
                      <span 
                        key={index}
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
            </div>
            
            {/* 实习经历 */}
            <div 
              className="rounded-xl p-6 card-hover cursor-pointer"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-3 h-3 rounded-full mt-2"
                    style={{ backgroundColor: 'var(--border-secondary)' }}
                  ></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                      杭州标信智链科技有限公司
                    </h4>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>2023.03 - 2023.08</span>
                  </div>
                  <div className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                    Java 实习生
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                    参与企业级 Java 后端项目开发，学习并实践 Spring Boot、MyBatis 等主流框架。
                    协助完成 RESTful API 设计与开发，参与数据库设计和优化工作。
                    这段经历为我打下了扎实的后端开发基础。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Spring Boot', 'MyBatis', 'MySQL', 'RESTful API'].map((tech, index) => (
                      <span 
                        key={index}
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
        
        {/* 年度成就时间线 */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            成长历程
          </h3>
          
          <div className="max-w-5xl mx-auto">
            {/* 时间线容器 */}
            <div className="relative">
              {/* 时间线主轴 */}
              <div 
                className="absolute left-0 right-0 h-1 top-8"
                style={{ backgroundColor: 'var(--border-primary)' }}
              ></div>
              
              {/* 时间线节点 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                {/* 2020-2022: 基础学习 */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center relative z-10"
                      style={{ 
                        backgroundColor: 'var(--bg-card)',
                        border: '3px solid var(--accent-cyan)'
                      }}
                    >
                      <svg 
                        className="w-8 h-8" 
                        style={{ color: 'var(--accent-cyan)' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>2020-2022</div>
                  <div className="text-sm mb-2" style={{ color: 'var(--accent-cyan)' }}>基础学习</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    系统学习计算机基础知识，掌握编程基本功
                  </p>
                </div>
                
                {/* 2023: Java 后端 */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center relative z-10"
                      style={{ 
                        backgroundColor: 'var(--bg-card)',
                        border: '3px solid var(--accent-cyan)'
                      }}
                    >
                      <svg 
                        className="w-8 h-8" 
                        style={{ color: 'var(--accent-cyan)' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>2023</div>
                  <div className="text-sm mb-2" style={{ color: 'var(--accent-cyan)' }}>Java 后端</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    实习经历，深入 Spring 生态，构建企业级应用
                  </p>
                </div>
                
                {/* 2024: 全栈进阶 */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center relative z-10"
                      style={{ 
                        backgroundColor: 'var(--bg-card)',
                        border: '3px solid var(--accent-cyan)'
                      }}
                    >
                      <svg 
                        className="w-8 h-8" 
                        style={{ color: 'var(--accent-cyan)' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>2024</div>
                  <div className="text-sm mb-2" style={{ color: 'var(--accent-cyan)' }}>全栈进阶</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    前后端移动端全面发展，参与多个企业级项目
                  </p>
                </div>
                
                {/* 2025-至今: AI 探索 */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center relative z-10"
                      style={{ 
                        backgroundColor: 'var(--bg-card)',
                        border: '3px solid var(--accent-cyan)'
                      }}
                    >
                      <svg 
                        className="w-8 h-8" 
                        style={{ color: 'var(--accent-cyan)' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>2025-至今</div>
                  <div className="text-sm mb-2" style={{ color: 'var(--accent-cyan)' }}>AI 探索</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    深入 AI 应用开发，探索 LangChain 和 RAG 技术
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
