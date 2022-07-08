import React, { useEffect, useState } from 'react';
import { getDuAn, getListDuAn } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';

export default () => {
  const [dataDuAn, setDataDuAn] = useState()
  const [dataListDuAn, setDataListDuAn] = useState()
  useEffect(() => {
    handleCallApiDuAn();
    handleCallApiListDuAn();
    console.log(dataListDuAn)
  }, [])
  const handleCallApiDuAn = () => {
    getDuAn()
      .then(res => setDataDuAn(res.data.data))
  }
  const handleCallApiListDuAn = () => {
    getListDuAn()
      .then(res => setDataListDuAn(res.data.data))
  }

  return (
    <div className="Home__DuAn">
      <h2 className='Home__info__title'>CÁC DỰ ÁN TIÊU BIỂU</h2>
      <p>Mỗi tác phẩm như một câu chuyện có giá trị trường tồn theo thời gian cùng chủ nhân, gửi gắm vào đó không chỉ giá trị nghệ thuật cao, độc đáo, riêng biệt mà còn là tâm huyết của bao thế hệ đúc kết ngàn năm của làng nghề Chàng Sơn</p>
      <div className='Home__DuAn__Menu'>
        <div><Link className='default'>Tất Cả</Link></div>
        {dataDuAn?.map((item, index) => {
          return (
            <div key={index}><Link to="/du-an">{item.attributes.title}</Link></div>
          )
        })}
      </div>
      <div className='Home__DuAn__List'>
        {dataListDuAn?.map((item, index) => {
          if (index < 6) {
            return (
              <div key={index} style={{ background: `url("${APP_CONFIG.dataUrl}${item.attributes.img.data[0].attributes.url}")`, height: '280px', width: '32.5%', margin: '4px', backgroundSize: 'cover', display: 'flex', alignItems: 'end' }}>
                <Link to={`/du-an/${item.id}`}><h3>{item.attributes.title}</h3></Link>
              </div>
            )
          }
        })}
      </div>
      <Link to="/du-an" style={{ marginTop: '30px' }} className='BUTTON-XEMTHEM'>
        <p>XEM THÊM</p>
      </Link>
    </div>
  )
}