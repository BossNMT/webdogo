import React from 'react';
import '../styles/index.scss';
// import useRouter from 'hooks/useRouter';
import Breadcrumb from '../../../components/Breadcrumb';
// import { postLienHe } from '../api';
// import { openNotificationWithIcon } from '../../../helpers/funcs';

export default () => {
  return (
    <>
      <Breadcrumb title="Liên hệ" subTitle="Liên hệ" />
      <div className='LienHe'>
        <h1>NỘI THẤT MINH NGỌC</h1>
        <p>Địa chỉ: Toà nhà CC2A Thanh Hà, Nguyễn Hữu Thọ, Đại Kim, Hoàng Mai, Hà Nội.</p>
        <p>Văn phòng: Toà nhà CC2A Thanh Hà, Nguyễn Hữu Thọ, Đại Kim, Hoàng Mai, Hà Nội.</p>
        <p>Điện thoại: 096.445.8888</p>
        <p>Email: info@maxhomevn.com</p>
      </div>
    </>
  );
};