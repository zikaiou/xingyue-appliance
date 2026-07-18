# Accio Work — V7.1 验收清单

## A. 字体文件

- [ ] Network 中字体请求返回 200
- [ ] 没有字体 CORS 错误
- [ ] 首选 WOFF2
- [ ] `font-display: swap`
- [ ] CSS 使用的字重与字体文件真实字重一致
- [ ] 禁止浏览器合成粗体/斜体：`font-synthesis: none`
- [ ] 不要仅加载 400/700，却在设计里使用 500/600

推荐：

```css
@font-face {
  font-family: "XingSans";
  src: url("/fonts/xing-sans-variable.woff2") format("woff2-variations");
  font-weight: 300 800;
  font-style: normal;
  font-display: swap;
}
```

## B. Hero 检查

在 DevTools 中选择 Hero 标题，逐级检查父节点：

- [ ] 无 `transform: matrix(...)`
- [ ] 无 `scale(...)`
- [ ] 无 `filter`
- [ ] 无 `backdrop-filter`
- [ ] 无 `perspective`
- [ ] 无持续 `will-change: transform`
- [ ] 无小数缩放
- [ ] 标题不是放在正在移动的背景容器中
- [ ] 标题位置尽量落在整数 CSS 像素
- [ ] 动画结束后 `clearProps`

正确 GSAP 示例：

```js
gsap.from(".hero-title", {
  y: 28,
  opacity: 0,
  duration: 0.85,
  ease: "power3.out",
  clearProps: "transform,opacity,willChange"
});
```

## C. Factory 检查

- [ ] Factory 图片运动只作用于图片层
- [ ] 左侧文案与统计数字不参与持续平移
- [ ] Overlay 不包裹文字
- [ ] Overlay 不使用 `filter: blur(0)`
- [ ] 不在 Factory 根节点上使用 `scale`
- [ ] 动画结束后清除所有文字 transform

建议结构：

```html
<section class="factory">
  <div class="factory__content xing-text-layer" data-crisp-text>...</div>
  <div class="factory__media" data-motion-layer>...</div>
</section>
```

## D. Lenis / 平滑滚动

- [ ] 不对 `body`、`html` 或整页 wrapper 做 scale
- [ ] 不使用长期 `translate3d` 包裹整页
- [ ] 如采用 Lenis，优先让 Lenis 管理滚动，不再叠加第二套 smooth-scroll
- [ ] 页面停止滚动后，文字层回到无 transform 状态

## E. 浏览器验收

分别测试：

- [ ] Windows Chrome，100% 缩放
- [ ] Windows Edge，100% 缩放
- [ ] macOS Chrome
- [ ] macOS Safari
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] 1920×1080
- [ ] 2560×1440 / Retina
- [ ] 1366×768

## F. 对比截图

同一设备、同一浏览器、同一缩放下截图：

1. Hero 大标题
2. Hero 按钮文字
3. Factory 大标题
4. Factory 统计数字

验收目标：

- 字体轮廓不发灰
- 竖线、斜线边缘清楚
- 滚动停止后不再模糊
- 不出现动画结束后文字突然位移
