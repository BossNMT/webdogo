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
            <h3>CÔNG TY TNHH GỖ GIANG</h3>
            <Divider />
            <p>Văn Phòng: số 17, TT11, Khu Đô Thị Xuân Phương Foresa, Nam Từ Liêm, Hà Nội.</p>
            <Divider />
            <p>Địa Chỉ Xưởng 01 : số 03 , Khu Công Nghiệp xã Chàng Sơn – Thạch Thất – Hà Nội.</p>
            <Divider />
            <p>Liên hệ: 0933.666.929 (GĐ Điều Hành,Kinh Doanh) - Phạm Sơn</p>
            <Divider />
            <p>gogiang.kd@gmail.com</p>
            <Divider />
            <p>8:30 - 18:00 tất cả các ngày trong tuần</p>
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