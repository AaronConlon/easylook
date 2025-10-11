import { useState } from 'react';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import styles from './styles.module.scss';

interface IFormData {
  name: string;
  phone: string;
  email: string;
  details: string;
}

interface IFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  details?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    phone: '',
    email: '',
    details: '',
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: IFormErrors = {};

    // 验证姓名
    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    }

    // 验证电话
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入电话';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }

    // 验证邮箱（可选，但如果填写了需要验证格式）
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    // 验证详情
    if (!formData.details.trim()) {
      newErrors.details = '请输入详情';
    } else if (formData.details.length > 500) {
      newErrors.details = '详情不能超过 500 字';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 清除该字段的错误
    if (errors[name as keyof IFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 模拟提交
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      // 提交成功后重置表单
      setFormData({
        name: '',
        phone: '',
        email: '',
        details: '',
      });
      alert('提交成功！我们会尽快联系您。');
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={cx(styles['contact-form'])} onSubmit={handleSubmit}>
      {/* 第一行：姓名、电话、邮箱 */}
      <div className={cx(styles['form-row'])}>
        <div className={cx(styles['form-group'])}>
          <label className={cx(styles['form-label'])} htmlFor="name">
            姓名 <span className={cx(styles['required'])}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cx(styles['form-input'], {
              [styles['form-input--error']]: errors.name,
            })}
            placeholder="请输入您的姓名"
          />
          {errors.name && (
            <span className={cx(styles['error-message'])}>{errors.name}</span>
          )}
        </div>

        <div className={cx(styles['form-group'])}>
          <label className={cx(styles['form-label'])} htmlFor="phone">
            电话 <span className={cx(styles['required'])}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cx(styles['form-input'], {
              [styles['form-input--error']]: errors.phone,
            })}
            placeholder="请输入您的手机号码"
          />
          {errors.phone && (
            <span className={cx(styles['error-message'])}>{errors.phone}</span>
          )}
        </div>

        <div className={cx(styles['form-group'])}>
          <label className={cx(styles['form-label'])} htmlFor="email">
            邮箱
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cx(styles['form-input'], {
              [styles['form-input--error']]: errors.email,
            })}
            placeholder="请输入您的邮箱地址（可选）"
          />
          {errors.email && (
            <span className={cx(styles['error-message'])}>{errors.email}</span>
          )}
        </div>
      </div>

      <div className={cx(styles['form-group'])}>
        <label className={cx(styles['form-label'])} htmlFor="details">
          详情 <span className={cx(styles['required'])}>*</span>
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className={cx(styles['form-textarea'], {
            [styles['form-textarea--error']]: errors.details,
          })}
          placeholder="请详细描述您的需求或问题..."
          rows={6}
        />
        <div className={cx(styles['textarea-footer'])}>
          {errors.details && (
            <span className={cx(styles['error-message'])}>
              {errors.details}
            </span>
          )}
          <span className={cx(styles['char-count'])}>
            {formData.details.length}/500
          </span>
        </div>
      </div>

      <div className={cx(styles['form-actions'])}>
        <button
          type="submit"
          className={cx(styles['submit-button'])}
          disabled={isSubmitting}
        >
          {isSubmitting ? '发送中...' : '发送给我们'}
        </button>
      </div>
    </form>
  );
};
