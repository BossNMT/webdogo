import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetail } from '../api';
import { Image } from 'antd';
import '../styles/index.scss';
import { APP_CONFIG } from 'utils/constants';
import Breadcrumb from '../../../components/Breadcrumb';

export default () => {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);
  const params = useParams();
  useEffect(() => {
    callDetail();
  }, [])
  const callDetail = () => {
    getDetail(params.id)
      .then(res => setData(res.data.data))
  }
  return (
    <>
      <Breadcrumb title="DỰ ÁN" subTitle="DỰ ÁN ĐÃ THỰC HIỆN" />
      <div className='product__detail'>
        <div className='product__detail__info'>
          <div className='info'>
            <h4>{data?.attributes.du_ans.data[0].attributes.title}</h4>
            <h1>{data?.attributes.title}</h1>
            <div className='info__item'>
              <h4>CHỦ ĐẦU TƯ</h4>
              <p>{data?.attributes.ChuDauTu}</p>
            </div>
            <div className='info__item'>
              <h4>ĐỊA CHỈ</h4>
              <p>{data?.attributes.DiaChi}</p>
            </div>
            <div className='info__item'>
              <h4>ĐƠN VỊ TRIỂN KHAI</h4>
              <p>{data?.attributes.DonViTrienKhai}</p>
            </div>
            <div className='info__item'>
              <h4>THỜI GIAN</h4>
              <p>{data?.attributes.ThoiGian}</p>
            </div>
          </div>
          <div className='img'>
            <div className='img__active'>
              <Image
                preview={{
                  visible: false,
                }}
                src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[0].attributes.url}`}
                onClick={() => setVisible(true)}
              />
            </div>
            <div className='img__pre'>
              <div className='img__pre__item'>
                <Image
                  preview={{
                    visible: false,
                  }}
                  src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[1].attributes.url}`}
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className='img__pre__item'>
                <Image
                  preview={{
                    visible: false,
                  }}
                  src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[2].attributes.url}`}
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className='img__pre__item pre__item__layout' onClick={() => setVisible(true)} data-name={`+${data?.attributes.img.data.length - 3}`}>
                <Image
                  preview={{
                    visible: false,
                  }}
                  src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data[0].attributes.url}`}
                  onClick={() => setVisible(true)}
                />
              </div>
              <div
                style={{
                  display: 'none',
                }}
              >
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                  }}
                >
                  {data?.attributes.img.data.map((item, index) => {
                    return (
                      <Image src={`${APP_CONFIG.dataUrl}${item.attributes.url}`} />
                    )
                  })}
                </Image.PreviewGroup>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '40px' }} dangerouslySetInnerHTML={{ __html: data?.attributes.content }}></div>
      </div>
    </>
  )
}