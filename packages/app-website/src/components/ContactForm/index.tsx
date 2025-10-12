import { useMutation } from '@tanstack/react-query';
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  message,
  Modal,
  Row,
  Select,
} from 'antd';
import { FaRegPaperPlane } from 'react-icons/fa';

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
  const [form] = Form.useForm();

  const { mutate, isPending } = useMutation({
    mutationKey: ['contact-form'],
    mutationFn: async () => {},
    onSuccess: () => {
      // confirm
      Modal.confirm({
        title: '提交成功',
        content: (
          <div>
            <p>我们已收到您的留言，将尽快与您联系！</p>
            <p>如有紧急情况，请拨打我们的客服电话：</p>
            <a
              style={{
                color: '#05519b',
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px',
              }}
              href="tel:400-901-83138"
            >
              400-901-83138
            </a>
            <p>感谢您的支持与信任！</p>
          </div>
        ),
        footer: null,
        type: 'success',
        closable: true,
        styles: {
          body: {
            minHeight: '160px',
          },
        },
      });
    },
    onError: () => {
      message.error('提交失败');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    const values = await form.validateFields();
    console.log(values);
    mutate(values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4, // 改这里即可
          colorPrimary: '#0052d9ff',
        },
      }}
    >
      <Form
        className={cx(styles['contact-form'])}
        onFinish={handleSubmit}
        layout="vertical"
        form={form}
        size="large"
        style={{
          padding: '0',
        }}
      >
        {/* 第一行：姓名、电话、邮箱 */}
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} lg={8}>
            <Form.Item
              name="name"
              label="您的姓名"
              rules={[{ required: true, message: '请输入您的姓名' }]}
            >
              <Input placeholder="请输入姓名" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <Form.Item
              name="phone"
              label="您的电话"
              rules={[{ required: true, message: '请输入您的联系电话' }]}
            >
              <Input placeholder="请输入联系电话" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <Form.Item name="email" label="您的邮箱（可选）">
              <Input placeholder="请输入您的邮箱（可选）" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <Form.Item name="type" label="诉求分类（可选）">
              {/* select */}
              <Select
                placeholder="请选择您的主要诉求（可选）"
                options={[
                  // 生产制造，行业采购，公共关系，营销代理，媒体宣传
                  { label: '生产制造', value: 'production' },
                  { label: '行业采购', value: 'industry' },
                  { label: '公共关系', value: 'public' },
                  { label: '营销代理', value: 'marketing' },
                  { label: '媒体宣传', value: 'media' },
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="details" label="详情">
              <Input.TextArea
                placeholder="请详细描述您的需求和建议，我们收到之后将第一时间和您联系(限制500字以内)"
                rows={6}
                showCount={false}
              />
            </Form.Item>
          </Col>

          {/* submit */}
          <Col xs={24} md={3}>
            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                icon={<FaRegPaperPlane />}
                loading={isPending}
              >
                提交留言
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
};
