import React, { useEffect, useState } from 'react';
import '../styles/index.scss'
import { getThietKeNhaGo } from '../api';
import Slider from 'react-slick';
import ImgBg from '../../../assets/images/europalce-cat-product-banner.jpg';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';
import { Empty } from 'antd';



export default () => {
  const [dataThietKe, setDataThietKe] = useState();
  const [select, setSelect] = useState();

  useEffect(() => {
    handleGetThietKe();
  }, [])

  const handleGetThietKe = () => {
    getThietKeNhaGo()
      .then((res) => {
        setDataThietKe(res.data.data)
        setSelect(res.data.data[0])
      })
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='ThietKeNoiThat'>
      <div className='ThietKeNoiThat__title' style={{ background: `url(${ImgBg})` }}>
        <h1>PHONG CÁCH</h1>
        <Slider {...settings}>
          {dataThietKe?.map((item, index) => {
            return (
              <a key={index} onClick={() => setSelect(item)}>
                <div className="item">
                  <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Thiết kế' />
                  <p>{item.attributes.title}</p>
                </div>
              </a>
            )
          })}
        </Slider>
      </div>
      <div className='ThietKeNoiThat__nav'>
        {select && <p>TRANG CHỦ / PHONG CÁCH / {select?.attributes?.title}</p>}
      </div>
      <div className='ThietKeNoiThat__list'>
        {select?.attributes?.mau_thiet_ke_noi_thats.data.length != 0 ? select?.attributes?.mau_thiet_ke_noi_thats.data.map((item, index) => {
          return (
            <Link to={`/thiet-ke-noi-that/detail/${item.id}`} className='item'>
              <div className='item__img'>
                <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data[0].attributes.url}`} alt="img_thiet_ke" />
              </div>
              <p className='text-center'>{item.attributes.title}</p>
            </Link>
          )
        }) : (
          <div className='d-flex-center full-width'>
            <div className='no-data'><p>Hệ thống chưa có dữ liệu !</p><Empty /></div>
          </div>
        )}
      </div>
    </div>
  )
}