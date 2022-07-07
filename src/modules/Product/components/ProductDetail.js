import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetail } from '../api';
import { Image } from 'antd';
import '../styles/index.scss';
import { APP_CONFIG } from 'utils/constants';

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
    <div className='product__detail'>
      <div className='product__detail__info'>
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
                    return(
                        <Image src={`${APP_CONFIG.dataUrl}${item.attributes.url}`} />
                    )
                })}
              </Image.PreviewGroup>
            </div>
          </div>
        </div>
        <div className='info'>
          <h1>{data?.attributes.title}</h1>
          <div className='info__item'>
            <h4>DANH MỤC</h4>
            <p>{data?.attributes.mau_nha_gos.data[0].attributes.title}</p>
          </div>
          <div className='info__item'>
            <h4>SỐ GIAN, CHÁI NHÀ</h4>
            <p>{data?.attributes.SoGianChaiNha}</p>
          </div>
          <div className='info__item'>
            <h4>MỨC ĐỘ ĐIÊU KHẮC</h4>
            <p>{data?.attributes.MucDoDieuKhac}</p>
          </div>
          <div className='info__item'>
            <h4>CHẤT LIỆU</h4>
            <p>{data?.attributes.ChatLieu}</p>
          </div>
          <div className='info__item'>
            <h4>KÍCH THƯỚC CỠ NHÀ</h4>
            <p>{data?.attributes.KichThuocCoNha}</p>
          </div>
          <div className='info__item'>
            <h4>KÍCH THƯỚC CẤU KIỆN CHÍNH</h4>
            <p>{data?.attributes.KichThuocCauKienChinh}</p>
          </div>
          <div className='info__item'>
            <h4>HOÀN THIỆN BỀ MẶT</h4>
            <p>{data?.attributes.HoanThienBeMat}</p>
          </div>
          <div className='info__item'>
            <h4>GIÁ (KINH PHÍ DỰ TRÙ)</h4>
            <p>{data?.attributes.Gia}</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '40px' }} dangerouslySetInnerHTML={{ __html: data?.attributes.content }}></div>
    </div>
  )
}