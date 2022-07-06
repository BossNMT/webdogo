import React, { useEffect, useState } from 'react';
import { getInfoHome } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';

export default () => {
  const [data, setData] = useState()
  useEffect(() => {
    handleCallGetInfo()
  }, [])

  const handleCallGetInfo = () => {
    getInfoHome()
      .then(res => {
        setData(res.data.data[0].attributes)
      })
  }

  return (
    <div className='Home__info'>
      <h2 className='Home__info__title'>TINH HOA TỪ TRUYỀN THUYẾT</h2>
      <div className='d-flex justify-content-between'>
        <div style={{ width: '50%' }} dangerouslySetInnerHTML={{ __html: data?.slugTitle }}></div>
        <div style={{ width: '45%', height: '100%' }}>
          <img src={`${APP_CONFIG.dataUrl}${data?.img.data.attributes.url}`} alt='Info' />
        </div>
      </div>
      <Link style={{ marginTop: '30px' }} className='BUTTON-XEMTHEM'>
        <p>XEM THÊM</p>
      </Link>
    </div>
  )
}