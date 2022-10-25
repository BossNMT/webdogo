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
        <p>Địa chỉ: Khu công nghiệp xã Vân Phúc, Phúc Thọ, Hà Nội.</p>
        <p>Văn phòng: Khu công nghiệp xã Vân Phúc, Phúc Thọ, Hà Nội.</p>
        <p>Điện thoại: 092.124.9999</p>
        <p>Email: noithatminhngoc.vn@gmail.com</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119149.74641202869!2d105.64581857664425!3d21.05549829647369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345783040b25a5%3A0x90d9bea37c8e2c5a!2zTuG7mWkgdGjhuqV0IE1pbmggTmfhu41j!5e0!3m2!1svi!2s!4v1666337407421!5m2!1svi!2s" height="450" style={{ border: 0, width: '100%' }} allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"></iframe>
      </div>
    </>
  );
};