import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { getAll } from '../api';
import { APP_CONFIG } from 'utils/constants';
import '../styles/index.scss';

export default () => {
  const [data, setData] = useState();
  useEffect(() => {
    callGetAll();
  }, [])
  const callGetAll = () => {
    getAll()
      .then(res => setData(res.data.data))
  }
  return (
    <>
      <Breadcrumb title="KIẾN THỨC NHÀ GỖ" subTitle="KIẾN THỨC NHÀ GỖ" />
      <div className='kienthuc'>
        <div className='kienthuc__active'>
          <div className='img'>
            <Link to={`/kien-thuc-nha-go/${data?.[0].id}`}><img src={`${APP_CONFIG.dataUrl}${data?.[0].attributes.img.data.attributes.url}`} alt='Kien Thuc Nha Go' /></Link>
          </div>
          <Link to={`/kien-thuc-nha-go/${data?.[0].id}`}><h1>{data?.[0].attributes.title}</h1></Link>
          <span>Kiến Thức Nhà Gỗ</span>
          <p>{data?.[0].attributes.subTitle}</p>
          <Link to={`/kien-thuc-nha-go/${data?.[0].id}`}>Xem Thêm</Link>
          <div className='time'>
            <p>{data?.[0].attributes.Thoigian.split('T')[0]}</p>
          </div>
        </div>
        <div className='kienthuc__list'>
          {data?.map((item, index) => {
            if (index > 0) {
              return (
                <div className='item'>
                  <div className='img'>
                    <Link to={`/kien-thuc-nha-go/${item.id}`}><img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Kien Thuc Nha Go' /></Link>
                  </div>
                  <Link to={`/kien-thuc-nha-go/${item.id}`}><h2>{item.attributes.title}</h2></Link>
                  <span>Kiến Thức Nhà Gỗ</span>
                  <p>{item.attributes.subTitle}</p>
                  <Link to={`/kien-thuc-nha-go/${item.id}`}>Xem Thêm</Link>
                  <div className='time'>
                    <p>{item.attributes.Thoigian.split('T')[0]}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}