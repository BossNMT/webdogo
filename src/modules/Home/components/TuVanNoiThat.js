import React, { useEffect, useState } from 'react';
import { getListTuVan } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';

export default () => {
  const [data, setData] = useState()
  useEffect(() => {
    handleCallApiListDuAn();
  }, [])

  const handleCallApiListDuAn = () => {
    getListTuVan()
      .then(res => setData(res.data.data))
  }

  return (
    <div className="Home__TuVan">
      <h2 className='Home__info__title'>TƯ VẤN NỘI THẤT</h2>
      {/* <div className='Home__MauThietKeNoiThat__list'>
        {data?.map((item, index) => {
          return (
            <div key={index} className='item'>
              <img style={{ height: '100%' }} src={`${APP_CONFIG.dataUrl}${item.attributes.img.data[0].attributes.url}`} alt='Mau Thiet Ke' />
              <div className='item__title'>
                <Link>{item.attributes.title}</Link>
              </div>
            </div>
          )
        })}
      </div> */}
      <div className='Home__TuVan__list'>
        <div className='active'>
          <div className='active__img'>
            <Link><img style={{ height: '100%' }} src={`${APP_CONFIG.dataUrl}${data?.[0].attributes.img.data.attributes.url}`} alt='Tư vấn' /></Link>
          </div>
          <Link><h5>{data?.[0].attributes?.title}</h5></Link>
          <p>{data?.[0].attributes.subTitle}</p>
          <Link className='XEMTHEM'><p>Xem thêm</p></Link>
        </div>
        <div className='list'>
          {data?.map((item, index) => {
            if (0 < index && index < 4) {
              return (
                <div key={index} className='item' >
                  <Link><img style={{ height: '100%' }} src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Tư vấn' /></Link>
                  <div className='item__info'>
                    <Link><h5>{item.attributes?.title}</h5></Link>
                    <Link className='XEMTHEM'><p>Xem thêm</p></Link>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}