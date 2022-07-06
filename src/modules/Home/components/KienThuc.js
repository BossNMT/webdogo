import React, { useEffect, useState } from 'react';
import { getListKỉenThuc } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';

export default () => {
  const [dataListKienThuc, setDataListKienThuc] = useState()
  useEffect(() => {
    handleCallApiListKienThuc();
  }, [])
  const handleCallApiListKienThuc = () => {
    getListKỉenThuc()
      .then(res => setDataListKienThuc(res.data.data))
  }

  return (
    <div className="Home__KienThuc">
      <h2 className='Home__info__title'>KIẾN THỨC NHÀ GỖ</h2>
      <div className='Home__KienThuc__List'>
        {dataListKienThuc?.map((item, index) => {
          return (
            <div key={index} className='item'>
              <div className='item__img'>
                <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Kien Thuc' />
                <p>{item.attributes.Thoigian.split('T')[0]}</p>
              </div>
              <Link><h3>{item.attributes.title}</h3></Link>
              <span>kiến thức nhà gỗ</span>
              <p>{item.attributes.subTitle}</p>
              <Link>Xem thêm</Link>
            </div>
          )
        })}
      </div>
      <Link style={{ marginTop: '30px' }} className='BUTTON-XEMTHEM'>
        <p>XEM THÊM</p>
      </Link>
    </div>
  )
}