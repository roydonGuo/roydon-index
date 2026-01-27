export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-cyan-400"># </span>
          <span className="text-white">关于</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-start gap-3 mb-6">
              <svg className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">关于我</h3>
                <p className="text-slate-400 leading-relaxed">
                  你好，我是 <span className="text-cyan-400 font-semibold">Corbin</span>。
                  一名专注于 <span className="text-cyan-400">新能源与半导体行业</span> 的全栈工程师。
                </p>
                <p className="text-slate-400 leading-relaxed mt-3">
                  我的技术栈学习 <span className="text-cyan-400">&quot;业务驱动技术，热爱融合智能&quot;</span>，
                  在实际的工业场景下设计 高可用(HA)和分布式系统，解决数据竞争入与高并发难题。
                </p>
              </div>
            </div>
            
            <div className="bg-[#1A2238] border border-[#2A3454] rounded-lg p-6 mt-6">
              <blockquote className="text-slate-400 italic border-l-4 border-cyan-400 pl-4">
                &quot;我相信技术不仅是代码的堆砌，更是对现实世界的深度抽象与重塑。
                持续重构与自我，在不确定性中寻找定义的超优解，这是我作为工程师的终身浪漫。&quot;
              </blockquote>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#1A2238] border border-[#2A3454] rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-1">领域深耕</div>
                <div className="text-white font-semibold">新能源 · 半导体 · 工业互联</div>
              </div>
              <div className="bg-[#1A2238] border border-[#2A3454] rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-1">技术核心</div>
                <div className="text-white font-semibold">分布式架构 · AI 智能化</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              职业轨迹
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-2 border-cyan-400 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm text-slate-400">2025.09 - PRESENT</span>
                </div>
                <h4 className="text-white font-semibold mb-1">珠海迈为技术有限公司</h4>
                <div className="text-sm text-slate-400 mb-2">IT · 半导体方向</div>
                <p className="text-slate-400 text-sm">
                  负责公司内部核心业务系统的架构化与智能化开发，推动半导体生产线的数字化转型，
                  提升生产效率和系统稳定性。
                </p>
              </div>
              
              <div className="border-l-2 border-slate-600 pl-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span className="text-sm text-slate-400">2024.05 - 2025.09</span>
                </div>
                <h4 className="text-white font-semibold mb-1">珠海派诺科技股份有限公司</h4>
                <div className="text-sm text-slate-400 mb-2">Java · 研发服务团</div>
                <p className="text-slate-400 text-sm">
                  设计并实现了数个开发框架和数据驱动的数据采集服务，支撑了大规模数据处理和
                  实时分析需求，为公司业务决策提供了强有力的数据支持。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
