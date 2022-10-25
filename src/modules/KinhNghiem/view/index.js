import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';
import { getInfoHome } from '../api';
import { APP_CONFIG } from 'utils/constants';
import '../styles/index.scss';


export default () => {
  const [info, setInfo] = useState()
  useEffect(() => {
    handleCallApiInfo()
  }, [])

  const handleCallApiInfo = async () => {
    const res = await getInfoHome();

    if (res) {
      setInfo(res.data.data)
    }
  }

  return (
    <>
      <Breadcrumb title="KINH NGHIỆM" subTitle="" />
      {info && (
        <div className='kinh-nghiem'>
          {info.map((item, index) => {
            return (
              <div key={index} className='item'>
                <Link to={`/kinh-nghiem/detail/${item.id}`} className='item__img'>
                  <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt="img_kinh_nghiem" />
                </Link>
                <div className='item__info'>
                  <Link to={`/kinh-nghiem/detail/${item.id}`}><h3 className='title'>{item.attributes.title}</h3></Link>
                  <p>{new Date(item.attributes.createdAt).toLocaleDateString('de-DE')}</p>
                  <p>{item.attributes.subTitle}</p>
                  <Link to={`/kinh-nghiem/detail/${item.id}`}>Xem thêm</Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}