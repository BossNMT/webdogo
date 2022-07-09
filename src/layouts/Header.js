import React, { } from 'react';
import Logo from 'assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;
  console.log(location)

  return (
    <header className="header d-flex justify-content-between align-items-center">
      <div className='full-width'>
        <div className='d-flex justify-content-between' style={{ padding: '4px 16px', background: '#db952b' }}>
          <p style={{ margin: 0, color: '#fff' }} >HOTLINE: 092.124.9999 (chị Thủy) - 0915.646.999 (anh Ngọc)</p>
          <p style={{ margin: 0, color: '#fff' }}>EN | VI</p>
        </div>
        <Link to="/" className='header__logo d-flex-center'>
          <img src={Logo} alt='Logo' />
        </Link>
        <div className='header__menu d-flex-center'>
          <Link to="/" className={location == '/' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>TRANG CHỦ</p>
          </Link>
          <Link to="/gioi-thieu" className={location == '/gioi-thieu' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>GIỚI THIỆU</p>
          </Link>
          <Link to="/mau-nha-go" className={location == '/mau-nha-go' || location.split('/')[1] == 'mau-nha-go' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>MẪU NHÀ GỖ</p>
          </Link>
          <Link to="/du-an" className={location == '/du-an' || location.split('/')[1] == 'du-an' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>DỰ ÁN</p>
          </Link>
          <Link to="/kien-thuc-nha-go" className={location == '/kien-thuc-nha-go' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>KIẾN THỨC NHÀ GỖ</p>
          </Link>
          <Link to="/lien-he" className={location == '/lien-he' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>LIÊN HỆ</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
