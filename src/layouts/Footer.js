import React from 'react';
import Logo from 'assets/images/logo.png';
import FooterBg from 'assets/images/footer-background.jpg';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <footer className="footer" style={{ background: `url("${FooterBg}")` }}>
      <div style={{ width: '70%', margin: '0 auto', zIndex: '1', position: 'relative', padding: '80px 0' }}>
        <div style={{ width: '15%', margin: '0 auto' }}>
          <img src={Logo} alt='logo' />
        </div>
        <div className='footer__info'>
          <div className='footer__info__item'>
            <h3>CÔNG TY TNHH NỘI THẤT MINH NGỌC HÀ NỘI</h3>
            <Divider />
            <p>Địa chỉ xưởng: khu công nghiệp xã Vân Phúc, Phúc Thọ, Hà Nội</p>
            <Divider />
            <p>Liên hệ: 092.124.9999 (chị Thủy) - 0915.646.999 (anh Ngọc)</p>
            <Divider />
            <p>Email: noithatminhngoc.vn@gmail.com</p>
            <Divider />
            <p>Làm việc: 8h - 18h tất cả các ngày trong tuần</p>
            <Divider />
          </div>
          <div className='footer__info__item'>
            <h3>Liên kết nhanh</h3>
            <Divider />
          </div>
          <div className='footer__info__item'>
            <h3>Thông tin</h3>
            <Divider />
            <Link>Chính sách giao hàng, thi công và thanh toán</Link>
            <Divider />
            <Link>Câu hỏi thường gặp</Link>
            <Divider />
            <Link>Tuyển dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}