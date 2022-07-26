import React from 'react';
import Logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <footer className="footer">
      <div className='footer__container'>
        <div className='footer__logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='footer__info'>
          <div className='item'>
            <h4 className='title'>THÔNG TIN LIÊN HỆ</h4>
            <h5>CÔNG TY CỔ PHẦN KIẾN TRÚC VÀ XÂY DỰNG MAXHOME</h5>
            <p>Địa chỉ xưởng: khu công nghiệp xã Vân Phúc, Phúc Thọ, Hà Nội</p>
            <p>Liên hệ: 092.124.9999 (chị Thủy) - 0915.646.999 (anh Ngọc)</p>
            <p>Email: noithatminhngoc.vn@gmail.com</p>
            <p>Làm việc: 8h - 18h tất cả các ngày trong tuần</p>
          </div>
          <div className='item'>
            <h4 className='title'>VỀ CHÚNG TÔI</h4>
            <Link>Hồ sơ năng lực</Link>
            <Link>Điều khoản sử dụng</Link>
            <Link>Chính sách bảo hành và đổi trả</Link>
            <Link>Phương thức thanh toán và mua hàng</Link>
            <Link>Tuyển dụng</Link>
            <Link>Liên hệ</Link>
          </div>
          <div className='item'>
            <h4 className='title'>HỖ TRỢ KHÁCH HÀNG</h4>
            <Link>Giới thiệu</Link>
            <Link>Phương thức vận chuyển</Link>
            <Link>Đổi trả hàng</Link>
            <Link>CHÍNH SÁCH BẢO HÀNH</Link>
            <Link>HÌNH THỨC THANH TOÁN</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}