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