import React, { useEffect, useState } from 'react';
import { getInfoHome } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';
import Icon1 from '../../../assets/images/europalace-home-about-icon1.png'
import Icon2 from '../../../assets/images/europalace-home-about-icon2.png'
import Icon3 from '../../../assets/images/europalace-home-about-icon3.png'

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
      <h2 className='Home__info__title'>NỘI THẤT MINH NGỌC – CHUYÊN GIA 10+ NĂM KINH NGHIỆM THIẾT KẾ THI NỘI THẤT TRỌN GÓI</h2>
      <div className='d-flex justify-content-between' style={{ marginTop: '24px' }}>
        <div style={{ width: '60%', height: '100%' }}>
          <Link style={{ fontSize: '36px', color: '#fff', marginBottom: '16px', display: 'block' }}>Giới Thiệu</Link>
          <div style={{ fontSize: '16px' }} dangerouslySetInnerHTML={{ __html: data?.GioiThieu }}></div>
          <div className='Home__info__icon'>
            <div className='item'>
              <img src={Icon1} />
              <p>10 NĂM KINH NGHIỆM</p>
            </div>
            <div className='item'>
              <img src={Icon2} />
              <p>XƯỞNG SẢN XUẤT TRỌN GÓI</p>
            </div>
            <div className='item'>
              <img src={Icon3} />
              <p>THỰC TẾ ĐẸP HƠN CẢ 3D</p>
            </div>
          </div>
        </div>
        <div className='Home__info__img' style={{ width: '35%', height: '100%' }}>
          <img src={`${APP_CONFIG.dataUrl}${data?.img.data.attributes.url}`} alt='Info' />
        </div>
      </div>
    </div>
  )
}