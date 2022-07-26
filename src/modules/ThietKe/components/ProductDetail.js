import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetail } from '../api';
import { Image, Button, Form, Input } from 'antd';
import useRouter from 'hooks/useRouter';
import '../styles/index.scss';
import { APP_CONFIG } from 'utils/constants';
import Breadcrumb from '../../../components/Breadcrumb';
import { postLienHe } from '../../LienHe/api';
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
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);
  const params = useParams();
  useEffect(() => {
    callDetail();
  }, [])
  const callDetail = () => {
    getDetail(params.id)
      .then(res => setData(res.data.data))
  }

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
      <Breadcrumb title="SẢM PHẨM" subTitle="SẢM PHẨM" />
      <div className='product__detail'>
        <div className='product__detail__info'>
          <div className='img'>
            <div className='img__active'>
              <Image
                preview={{
                  visible: false,
                }}
                src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[0].attributes.url}`}
                onClick={() => setVisible(true)}
              />
            </div>
            <div className='img__pre'>
              <div className='img__pre__item'>
                <Image
                  preview={{
                    visible: false,
                  }}
                  src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[1].attributes.url}`}
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className='img__pre__item'>
                <Image
                  preview={{
                    visible: false,
                  }}
                  src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[2].attributes.url}`}
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className='img__pre__item pre__item__layout' onClick={() => setVisible(true)} data-name={`+${data?.attributes.img.data.length - 3}`}>
                <Image
                  preview={{
                    visible: false,
                  }}
                  src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[0].attributes.url}`}
                  onClick={() => setVisible(true)}
                />
              </div>
              <div
                style={{
                  display: 'none',
                }}
              >
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                  }}
                >
                  {data?.attributes.img.data.map((item, index) => {
                    return (
                      <Image src={`${APP_CONFIG.dataUrl}${item.attributes.url}`} />
                    )
                  })}
                </Image.PreviewGroup>
              </div>
            </div>
          </div>
          <div className='info'>
            <h1>{data?.attributes.title}</h1>
            <div className='info__item'>
              <h4>DANH MỤC</h4>
              <p>{data?.attributes.mau_nha_gos.data[0].attributes.title}</p>
            </div>
            <div className='info__item'>
              <h4>SỐ GIAN, CHÁI NHÀ</h4>
              <p>{data?.attributes.SoGianChaiNha}</p>
            </div>
            <div className='info__item'>
              <h4>MỨC ĐỘ ĐIÊU KHẮC</h4>
              <p>{data?.attributes.MucDoDieuKhac}</p>
            </div>
            <div className='info__item'>
              <h4>CHẤT LIỆU</h4>
              <p>{data?.attributes.ChatLieu}</p>
            </div>
            <div className='info__item'>
              <h4>KÍCH THƯỚC CỠ NHÀ</h4>
              <p>{data?.attributes.KichThuocCoNha}</p>
            </div>
            <div className='info__item'>
              <h4>KÍCH THƯỚC CẤU KIỆN CHÍNH</h4>
              <p>{data?.attributes.KichThuocCauKienChinh}</p>
            </div>
            <div className='info__item'>
              <h4>HOÀN THIỆN BỀ MẶT</h4>
              <p>{data?.attributes.HoanThienBeMat}</p>
            </div>
            <div className='info__item'>
              <h4>GIÁ (KINH PHÍ DỰ TRÙ)</h4>
              <p>{data?.attributes.Gia}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '40px' }} dangerouslySetInnerHTML={{ __html: data?.attributes.content }}></div>
      </div>
      {/* <h1 className='text-center'>ĐẶT HÀNG MẪU NHÀ NÀY</h1>
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
      </Form> */}
    </>
  )
}