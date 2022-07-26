import React, { useEffect, useState } from 'react';
import { getDuAn, getListDuAn } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';

export default () => {
  const [data, setData] = useState()
  useEffect(() => {
    handleCallApiListDuAn();
  }, [])
  const handleCallApiListDuAn = () => {
    getListDuAn()
      .then(res => setData(res.data.data))
  }

  return (
    <div className="Home__DuAn">
      <h2 className='Home__info__title'>DỰ ÁN NỘI THẤT ĐÃ HOÀN THIỆN</h2>
      <div className='Home__MauThietKeNoiThat__list'>
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
      </div>
    </div>
  )
}