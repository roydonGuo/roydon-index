export default function Projects() {
  const projects = [
    {
      title: 'Sentient Flow Agent',
      description: '基于 LangChain 的企业级 AI 智能体平台，支持多模态输入与 RAG 的智能问答系统。',
      tags: ['Python', 'RAG'],
      badge: 'AI Agent',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      gradient: 'from-purple-500/20 to-blue-500/20',
    },
    {
      title: 'RustStream Engine',
      description: '使用 Rust 开发的高性能流式数据处理引擎，针对工业物联网场景优化。',
      tags: ['Rust', 'gRPC'],
      badge: 'High Performance',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      gradient: 'from-emerald-500/20 to-cyan-500/20',
    },
    {
      title: 'Nexus Cloud Hub',
      description: '基于 Spring Cloud 和 Kubernetes 的微服务治理平台，提供于手动化生产管理。',
      tags: ['Spring', 'K8s'],
      badge: 'Microservices',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      gradient: 'from-blue-500/20 to-indigo-500/20',
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-cyan-400"># </span>
          <span className="text-white">精选项目</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A2238] to-[#141B3A] border border-[#2A3454] rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-200 hover:-translate-y-2 cursor-pointer group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                <svg className="w-20 h-20 text-white/20 group-hover:text-white/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-2 py-1 ${project.badgeColor} border rounded text-xs font-medium whitespace-nowrap`}>
                    {project.badge}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#2A3454]">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Docs
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm inline-flex items-center gap-1">
                    Benchmark
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-mono text-sm hover:bg-cyan-400/10 transition-colors duration-200"
          >
            VIEW ALL GITHUB
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
