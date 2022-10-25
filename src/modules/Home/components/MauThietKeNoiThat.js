import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListMauThietKe } from '../api';
import { APP_CONFIG } from 'utils/constants';



export default () => {
  const [data, setData] = useState()
  useEffect(() => {
    handleCallGetMauThietKe()
  }, [])

  const handleCallGetMauThietKe = () => {
    getListMauThietKe()
      .then(res => {
        setData(res.data.data)
      })
  }

  return (
    <div className='Home__MauThietKeNoiThat'>
      <h2 className='Home__info__title'>MẪU THIẾT KẾ NỘI THẤT</h2>
      <div className='Home__MauThietKeNoiThat__list'>
        {data?.map((item, index) => {
          return (
            <div key={index} className='item'>
              <Link to={`/thiet-ke-noi-that/detail/${item.id}`}><img style={{ height: '100%' }} src={`${APP_CONFIG.dataUrl}${item.attributes.img.data[0].attributes.url}`} alt='Mau Thiet Ke' /></Link>
              <div className='item__title'>
                <Link to={`/thiet-ke-noi-that/detail/${item.id}`}>{item.attributes.title}</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}