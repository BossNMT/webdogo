import React from 'react';
import Logo from 'assets/images/logo2.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default () => {
  const allInfo = useSelector(state => state.common.allInfo)
  return (
    <footer className="footer">
      <div className='footer__container'>
        <div className='footer__logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='footer__info'>
          <div className='item'>
            <h4 className='title'>THÔNG TIN LIÊN HỆ</h4>
            <h5>{allInfo?.titleCty}</h5>
            <p>Địa chỉ xưởng: {allInfo?.diachi}</p>
            <p>Liên hệ: {allInfo?.lienhe}</p>
            <p>Email: {allInfo?.email}</p>
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