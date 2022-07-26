import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Breadcrumb from '../../../components/Breadcrumb';
import { getInfoHome } from '../api';
import { APP_CONFIG } from 'utils/constants';
import '../styles/index.scss';
import SanPhamDichVu from '../../../components/SanPhamDichVu';
import ImgBg from '../../../assets/images/europalace-counter-box-bg.jpg';
import Img1 from '../../../assets/images/europalace-gioithieu-number-icon1.png';
import Img2 from '../../../assets/images/europalace-gioithieu-number-icon2.png';
import Img3 from '../../../assets/images/europalace-gioithieu-number-icon3.png';
import Img4 from '../../../assets/images/europalace-gioithieu-number-icon4.png';

import ImgIcon1 from '../../../assets/images/europalace-gioithieu-whychosenus-icon1.png';
import ImgIcon2 from '../../../assets/images/europalace-gioithieu-whychosenus-icon2.png';
import ImgIcon3 from '../../../assets/images/europalace-gioithieu-whychosenus-icon3.png';

import ImgBgIcon from '../../../assets/images/europalace-gioithieu-whychosenus-image.png';

import ImgCamKet1 from '../../../assets/images/europalace-gioithieu-camket-icon1.png';
import ImgCamKet2 from '../../../assets/images/europalace-gioithieu-camket-icon2.png';
import ImgCamKet3 from '../../../assets/images/europalace-gioithieu-camket-icon3.png';

import QuyTrinhThietKe from '../../../components/QuyTrinhThietKe';

import ImgBgContact from '../../../assets/images/europalace-gioithieu-form-bg.png';

const validateMessages = {
  required: 'Vui lòng nhập trường này!',
  types: {
    email: 'Vui lòng nhập đúng định dạng Email!',
  },
};

export default () => {
  const [info, setInfo] = useState()
  useEffect(() => {
    handleCallApiInfo()
  }, [])

  const handleCallApiInfo = () => {
    getInfoHome()
      .then(res => {
        setInfo(res.data.data[0].attributes)
      })
  }

  return (
    <>
      <Breadcrumb title="GIỚI THIỆU" subTitle="CHÚNG TÔI CHUYÊN THIẾT KẾ & THI CÔNG NỘI THẤT CĂN HỘ, NHÀ PHỐ - BIỆT THỰ" />
      <div className='Info'>
        <div className='Info__LoiNgo'>
          <div className='img'>
            <img src={`${APP_CONFIG.dataUrl}${info?.img.data.attributes.url}`} alt='Info' />
          </div>
          <div className='loingo'>
            <h3>LỜI NGỎ</h3>
            <div dangerouslySetInnerHTML={{ __html: info?.LoiNgo }}></div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '30px', background: 'rgba(37,37,37,0.5)', padding: '30px 0' }}>
        <SanPhamDichVu />
      </div>
      <div style={{ background: `url(${ImgBg})`, backgroundRepeat: 'no-repeat', padding: '30px 0' }}>
        <div className='Info__SoAnTuong'>
          <h3><span>MAXHOME</span> QUA NHỮNG CON SỐ ẤN TƯỢNG</h3>
          <div className='Info__SoAnTuong__list'>
            <div className='item'>
              <div className='item__img'>
                <img src={Img1} alt="Con số ấn tượng" />
              </div>
              <h2>15</h2>
              <p>Năm kinh nghiệm Thiết kế nội thất biệt thự</p>
            </div>
            <div className='item'>
              <div className='item__img'>
                <img src={Img2} alt="Con số ấn tượng" />
              </div>
              <h2>500</h2>
              <p>Dự án và khách hàng Các công ty danh tiếng</p>
            </div>
            <div className='item'>
              <div className='item__img'>
                <img src={Img3} alt="Con số ấn tượng" />
              </div>
              <h2>100%</h2>
              <p>Dự án hoàn thành đúng tiến độ</p>
            </div>
            <div className='item'>
              <div className='item__img'>
                <img src={Img4} alt="Con số ấn tượng" />
              </div>
              <h2>8</h2>
              <p>Trong vòng 8h MaxHome Sẽ có mặt BH, khắc phục</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Info__Maxhome'>
        <div className='Info__Maxhome__title'>
          <h2>LÝ DO LỰA CHỌN <span>MAXHOME</span></h2>
        </div>
        <div className='Info__Maxhome__list'>
          <div className='item' style={{ background: `url(${ImgBgIcon})`, backgroundRepeat: 'no-repeat', height: '250px'}}>
            <div className='item__img'>
              <img src={ImgIcon1} />
              <p>ĐỘI NGŨ KTS THIẾT KẾ BIỆT THỰ NĂNG ĐỘNG & NHIỆT TÌNH</p>
            </div>
          </div>
          <div className='item' style={{ background: `url(${ImgBgIcon})`, backgroundRepeat: 'no-repeat', height: '250px'}}>
            <div className='item__img'>
              <img src={ImgIcon2} />
              <p>CHẤT LƯỢNG BIỆT THỰ LUÔN ĐƯỢC ĐẶT LÊN HÀNG ĐẦU</p>
            </div>
          </div>
          <div className='item' style={{ background: `url(${ImgBgIcon})`, backgroundRepeat: 'no-repeat', height: '250px'}}>
            <div className='item__img'>
              <img src={ImgIcon3} />
              <p>ĐỘI NGŨ KTS THIẾT KẾ BIỆT THỰ NĂNG ĐỘNG & NHIỆT TÌNH</p>
            </div>
          </div>
        </div>
      </div>

      <div className='Info__Maxhome' style={{ marginTop: '60px' }}>
        <div className='Info__Maxhome__title'>
          <h2>CAM KẾT CỦA <span>MAXHOME</span></h2>
        </div>
        <div className='Info__Maxhome__list'>
          <div className='item' style={{ background: `url(${ImgBgIcon})`, backgroundRepeat: 'no-repeat', height: '250px'}}>
            <div className='item__img'>
              <img src={ImgCamKet1} />
              <p>ĐỘI NGŨ KTS THIẾT KẾ BIỆT THỰ NĂNG ĐỘNG & NHIỆT TÌNH</p>
            </div>
          </div>
          <div className='item' style={{ background: `url(${ImgBgIcon})`, backgroundRepeat: 'no-repeat', height: '250px'}}>
            <div className='item__img'>
              <img src={ImgCamKet2} />
              <p>ĐỘI NGŨ KTS THIẾT KẾ BIỆT THỰ NĂNG ĐỘNG & NHIỆT TÌNH</p>
            </div>
          </div>
          <div className='item' style={{ background: `url(${ImgBgIcon})`, backgroundRepeat: 'no-repeat', height: '250px'}}>
            <div className='item__img'>
              <img src={ImgCamKet3} />
              <p>ĐỘI NGŨ KTS THIẾT KẾ BIỆT THỰ NĂNG ĐỘNG & NHIỆT TÌNH</p>
            </div>
          </div>
        </div>
      </div>

      <div className='Home' style={{ marginTop: '50px' }}>
        <QuyTrinhThietKe />
      </div>

      <div style={{ background: `url(${ImgBgContact})`, backgroundRepeat: 'no-repeat', padding: '30px 0' }}>
        <div className='Info__Contact'>
          <div className='Info__Contact__info'>
            <h2>MAXHOMEGROUP</h2>
            <h4>Hotline: <span>092.124.9999</span></h4>
            <p><span>Văn phòng:</span> Toà nhà CC2A Thanh Hà, Nguyễn Hữu Thọ, Đại Kim, Hoàng Mai, Hà Nội</p>
          </div>
          <div className='Info__Contact__form'>
            <h4 className='text-center'>ĐỂ LẠI THÔNG TIN NHẬN TƯ VẤN</h4>
            <Form name="nest-messages" validateMessages={validateMessages}>
              <Form.Item
                name={'name'}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Họ tên" />
              </Form.Item>
              <Form.Item
                name={'phone'}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
              <Form.Item 
                name={'note'}
                rules={[
                  {
                    required: true,
                  },
                ]} 
              >
                <Input.TextArea 
                  rows={4} 
                  placeholder="Mô tả chung về nhu cầu thiết kế để nhận tư vấn. Chúng tôi sẽ liên hệ ngay trong thời gian từ 8h-17h30. (Ngoài khung giờ trên liên hệ 8h sáng hôm sau)" 
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
              NHẬN TƯ VẤN
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}