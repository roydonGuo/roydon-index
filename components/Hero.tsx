export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-cyan-400/10 border border-cyan-400/30">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-mono">SYSTEM ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <div className="text-white mb-2">I AM</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              DEVELOPER
            </div>
          </h1>
          
          <div className="text-cyan-400 text-xl mb-6 font-mono">&gt; System Engineer</div>
          
          <p className="text-slate-400 text-lg mb-4">
            专注于 <span className="text-cyan-400">新能源 & 半导体</span> 领域的高性能后端架构，
            致力于 <span className="text-cyan-400">AI 智能应用</span> 落地实践。
          </p>
          
          <p className="text-slate-400 mb-8">
            以 Go/Java/Rust 为剑，打造极致稳定的分布式系统。
          </p>
          
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              查看项目
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              联系我
            </a>
          </div>
        </div>
        
        {/* 代码窗口 */}
        <div className="bg-[#1E293B] border border-slate-700 rounded-xl overflow-hidden">
          <div className="bg-[#0F172A] px-4 py-3 border-b border-slate-700 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-400 text-sm ml-2 font-mono">developer/intro</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="mb-2">
              <span className="text-purple-400">package</span>{' '}
              <span className="text-cyan-400">main</span>
            </div>
            <div className="mb-4"></div>
            <div className="mb-2">
              <span className="text-purple-400">import</span>{' '}
              <span className="text-green-400">&quot;fmt&quot;</span>
            </div>
            <div className="mb-4"></div>
            <div className="mb-2">
              <span className="text-purple-400">func</span>{' '}
              <span className="text-yellow-400">main</span>() {'{'}
            </div>
            <div className="ml-4 mb-2 text-slate-500">// Start the Journey</div>
            <div className="ml-4 mb-2">
              fmt.<span className="text-yellow-400">Println</span>(
              <span className="text-green-400">&quot;Hello, World!&quot;</span>)
            </div>
            <div className="mb-4"></div>
            <div className="ml-4 mb-2 text-slate-500">// Mission</div>
            <div className="ml-4 mb-2">
              fmt.<span className="text-yellow-400">Println</span>(
              <span className="text-green-400">&quot;Designing Scalable Systems.&quot;</span>)
            </div>
            <div className="ml-4 mb-2">
              fmt.<span className="text-yellow-400">Println</span>(
              <span className="text-green-400">&quot;Exploring AI Boundaries.&quot;</span>)
              <span className="animate-pulse">|</span>
            </div>
            <div className="mb-2">{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
