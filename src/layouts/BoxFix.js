import React, { useState } from 'react';
import { Tooltip, Modal, Form, Input, DatePicker, Radio, Button } from 'antd';
import zalo from '../assets/images/europalace-hotline-fixed-icon2-white.png'
import mess from '../assets/images/europalace-hotline-fixed-icon3-white.png';
import { postLienHe } from '../modules/LienHe/api';
import { openNotificationWithIcon } from '../helpers/funcs';

const BoxFix = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  };

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  const validateMessages = {
    required: 'Vui lòng nhập trường này!',
  };

  const onFinish = (values) => {
    postLienHe({
      data: {
        ...values,
        request: values.request ? values.request : 'Tư vấn thiết kế nội thất'
      }
    })
      .then(res => {
        if (res.data) {
          openNotificationWithIcon('success', 'Cảm ơn quý khách đã gửi thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất có thể!')
          setIsModalOpen(false);
          form.setFieldsValue({
            name: '',
            phone: '',
            time: '',
            request: '',
            comment: '',
          })
        } else {
          openNotificationWithIcon('error', 'Có lỗi xảy ra, xin vui lòng thử lại!')
        }
      })
      .catch(() => openNotificationWithIcon('error', 'Có lỗi xảy ra, xin vui lòng thử lại!'))
  };

  return (
    <>
      <div className='bottom-box-fix'>
        <Tooltip placement="leftTop" title={'Đặt lịch'}>
          <a onClick={showModal} className='item border-rd-50'>
            <i className='icon-calendar-full'></i>
          </a>
        </Tooltip>
        <Tooltip placement="leftTop" title={'Hotline: 092.124.9999'}>
          <a href="tel:84921249999" className='item'>
            <i className='icon-phone-handset'></i>
          </a>
        </Tooltip>
        <Tooltip placement="leftTop" title={'Nhắn tin qua Zalo'}>
          <a className='item'>
            <img src={zalo} alt="europalace-hotline-fixed-icon2-white.png" />
          </a>
        </Tooltip>
        <Tooltip placement="leftTop" title={'Nhắn tin qua Messenger'}>
          <a className='item'>
            <img src={mess} alt="europalace-hotline-fixed-icon3-white.png" />
          </a>
        </Tooltip>
      </div>

      <Modal width={700} title="" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel}>
        <Form {...layout} form={form} onFinish={onFinish} className='modal_datlich' validateMessages={validateMessages}>
          <h1>ĐẶT LỊCH TƯ VẤN</h1>
          <p>Để lại thông tin bên dưới, chúng tôi sẽ sắp xếp lịch tư vấn cho bạn ngay</p>
          <Form.Item name='name' label="Họ và tên" rules={[{ required: true }]}>
            <Input placeholder='Họ và tên' />
          </Form.Item>
          <Form.Item name='phone' label="Số điên thoại" rules={[{ required: true }]}>
            <Input placeholder='Số điên thoại' />
          </Form.Item>
          <Form.Item name='time' label="Thời gian" rules={[{ required: true }]}>
            <DatePicker placeholder='Chọn thời gian' format={dateFormatList} />
          </Form.Item>
          <Form.Item name="request" label="Yêu cầu">
            <Radio.Group defaultValue="Tư vấn thiết kế nội thất" value="Tư vấn thiết kế nội thất">
              <Radio value="Tư vấn thiết kế nội thất">Tư vấn thiết kế nội thất</Radio>
              <Radio value="Báo giá thiết kế và thi công nội thất">Báo giá thiết kế và thi công nội thất</Radio>
              <Radio value="Tham quan Showroom">Tham quan Showroom</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="comment"
            label="Tư vấn"
          >
            <Input.TextArea placeholder='Cần tư vấn...' rows={4} />
          </Form.Item>
          <Button className='btn-submit' htmlType="submit">
            ĐẶT LỊCH NGAY
          </Button>
        </Form >
      </Modal>
    </>
  )
}

export default BoxFix;
