import { forwardRef, useEffect, useRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

interface TrendLineChartProps {
  data?: number[];
  className?: string;
  color?: string;
}

// 默认递增数据 - 更真实的增长曲线
const DEFAULT_DATA = [120, 145, 168, 195, 220, 248, 275, 292, 310];

// 解析颜色并生成带透明度的颜色
const getColorWithOpacity = (baseColor: string, opacity: number): string => {
  // 如果是 rgba 格式，提取 rgb 部分
  const rgbaMatch = baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbaMatch) {
    const [, r, g, b] = rgbaMatch;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // 如果是十六进制格式，转换为 rgba
  const hexMatch = baseColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hexMatch) {
    const r = parseInt(hexMatch[1], 16);
    const g = parseInt(hexMatch[2], 16);
    const b = parseInt(hexMatch[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // 默认返回黑色
  return `rgba(0, 0, 0, ${opacity})`;
};

export const TrendLineChart = forwardRef<
  HTMLCanvasElement,
  TrendLineChartProps
>(({ data, className, color = '#1e293b' }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chartData = data || DEFAULT_DATA;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 10;

    // 清空画布
    ctx.clearRect(0, 0, width, height);

    // 计算点的位置
    const points: { x: number; y: number }[] = [];
    const stepX = (width - padding * 2) / (chartData.length - 1);
    const maxValue = Math.max(...chartData);
    const minValue = Math.min(...chartData);
    const range = maxValue - minValue;

    chartData.forEach((value, index) => {
      const x = padding + index * stepX;
      const y =
        height -
        padding -
        ((value - minValue) / range) * (height - padding * 2);
      points.push({ x, y });
    });

    // 绘制平滑曲线的辅助函数
    const drawSmoothCurve = (
      context: CanvasRenderingContext2D,
      pts: { x: number; y: number }[],
      tension: number = 0.4,
    ) => {
      if (pts.length < 2) return;

      context.moveTo(pts[0].x, pts[0].y);

      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i === 0 ? i : i - 1];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];

        const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension;
        const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension;
        const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension;
        const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension;

        context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
      }
    };

    // 绘制渐变背景区域
    // 背景底部位置：不是完全到底，留出 20% 的空间
    const backgroundBottom = height - padding - (height - padding * 2) * 0.2;

    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, getColorWithOpacity(color, 0.15)); // 15% 透明度（原30%的50%）
    gradient.addColorStop(1, getColorWithOpacity(color, 0.025)); // 2.5% 透明度（原5%的50%）

    ctx.beginPath();
    ctx.moveTo(points[0].x, backgroundBottom);
    ctx.lineTo(points[0].x, points[0].y);
    drawSmoothCurve(ctx, points, 0.4);
    ctx.lineTo(points[points.length - 1].x, backgroundBottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // 绘制平滑曲线
    ctx.beginPath();
    drawSmoothCurve(ctx, points, 0.4);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    // 绘制点
    points.forEach((point, index) => {
      // 外圈
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // 内圈
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // 最后一个点加强显示
      if (index === points.length - 1) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
        ctx.strokeStyle = getColorWithOpacity(color, 0.4);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  }, [data, color]);

  return (
    <canvas
      ref={canvasRef}
      className={cx(className)}
      width={200}
      height={100}
      style={{ width: '100%', height: '100px' }}
    />
  );
});

TrendLineChart.displayName = 'TrendLineChart';
