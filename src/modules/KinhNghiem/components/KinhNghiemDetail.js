import React, { useEffect, useState } from 'react';
import { getDetail } from '../api';
import { useParams } from 'react-router';
import { APP_CONFIG } from 'utils/constants';
import '../styles/index.scss';


export default () => {
  const [info, setInfo] = useState()
  const params = useParams();
  useEffect(() => {
    handleCallApiInfo()
  }, [])

  const handleCallApiInfo = async () => {
    const res = await getDetail(params.id);

    if (res) {
      setInfo(res.data.data.attributes)
    }
  }

  return (
    <>
      {info && (
        <div className='kinh-nghiem-detail'>
          <h1 className='title'>{info.title}</h1>
          <div className='img'>
            <img src={`${APP_CONFIG.dataUrl}${info.img.data.attributes.url}`} alt="img_kinh_nghiem" />
          </div>
          <p className='subTitle'>{info.subTitle}</p>
          <div style={{ marginTop: '15px' }} dangerouslySetInnerHTML={{ __html: info.content }}></div>
        </div>
      )}
    </>
  )
}