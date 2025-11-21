import type { VideoCategory, VideoTask } from './_comps';

const createTask = (task: VideoTask): VideoTask => task;

export const product1VideoCategories: VideoCategory[] = [
  {
    id: 'myopia-prevention',
    title: '近视防控训练',
    description:
      '专门针对近视防控的综合训练模块，通过多种训练方式提升视觉功能。',
    poster: 'https://cdn-mini.easylook.com.cn/train/myopia_prevention_3.jpg',
    taskVoList: [
      createTask({
        stepId: 'hart_alphabet_chart_basic',
        title: 'Hart 字母表基础训练',
        brief:
          'Hart 字母表 - 基础调节幅度训练，是一项专门改善双眼调节功能的视觉训练方法，侧重于建立和恢复调节幅度。本训练旨在提高双眼清晰视物的范围，提高双眼在特定距离目标间的快速、准确切换焦点的能力，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_basic.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_basic.jpg',
      }),
      createTask({
        stepId: 'shilika_accommodative_agility',
        title: '调节灵敏度训练',
        brief:
          '视力卡 - 调节灵敏度训练，是一项专门改善双眼调节功能的视觉训练方法，侧重于建立和强化单双眼的调节灵敏度。本训练旨在解决功能性视觉问题，缩短双眼聚焦时间，减少视物延迟现象；缓解调节痉挛；改善调节不足，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/shilika_accommodative_agility.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/shilika_accommodative_agility.jpg',
      }),
      createTask({
        stepId: 'ring_convergence',
        title: '双眼集合训练',
        brief:
          '救生圈卡 - 双眼集合训练，是一项专门改善双眼融像功能的视觉训练方法，侧重于恢复和改善双眼集合功能。本训练旨在改善双眼因集合功能异常导致的视觉问题，改善集合不足导致的视物模糊，提高双眼协调性。',
        src: 'https://cdn-mini.easylook.com.cn/train/ring_convergence.mp4',
        poster: 'https://cdn-mini.easylook.com.cn/train/ring_convergence.jpg',
      }),
      createTask({
        stepId: 'hart_alphabet_chart_advanced',
        title: 'Hart 字母表高级训练',
        brief:
          'Hart 字母表 - 进阶调节幅度训练，是一项专门强化双眼调节功能的视觉训练方法，侧重于突破双眼清晰视物的范围，进一步提升双眼调节功能。本训练旨在提高调节精准度与持久力，强化动态调节能力，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_advanced.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_advanced.jpg',
      }),
      createTask({
        stepId: 'fusion_ball_fixation_training',
        title: '注视稳定性训练',
        brief:
          '聚散球 - 注视稳定性训练，是一项专门强化眼肌控制的视觉训练方法，侧重于强化眼肌控制力，增加双眼单一视物稳定性。本训练旨在减少注视时视物模糊、重影或眼球漂移的现象，提升近距离持续用眼时的视觉清晰度与舒适度，缓解视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.jpg',
      }),
    ],
  },
  {
    id: 'strabismus-amblyopia',
    title: '斜弱视训练',
    description: '专门针对斜弱视的康复训练模块，改善双眼协调和视觉功能。',
    poster: 'https://cdn-mini.easylook.com.cn/train/strabismus_amblyopia_3.jpg',
    taskVoList: [
      createTask({
        stepId: 'flipper_cards_accommodation',
        title: '遮盖训练',
        brief:
          '遮光眼罩 - 遮盖训练，是一项专门强化双眼分视的视觉训练方法，侧重于消除单眼抑制，重塑单眼正常视网膜神经通路；强化单眼眼肌控制力。本训练旨在改善因抑制导致的双眼视功能异常，提升弱视眼的参与度；改善斜视眼的视觉功能，改善双眼协调性。',
        src: 'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/flipper_cards_accommodation.jpg',
      }),
      createTask({
        stepId: 'rg_desuppression',
        title: '红绿去抑制训练',
        brief:
          '红绿阅读单位 - 去抑制训练，是一项专门强化双眼分视的视觉训练方法，侧重于消除单眼抑制，重塑单眼正常视网膜神经通路。本训练旨在改善因抑制导致的双眼视功能异常，提升弱视眼的参与度，增强双眼融合能力。',
        src: 'https://cdn-mini.easylook.com.cn/train/rg_desuppression.mp4',
        poster: 'https://cdn-mini.easylook.com.cn/train/rg_desuppression.jpg',
      }),
      createTask({
        stepId: 'fusion_ball_physiological_diplopia',
        title: '生理性复视训练',
        brief:
          '聚散球 - 生理性复视训练，是一项专门针对双眼生理性视觉功能建立的视觉训练方法，侧重于恢复双眼生理性复视，建立双眼同时视。本训练旨在改善双眼集合功能异常，消除异常复视，改善双眼协调性。',
        src: 'https://cdn-mini.easylook.com.cn/train/fusion_ball_physiological_diplopia_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/fusion_ball_physiological_diplopia_2.jpg',
      }),
      createTask({
        stepId: 'ring_convergence_strabismus',
        title: '双眼集合训练',
        brief:
          '救生圈卡 - 双眼集合训练，是一项专门改善双眼融像功能的视觉训练方法，侧重于恢复和改善双眼集合功能。本训练旨在改善双眼因集合功能异常导致的视觉问题，改善集合不足导致的视物模糊，提高双眼协调性。',
        src: 'https://cdn-mini.easylook.com.cn/train/ring_convergence.mp4',
        poster: 'https://cdn-mini.easylook.com.cn/train/ring_convergence.jpg',
      }),
      createTask({
        stepId: 'fusion_ball_fixation_training_strabismus',
        title: '注视稳定性训练',
        brief:
          '聚散球 - 注视稳定性训练，是一项专门强化眼肌控制的视觉训练方法，侧重于强化眼肌控制力，增加双眼单一视物稳定性。本训练旨在减少注视时视物模糊、重影或眼球漂移的现象，提升近距离持续用眼时的视觉清晰度与舒适度，缓解视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.jpg',
      }),
    ],
  },
  {
    id: 'eye-health',
    title: '眼保健训练',
    description: '日常眼部保健训练模块，维护和提升眼部健康状态。',
    poster: 'https://cdn-mini.easylook.com.cn/train/eye_health_3.jpg',
    taskVoList: [
      createTask({
        stepId: 'eye_health_hart_alphabet_chart_basic',
        title: 'Hart 字母表基础训练',
        brief:
          'Hart 字母表 - 基础调节幅度训练，是一项专门改善双眼调节功能的视觉训练方法，侧重于建立和恢复调节幅度。本训练旨在提高双眼清晰视物的范围，提高双眼在特定距离目标间的快速、准确切换焦点的能力，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_basic.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_basic.jpg',
      }),
      createTask({
        stepId: 'eye_health_shilika_accommodative_agility',
        title: '调节灵敏度训练',
        brief:
          '视力卡 - 调节灵敏度训练，是一项专门改善双眼调节功能的视觉训练方法，侧重于建立和强化单双眼的调节灵敏度。本训练旨在解决功能性视觉问题，缩短双眼聚焦时间，减少视物延迟现象；缓解调节痉挛；改善调节不足，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/shilika_accommodative_agility.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/shilika_accommodative_agility.jpg',
      }),
      createTask({
        stepId: 'eye_health_hart_alphabet_chart_advanced',
        title: 'Hart 字母表高级训练',
        brief:
          'Hart 字母表 - 进阶调节幅度训练，是一项专门强化双眼调节功能的视觉训练方法，侧重于突破双眼清晰视物的范围，进一步提升双眼调节功能。本训练旨在提高调节精准度与持久力，强化动态调节能力，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_advanced.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_advanced.jpg',
      }),
      createTask({
        stepId: 'eye_health_fixation_training',
        title: '注视稳定性训练',
        brief:
          '聚散球 - 注视稳定性训练，是一项专门强化眼肌控制的视觉训练方法，侧重于强化眼肌控制力，增加双眼单一视物稳定性。本训练旨在减少注视时视物模糊、重影或眼球漂移的现象，提升近距离持续用眼时的视觉清晰度与舒适度，缓解视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.jpg',
      }),
    ],
  },
  {
    id: 'learning-enhancement',
    title: '学习力提升训练',
    description: '专门提升学习相关视觉能力的训练模块，改善阅读和学习效率。',
    poster: 'https://cdn-mini.easylook.com.cn/train/learning_enhancement_3.jpg',
    taskVoList: [
      createTask({
        stepId: 'learning_fusion_ball_physiological_diplopia',
        title: '生理性复视训练',
        brief:
          '聚散球 - 生理性复视训练，是一项专门针对双眼生理性视觉功能建立的视觉训练方法，侧重于恢复双眼生理性复视，建立双眼同时视。本训练旨在改善双眼集合功能异常，消除异常复视，改善双眼协调性。',
        src: 'https://cdn-mini.easylook.com.cn/train/fusion_ball_physiological_diplopia_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/fusion_ball_physiological_diplopia_2.jpg',
      }),
      createTask({
        stepId: 'learning_fixation_training',
        title: '注视稳定性训练',
        brief:
          '聚散球 - 注视稳定性训练，是一项专门强化眼肌控制的视觉训练方法，侧重于强化眼肌控制力，增加双眼单一视物稳定性。本训练旨在减少注视时视物模糊、重影或眼球漂移的现象，提升近距离持续用眼时的视觉清晰度与舒适度，缓解视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/fusion_ball_fixation_training_2.jpg',
      }),
      createTask({
        stepId: 'learning_hart_alphabet_chart_basic',
        title: 'Hart 字母表基础训练',
        brief:
          'Hart 字母表 - 基础调节幅度训练，是一项专门改善双眼调节功能的视觉训练方法，侧重于建立和恢复调节幅度。本训练旨在提高双眼清晰视物的范围，提高双眼在特定距离目标间的快速、准确切换焦点的能力，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_basic.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_basic.jpg',
      }),
      createTask({
        stepId: 'learning_shilika_accommodative_agility',
        title: '调节灵敏度训练',
        brief:
          '视力卡 - 调节灵敏度训练，是一项专门改善双眼调节功能的视觉训练方法，侧重于建立和强化单双眼的调节灵敏度。本训练旨在解决功能性视觉问题，缩短双眼聚焦时间，减少视物延迟现象；缓解调节痉挛；改善调节不足，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/shilika_accommodative_agility.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/shilika_accommodative_agility.jpg',
      }),
      createTask({
        stepId: 'learning_ring_convergence',
        title: '双眼集合训练',
        brief:
          '救生圈卡 - 双眼集合训练，是一项专门改善双眼融像功能的视觉训练方法，侧重于恢复和改善双眼集合功能。本训练旨在改善双眼因集合功能异常导致的视觉问题，改善集合不足导致的视物模糊，提高双眼协调性。',
        src: 'https://cdn-mini.easylook.com.cn/train/ring_convergence.mp4',
        poster: 'https://cdn-mini.easylook.com.cn/train/ring_convergence.jpg',
      }),
      createTask({
        stepId: 'learning_hart_alphabet_chart_advanced',
        title: 'Hart 字母表高级训练',
        brief:
          'Hart 字母表 - 进阶调节幅度训练，是一项专门强化双眼调节功能的视觉训练方法，侧重于突破双眼清晰视物的范围，进一步提升双眼调节功能。本训练旨在提高调节精准度与持久力，强化动态调节能力，缓解调节滞后带来的视疲劳。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_advanced.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_alphabet_chart_advanced.jpg',
      }),
      createTask({
        stepId: 'learning_hart_saccade_parallel',
        title: '平行点扫视训练',
        brief:
          '扫视字母表 - 平行点扫视训练，是一项专门强化双眼扫视功能的视觉训练方法，侧重于双眼在水平位置的快速、准确的扫视运动能力。本训练旨在强化双眼准确、同步、协调的扫视能力，改善扫视精确度与速度，减少阅读中的跳字、串行或定位错误，提高阅读流畅性与视觉信息获取效率。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_saccade_parallel_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_saccade_parallel_2.jpg',
      }),
      createTask({
        stepId: 'learning_hart_saccade_random',
        title: '随机点扫视训练',
        brief:
          '扫视字母表 - 随机点扫视训练，是一项专门强化双眼扫视功能的视觉训练方法，侧重于双眼在水平及纵向位置的快速、准确的扫视运动能力。本训练旨在提高视觉搜索效率，改善随机目标扫视精确度与速度，提高双眼追踪能力与视觉信息获取效率。',
        src: 'https://cdn-mini.easylook.com.cn/train/hart_saccade_random_2.mp4',
        poster:
          'https://cdn-mini.easylook.com.cn/train/hart_saccade_random_2.jpg',
      }),
    ],
  },
];
