import React from 'react';
import Img1 from '../../../assets/images/DVNB1.jpg';
import Img2 from '../../../assets/images/DVNB2.png';
import Img3 from '../../../assets/images/DVNB3.png';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="Home__DichVuNoiBat">
      <h2 className='Home__info__title'>DỊCH VỤ NỔI BẬT</h2>
      <div style={{ marginTop: '16px' }} className='d-flex-center justify-content-between Home__DichVuNoiBat__list'>
        <div className='item'>
          <img src={Img1} />
          <div className='item__title'>
            <Link>SHOWROOM NỘI THẤT</Link>
          </div>
        </div>
        <div className='item'>
          <img src={Img2} />
          <div className='item__title'>
            <Link>THIẾT KẾ NỘI THẤT</Link>
          </div>
        </div>
        <div className='item'>
          <img src={Img3} />
          <div className='item__title'>
            <Link>THI CÔNG NỘI THẤT TRỌN GÓI</Link>
          </div>
        </div>
      </div>
    </div>
  )
}