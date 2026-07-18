# Accio Work — XING V7.2 Update

## 核心修复

- Hero 与 Factory 不再使用包含文字的整张 PNG。
- 所有标题、按钮、介绍、卖点和工厂数据均已重构为真实 HTML 文本。
- 保持原有版式、文案、黑色与洋红视觉风格。
- 产品与工厂摄影继续作为独立图片层。
- Header、Footer、Favicon 已加入新的洋红色 XINGYUE Logo。

## 部署

```bash
npm install
npm run build
npm run start
```

可直接覆盖 V7 项目；环境变量与原部署方式保持一致。

## 验收

1. 在 Chrome DevTools 中选择 Hero 标题，确认节点为 `<h1>`，而不是图片。
2. Factory 标题、数字和按钮也必须能够被鼠标选择。
3. 浏览器缩放 100%、125% 和 Retina 屏幕下检查清晰度。
4. 不要重新把 Hero 或 Factory 导出成整张截图。
5. 不要对文字父容器长期应用 `scale()`、`filter` 或持续 `transform`。
