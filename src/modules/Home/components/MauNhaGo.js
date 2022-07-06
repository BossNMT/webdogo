import React from 'react';
import { Link } from 'react-router-dom';
import nha3Gian from 'assets/images/nha-3-gian.png';
import nha5Gian from 'assets/images/nha-5-gian.png';
import nhaGocDao from 'assets/images/nha-goc-dao.png';
import mauNhaKhac from 'assets/images/2.png';


export default () => {


  return (
    <div style={{ background: '#ffffff' }}>
      <div className='Home__MauNhaGo'>
        <h2 className='Home__info__title'>MẪU NHÀ GỖ</h2>
        <div className='d-flex-center justify-content-between'>
          <Link style={{ width: '20%' }} >
            <img style={{ width: '100%' }} src={nha3Gian} alt="Nhà 3 Gian" />
            <h3 className='text-center'>Mẫu Nhà 3 Gian</h3>
          </Link>
          <Link style={{ width: '20%' }}>
            <img style={{ width: '100%' }} src={nha5Gian} alt="Nhà 5 Gian" />
            <h3 className='text-center'>Mẫu Nhà 5 Gian</h3>
          </Link>
          <Link style={{ width: '20%' }}>
            <img style={{ width: '100%' }} src={nhaGocDao} alt="Nhà Góc Đao" />
            <h3 className='text-center'>Mẫu Nhà Góc Đao</h3>
          </Link>
          <Link style={{ width: '20%' }}>
            <img style={{ width: '100%' }} src={mauNhaKhac} alt="Mẫu nhà khác" />
            <h3 className='text-center'>Mẫu Nhà Khác</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}