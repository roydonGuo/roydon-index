# 开发者个人导航网站

基于 Next.js 15 + TypeScript + Tailwind CSS 构建的现代化个人网站。

## 特性

- ⚡ Next.js 15 App Router
- 🎨 Tailwind CSS 样式
- 🌙 深色 Cyberpunk 主题
- 📱 完全响应式设计
- ✨ 流畅的动画效果
- 🎯 SEO 优化

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm run start
```

## 项目结构

```
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
├── components/
│   ├── Navbar.tsx       # 导航栏
│   ├── Hero.tsx         # Hero 区域
│   ├── About.tsx        # 关于我
│   ├── Skills.tsx       # 技术栈
│   ├── Projects.tsx     # 项目展示
│   ├── Services.tsx     # 在线服务
│   ├── Contact.tsx      # 联系方式
│   └── StarField.tsx    # 星空背景
├── public/              # 静态资源
└── tailwind.config.ts   # Tailwind 配置
```

## 自定义

### 修改个人信息

编辑以下文件中的内容：

- `components/Hero.tsx` - 首页介绍
- `components/About.tsx` - 关于我和职业经历
- `components/Skills.tsx` - 技术栈
- `components/Projects.tsx` - 项目展示
- `components/Services.tsx` - 在线服务
- `components/Contact.tsx` - 联系方式

### 修改主题颜色

编辑 `app/globals.css` 中的 CSS 变量：

```css
:root {
  --background: #0A0E27;
  --accent-cyan: #22D3EE;
  --accent-blue: #3B82F6;
}
```

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - 等宽字体

## License

MIT
