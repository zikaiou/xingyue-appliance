# XING Website V7.3 — Full Replacement Package

这是完整网站源码包，不是补丁包。Accio Work 可用本目录直接替换现有项目。

## 已包含

- 完整 Next.js 项目源码
- 首页全部模块
- Hero：真实 HTML/CSS 文字，保持既定设计
- Brand Film 全屏视频区
- ST-812 Featured Product
- 12 个产品卡片展示区
- Factory：真实 HTML/CSS 文字与流水线图片
- Header / Footer 新 XINGYUE 洋红 Logo
- Favicon
- Products、OEM、Factory、About、Blog、Contact 页面
- Sitemap、Robots、SEO metadata
- 响应式样式及动态体验

## 直接替换步骤

1. 备份当前线上项目及环境变量。
2. 删除旧项目代码，但保留部署平台里的环境变量和域名配置。
3. 上传本包内 `XING_Official_Website_V7.3_Full_Replacement` 文件夹中的全部内容。
4. 执行 `npm install`。
5. 执行 `npm run build`。
6. 部署构建结果。
7. 清除 CDN 和浏览器缓存。

## 注意

- 不要只复制 CSS 或单个组件；必须整体替换。
- 不要重新使用旧版 `hero-locked.png` 或 `factory-locked.png` 作为整屏页面。
- Hero 与 Factory 的文字必须保持为可选择的 HTML 文字。
- Logo 文件位于 `public/images/v72/`。
