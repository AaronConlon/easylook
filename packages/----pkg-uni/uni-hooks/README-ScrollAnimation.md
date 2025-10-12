# 滚动动画系统使用指南

## 📖 概述

全局滚动动画系统提供了一个简单易用的方式来为页面元素添加进入视口时的动画效果。基于 Intersection Observer API 实现，性能优秀，使用简单。

## 🚀 快速开始

### 1. 在应用层级集成 Hook

已在 `MasterLayout.tsx` 中集成：

```tsx
import { useScrollAnimation } from '----pkg-uni/uni-hooks/useScrollAnimation';

export const MasterLayout = () => {
  // 全局滚动动画
  useScrollAnimation({
    targetClassName: 'scroll-animate',
    threshold: 200,
    activeClassName: 'scroll-animate-in',
    once: true,
  });

  // ... 其他代码
};
```

### 2. 在组件中使用

只需要在需要动画的元素上添加 `scroll-animate` 类名：

```tsx
// 基础用法
<div className="scroll-animate">
  这个元素会在进入视口时淡入
</div>

// 带延迟
<div className="scroll-animate" data-delay="200">
  延迟 200ms 后淡入
</div>

// 使用 cx 工具函数
<div className={cx(styles['my-class'], 'scroll-animate')}>
  结合 CSS Modules 使用
</div>
```

## 🎨 动画效果类型

### 方向动画

```tsx
// 默认：从下往上淡入
<div className="scroll-animate">默认效果</div>

// 从下往上淡入
<div className="scroll-animate scroll-animate-up">从下往上</div>

// 从上往下淡入
<div className="scroll-animate scroll-animate-down">从上往下</div>

// 从左往右淡入
<div className="scroll-animate scroll-animate-left">从左往右</div>

// 从右往左淡入
<div className="scroll-animate scroll-animate-right">从右往左</div>

// 纯淡入（无位移）
<div className="scroll-animate scroll-animate-fade">纯淡入</div>

// 缩放淡入
<div className="scroll-animate scroll-animate-scale">缩放淡入</div>
```

### 速度控制

```tsx
// 默认速度：0.8s
<div className="scroll-animate">默认速度</div>

// 快速：0.4s
<div className="scroll-animate scroll-animate-fast">快速</div>

// 慢速：1.2s
<div className="scroll-animate scroll-animate-slow">慢速</div>
```

### 延迟控制

```tsx
// 使用 data-delay 属性（推荐）
<div className="scroll-animate" data-delay="0">立即</div>
<div className="scroll-animate" data-delay="100">延迟 100ms</div>
<div className="scroll-animate" data-delay="200">延迟 200ms</div>

// 使用延迟类
<div className="scroll-animate scroll-animate-delay-1">延迟 0.1s</div>
<div className="scroll-animate scroll-animate-delay-2">延迟 0.2s</div>
<div className="scroll-animate scroll-animate-delay-3">延迟 0.3s</div>
<div className="scroll-animate scroll-animate-delay-4">延迟 0.4s</div>
<div className="scroll-animate scroll-animate-delay-5">延迟 0.5s</div>
```

## 📝 实际案例

### 案例 1：发展历程时间轴

```tsx
{timelineData.map((item, index) => (
  <div
    key={index}
    className={cx(styles['timeline-item'], 'scroll-animate')}
    data-delay={index * 100} // 每个元素延迟 100ms
  >
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </div>
))}
```

### 案例 2：公司介绍段落

```tsx
<div className={cx(styles['intro-header'], 'scroll-animate')}>
  <h2>标题</h2>
</div>

<p
  className={cx(styles['intro-paragraph'], 'scroll-animate')}
  data-delay="100"
>
  第一段内容
</p>

<p
  className={cx(styles['intro-paragraph'], 'scroll-animate')}
  data-delay="200"
>
  第二段内容
</p>
```

### 案例 3：特性卡片网格

```tsx
<div className={styles['feature-cards']}>
  {features.map((feature, index) => (
    <div
      key={index}
      className={cx(styles['feature-card'], 'scroll-animate', 'scroll-animate-scale')}
      data-delay={index * 100}
    >
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  ))}
</div>
```

## ⚙️ 高级配置

### Hook 配置选项

```tsx
useScrollAnimation({
  // 监听的类名
  targetClassName: 'scroll-animate',
  
  // 进入视口的阈值（像素），元素底部距离视口底部的距离
  threshold: 200,
  
  // 激活后的类名
  activeClassName: 'scroll-animate-in',
  
  // 是否只触发一次（true = 元素进入后不再触发，false = 元素离开视口后会重置）
  once: true,
  
  // 默认延迟（毫秒）
  delay: 0,
});
```

### 自定义动画

如果需要自定义动画效果，可以在 `global.scss` 中添加新的关键帧：

```scss
@keyframes myCustomAnimation {
  from {
    opacity: 0;
    transform: rotateY(90deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

.scroll-animate-custom.scroll-animate-in {
  animation-name: myCustomAnimation;
}
```

然后在组件中使用：

```tsx
<div className="scroll-animate scroll-animate-custom">
  自定义动画
</div>
```

## 🎯 最佳实践

### 1. 延迟渐进式出现

为列表项设置递增的延迟，创造流畅的渐进式出现效果：

```tsx
{items.map((item, index) => (
  <div
    key={index}
    className="scroll-animate"
    data-delay={index * 100} // 每个元素间隔 100ms
  >
    {item.content}
  </div>
))}
```

### 2. 组合多个动画类

```tsx
<div className="scroll-animate scroll-animate-left scroll-animate-fast">
  从左快速淡入
</div>
```

### 3. 响应式动画

在移动端和桌面端使用不同的动画：

```tsx
<div className={cx(
  'scroll-animate',
  isMobile ? 'scroll-animate-up' : 'scroll-animate-left'
)}>
  响应式动画
</div>
```

### 4. 避免过度使用

- 不要在每个小元素上都添加动画
- 优先为重要的内容区块添加动画
- 保持动画一致性，不要混用太多不同类型的动画

## 🔧 技术细节

### 工作原理

1. **MutationObserver**: 监听 DOM 变化，自动检测新添加的带有 `scroll-animate` 类的元素
2. **IntersectionObserver**: 监听元素是否进入视口
3. **CSS 动画**: 使用 CSS 关键帧动画实现流畅的效果
4. **性能优化**: 使用 `will-change` 提示浏览器优化动画性能

### 内存管理与防泄漏机制

为了确保没有内存泄漏，实现了以下防护措施：

#### 1. **定时器清理**
```typescript
// 存储所有待执行的定时器ID
const pendingTimeouts = new Set<number>();

// 组件卸载时清理所有定时器
return () => {
  pendingTimeouts.forEach((timeoutId) => {
    window.clearTimeout(timeoutId);
  });
  pendingTimeouts.clear();
};
```

#### 2. **元素存在性检查**
```typescript
// 在回调中检查元素是否还在 DOM 中
if (!document.body.contains(target)) {
  observer.unobserve(target);
  return;
}

// 定时器触发前再次检查
setTimeout(() => {
  if (!document.body.contains(target)) {
    return;
  }
  // ... 执行动画
}, delay);
```

#### 3. **移除节点的自动清理**
```typescript
// MutationObserver 监听被移除的节点
mutation.removedNodes.forEach((node) => {
  if (node.nodeType === 1) {
    const element = node as HTMLElement;
    
    // 停止观察已移除的元素
    if (element.classList?.contains(targetClassName)) {
      observer.unobserve(element);
    }
    
    // 同时清理子元素
    const children = element.querySelectorAll?.(`.${targetClassName}`);
    children?.forEach((child) => {
      observer.unobserve(child);
    });
  }
});
```

#### 4. **观察器完全断开**
```typescript
return () => {
  // 清理所有待执行的定时器
  pendingTimeouts.forEach((timeoutId) => {
    window.clearTimeout(timeoutId);
  });
  pendingTimeouts.clear();

  // 断开所有观察器
  observer.disconnect();
  mutationObserver.disconnect();
};
```

### 内存泄漏防护特性

✅ **定时器追踪**: 所有 `setTimeout` 都被追踪，组件卸载时自动清理  
✅ **元素验证**: 在触发动画前检查元素是否仍在 DOM 中  
✅ **自动取消观察**: 元素被移除时自动停止观察  
✅ **观察器清理**: 组件卸载时完全断开所有观察器  
✅ **引用清除**: 使用 `Set.clear()` 清除所有引用  

### 浏览器兼容性

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

对于不支持 Intersection Observer 的浏览器，元素会直接显示（优雅降级）。

## 📚 相关文件

- **Hook**: `/packages/----pkg-uni/uni-hooks/useScrollAnimation.ts`
- **样式**: `/packages/app-website/src/styles/global.scss`
- **集成**: `/packages/app-website/src/layouts/MasterLayout/MasterLayout.tsx`

## 💡 提示

- 使用 `data-delay` 属性比使用延迟类更灵活，可以精确控制每个元素的延迟时间
- 动画会自动适配深色模式
- 所有动画都使用 `cubic-bezier(0.25, 0.46, 0.45, 0.94)` 缓动函数，确保流畅自然
- 如果需要禁用某个元素的动画，只需不添加 `scroll-animate` 类即可

