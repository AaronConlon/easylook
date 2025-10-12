export interface EncyclopediaItem {
  id: string;
  title: string;
  date: number;
  description?: string;
  link?: string;
  cover?: string;
  category?: string;
  source?: string;
  tags?: string[];
}

export const encyclopediaData: EncyclopediaItem[] = [
  {
    id: 'milk-tea-eye-health',
    title: '隐形眼镜过夜戴 你的眼睛答应吗？',
    date: Date.now(),
    description:
      '很多人都有过类似体验：隐形眼镜佩戴几小时后，眼睛突然出现刺痛、瘙痒和异物感，甚至迅速发红。',
    link: 'https://mp.weixin.qq.com/s/OflLi98aHmvZ3DSAzse2FQ',
    cover:
      'https://de4965e.webp.li/blog-images/2025/10/2f6a0b55f60a69ba64b0c7e5bf97b5c7.jpg',
    source: '视立优眼科',
    tags: ['隐形眼镜', '护眼', '健康'],
  },

  {
    id: 'myopia-surgery-peak',
    title: '十大伤眼行为 你中了几个？',
    date: Date.now() - 1000 * 60 * 60 * 24 * 1,
    description:
      '必须严肃提醒大家：生活中很多看似不起眼的习惯，正在悄悄伤害你的眼睛！这 10 个行为尤其要注意...',
    link: 'https://mp.weixin.qq.com/s/4rDQ-mbCilaJMlZFwsbyIQ',
    cover:
      'https://de4965e.webp.li/blog-images/2025/10/d89cbd705e25b8c7ed4633435d2c9018.jpg',
    source: '视立优眼科',
    tags: ['护眼', '健康', '预防'],
  },
  {
    id: 'taopu-new-sight',
    title: '大国小工匠｜桃浦新"视"力，系列科普活动第一期精彩回顾！',
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    description:
      '"大国小工匠 桃浦新视力——小小眼科医生职业体验"系列活动在普陀区桃浦镇党群服务中心顺利举办。',
    link: 'https://mp.weixin.qq.com/s/vH5E34G0YNnd1UeSxwLtPQ',
    cover:
      'https://de4965e.webp.li/blog-images/2025/10/d2ef59747813c40c6b1850900d8414c5.png',
    source: '视立优眼科',
    tags: ['科普活动', '儿童', '体验'],
  },
  {
    id: 'double-vision-function',
    title: '揭秘双眼视功能：为何双眼看物能合二为一？​',
    date: Date.now() - 1000 * 60 * 60 * 24 * 3,
    description:
      '双眼视功能是指两只眼睛协同工作的能力，包括同时聚焦、融合图像和感知立体空间，从而形成清晰、立体的视觉。',
    link: 'https://mp.weixin.qq.com/s/HlTcTUITOZ_z5FsYOEK_vw',
    cover:
      'https://de4965e.webp.li/blog-images/2025/10/750a08e613813151408136d78b5af9d8.png',
    source: '视立优眼科',
    tags: ['视功能', '科普', '专业'],
  },
  {
    id: 'prevent-myopia-and-strabismus',
    title: '警惕！近视和斜视可能在恶性循环！',
    date: Date.now() - 1000 * 60 * 60 * 24 * 4,
    description:
      '近视和斜视可能存在恶性循环，近视会导致眼睛调节能力下降，从而更容易出现斜视。',
    link: 'https://mp.weixin.qq.com/s/E4m__6mIzIhAa7lKtBOj9Q',
    cover:
      'https://de4965e.webp.li/blog-images/2025/10/8d1768840d4f6c5e1ec7a19ecc336ac2.png',
    source: '视立优眼科',
    tags: ['近视', '斜视', '预防'],
  },
];
