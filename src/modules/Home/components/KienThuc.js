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
          if (index < 3) {
            return (
              <div key={index} className='item'>
                <div className='item__img'>
                  <Link to={`/kien-thuc-nha-go/${item.id}`}><img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Kien Thuc' /></Link>
                  <p>{item.attributes.Thoigian.split('T')[0]}</p>
                </div>
                <Link to={`/kien-thuc-nha-go/${item.id}`}><h3>{item.attributes.title}</h3></Link>
                <span>kiến thức nhà gỗ</span>
                <p>{item.attributes.subTitle}</p>
                <Link to={`/kien-thuc-nha-go/${item.id}`}>Xem thêm</Link>
              </div>
            )
          }
        })}
      </div>
      <Link to="/kien-thuc-nha-go" style={{ marginTop: '30px' }} className='BUTTON-XEMTHEM'>
        <p>XEM THÊM</p>
      </Link>
    </div>
  )
}