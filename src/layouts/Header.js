import React, { } from 'react';
import Logo from 'assets/images/logo.png';
import Youtube from 'assets/images/youtube.png';
import tiktok from 'assets/images/tiktok.png';
import fb from 'assets/images/fb.png';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;
  console.log(location)

  return (
    <header className="header d-flex justify-content-between align-items-center">
      <div className='full-width'>
        <div className='d-flex justify-content-between' style={{ padding: '4px 16px', background: '#111' }}>
          <p style={{ color: '#fff', width: '85%', margin: '0 auto', fontSize: '16px' }} >Thời gian làm việc: 8h30 – 17h30</p>
        </div>
        <div style={{ background: '#1f1c19' }}>
          <div className='d-flex header__logo'>
            <div className='header__logo__logo'>
              <Link to="/" className='d-flex-center'>
                <img src={Logo} alt='Logo' />
              </Link>
            </div>
            <div className='header__logo__info'>
              <Link to="/" className='d-flex-center item'>
                <img src={Youtube} alt='Youtube' />
                <div>
                  <p>Youtube</p>
                  <h4>NOITHATMINHNGOC</h4>
                </div>
              </Link>
              <Link to="/" className='d-flex-center item'>
                <img src={tiktok} alt='TikTok' />
                <div>
                  <p>Tiktok</p>
                  <h4>XAYDUNGNHACUA</h4>
                </div>
              </Link>
              <Link to="/" className='d-flex-center item'>
                <img src={fb} alt='Facebook' />
                <div>
                  <p>Facebook</p>
                  <h4>NOITHATMINHNGOCVN</h4>
                </div>
              </Link>
              <div className='item'>
                <a title="Hotline" href="tel:0927748888" rel="noopener noreferrer">Hotline: 092.124.9999</a>
              </div>
            </div>
          </div>
        </div>
        <div className='header__menu d-flex-center'>
          <Link to="/" className={location == '/' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>TRANG CHỦ</p>
          </Link>
          <Link to="/gioi-thieu" className={location == '/gioi-thieu' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>GIỚI THIỆU</p>
          </Link>
          <Link to="/dich-vu" className={location == '/dich-vu' || location.split('/')[1] == 'dich-vu' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>DỊCH VỤ</p>
          </Link>
          <Link to="/thiet-ke-noi-that" className={location == '/thiet-ke-noi-that' || location.split('/')[1] == 'thiet-ke-noi-that' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>THIẾT KẾ NỘI THẤT</p>
          </Link>
          <Link to="/cong-trinh-hoan-thien" className={location == '/cong-trinh-hoan-thien' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>CÔNG TRÌNH HOÀN THIỆN</p>
          </Link>
          <Link to="/phong-cach" className={location == '/phong-cach' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>PHONG CÁCH</p>
          </Link>
          <Link to="/kinh-nghiem" className={location == '/kinh-nghiem' ? 'header__menu__item active' : 'header__menu__item'}>
            <p>KINH NGHIỆM</p>
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
