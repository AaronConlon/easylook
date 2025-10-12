# EyeScience 卡片图标说明

## 需要的图片

请将以下两张圆形图标放置在 `public/` 目录下：

### 1. eye-care-icon.png
- **用途：** 视疲劳患者卡片右上角图标
- **建议内容：** 眼睛护理、视力保护、眼部健康相关图标
- **尺寸要求：** 建议 144x144px 或更高（会自动缩放到 64-72px）
- **格式：** PNG（透明背景）
- **形状：** 圆形或方形（会自动裁剪为圆形）
- **颜色：** 建议使用白色或浅色图标，在深蓝色背景上显示效果最佳

**设计建议：**
- 眼睛图标
- 护眼镜图标
- 眼部护理符号
- 视力表图标

### 2. prevention-icon.png
- **用途：** 预防意识提升卡片右上角图标
- **建议内容：** 预防、教育、提升、保护相关图标
- **尺寸要求：** 建议 144x144px 或更高
- **格式：** PNG（透明背景）
- **形状：** 圆形或方形（会自动裁剪为圆形）
- **颜色：** 建议使用白色或浅色图标

**设计建议：**
- 盾牌图标（保护）
- 灯泡图标（意识提升）
- 上升箭头图标（提升）
- 书本或教育图标
- 检查标记图标

## 图片位置

```
easylook-website/
└── packages/
    └── app-website/
        └── public/
            ├── eye-care-icon.png      ← 放在这里
            └── prevention-icon.png    ← 放在这里
```

## 样式效果

图片会以以下样式显示：
- 圆形裁剪
- 半透明白色背景（15% 透明度）
- 白色边框（30% 透明度）
- 毛玻璃效果（backdrop-filter: blur）
- Hover 时轻微放大（scale: 1.05）
- 投影效果

## 临时占位符

如果暂时没有图片，可以使用以下方式创建简单的占位符：

### 选项 1: 使用 emoji 截图
1. 在浏览器中打开一个空白页面
2. 将以下 emoji 放大显示并截图：
   - 视疲劳：👁️ 或 😴
   - 预防意识：🛡️ 或 💡
3. 保存为 PNG 格式

### 选项 2: 使用在线图标生成器
- [Flaticon](https://www.flaticon.com/)
- [Icons8](https://icons8.com/)
- [Font Awesome](https://fontawesome.com/)

### 选项 3: 使用 SVG
可以直接在代码中使用 SVG 图标（需要修改组件代码）

## 当前配置

在 `EyeScience.tsx` 中：

```typescript
{
  id: 'visual-fatigue',
  title: '视疲劳患者',
  style: 'image',
  image: '/eye-care-icon.png',  // ← 修改这里
}

{
  id: 'prevention-awareness',
  title: '预防意识提升',
  style: 'image',
  image: '/prevention-icon.png',  // ← 修改这里
}
```

## 修改图片路径

如果想使用不同的文件名或路径，修改上述 `image` 字段即可。

