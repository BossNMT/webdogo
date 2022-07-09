import { Button, Form, Input } from 'antd';
import React from 'react';
import '../styles/index.scss';
import useRouter from 'hooks/useRouter';
import Breadcrumb from '../../../components/Breadcrumb';
import { postLienHe } from '../api';
import { openNotificationWithIcon } from '../../../helpers/funcs';

const validateMessages = {
  required: '${label} vui lòng nhập trường này!',
  types: {
    email: '${label} vui lòng nhập đúng định dạng Email!',
  },
};

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

export default () => {
  const router = useRouter();
  const onFinish = (values) => {
    postLienHe({
      data: {
        ...values
      }
    })
      .then(res => {
        if (res.data) {
          openNotificationWithIcon('success', 'Cảm ơn quý khách đã gửi thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất có thể!')
          router.push('/');
        } else {
          openNotificationWithIcon('error', 'Có lỗi xảy ra, xin vui lòng thử lại!')
        }
      })
      .catch(() => openNotificationWithIcon('error', 'Có lỗi xảy ra, xin vui lòng thử lại!'))
  };

  return (
    <>
      <Breadcrumb title="Liên hệ" subTitle="Liên hệ" />
      <div className='LienHe'>
        <h1 className='text-center'>GỬI TIN NHẮN CHO CHÚNG TÔI</h1>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={'name'}
            label="Họ tên"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'phone'}
            label="Số điện thoại"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'email'}
            label="Email"
            rules={[
              {
                type: 'email',
              },
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={'note'} label="Nội dung">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};