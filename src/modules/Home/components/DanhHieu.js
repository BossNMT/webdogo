import React, { useEffect, useState } from 'react';
import { getDanhHieu } from '../api';
import { APP_CONFIG } from 'utils/constants';

export default () => {
  const [data, setData] = useState()
  useEffect (() => {
    handleCallApi()
  }, [])
  const handleCallApi = () => {
    getDanhHieu()
      .then(res => setData(res.data.data))
  }
  return (
    <div className="Home__DanhHieu">
      <h2 className='Home__info__title'>DANH HIỆU VÀ CHỨNG NHẬN</h2>
      <p>Mỗi tác phẩm như một câu chuyện có giá trị trường tồn theo thời gian cùng chủ nhân, gửi gắm vào đó không chỉ giá trị nghệ thuật cao, độc đáo, riêng biệt mà còn là tâm huyết.</p>
      <div style={{ marginTop: '16px' }} className='d-flex-center justify-content-between'>
        {data?.map((item, index) => {
          if (index < 4) {
              return (
                <div className='d-flex-center' style={{ width: '25%' }} key={index}>
                  <img style={{ height: '350px', objectFit: 'cover' }} src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Danh Hieu' />
                </div>
              )
          }
        })}
      </div>
    </div>
  )
}