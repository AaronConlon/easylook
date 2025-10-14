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

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import styles from './styles.module.scss';

export const ContactForm = () => {
  const [form] = Form.useForm();

  const page$_share = usePageStore((s) => s.page$_share);
  const formConfig = page$_share.contactForm;
  const siteInfo = page$_share.site;

  const { mutate, isPending } = useMutation({
    mutationKey: ['contact-form'],
    mutationFn: async () => {},
    onSuccess: () => {
      // confirm
      Modal.confirm({
        title: formConfig.messages.submitSuccess.title,
        content: (
          <div>
            <p>{formConfig.messages.submitSuccess.content}</p>
            <p>{formConfig.messages.submitSuccess.urgentText}</p>
            <a
              style={{
                color: '#05519b',
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px',
              }}
              href={`tel:${siteInfo.phone}`}
            >
              {siteInfo.phone}
            </a>
            <p>{formConfig.messages.submitSuccess.thankText}</p>
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
      message.error(formConfig.messages.submitError);
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
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              name="name"
              label={formConfig.fields.name.label}
              rules={[
                {
                  required: formConfig.fields.name.required,
                  message: formConfig.fields.name.errorMessage,
                },
              ]}
            >
              <Input placeholder={formConfig.fields.name.placeholder} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={6}>
            <Form.Item
              name="phone"
              label={formConfig.fields.phone.label}
              rules={[
                {
                  required: formConfig.fields.phone.required,
                  message: formConfig.fields.phone.errorMessage,
                },
              ]}
            >
              <Input placeholder={formConfig.fields.phone.placeholder} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={6}>
            <Form.Item name="email" label={formConfig.fields.email.label}>
              <Input placeholder={formConfig.fields.email.placeholder} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={6}>
            <Form.Item name="type" label={formConfig.fields.type.label}>
              <Select
                placeholder={formConfig.fields.type.placeholder}
                options={formConfig.fields.type.options}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="details" label={formConfig.fields.details.label}>
              <Input.TextArea
                placeholder={formConfig.fields.details.placeholder}
                rows={formConfig.fields.details.rows}
                showCount={false}
              />
            </Form.Item>
          </Col>

          {/* submit */}
          <Col span={24}>
            <Form.Item
              style={{ marginBottom: 0 }}
              className={cx(styles['submit-wrapper'])}
            >
              <Button
                type="primary"
                htmlType="submit"
                icon={<FaRegPaperPlane />}
                loading={isPending}
                className={cx(styles['submit-button'])}
              >
                {formConfig.submitButton.text}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
};
