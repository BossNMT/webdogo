import React, { useEffect, useState } from 'react';
import '../styles/index.scss'
import { getThietKeNhaGo } from '../api';
import Slider from 'react-slick';
import ImgBg from '../../../assets/images/europalce-cat-product-banner.jpg';
import { APP_CONFIG } from 'utils/constants';


export default () => {
  const [dataThietKe, setDataThietKe] = useState();

  useEffect(() => {
    handleGetThietKe();
  }, [])

  const handleGetThietKe = () => {
    getThietKeNhaGo()
      .then((res) => {
        setDataThietKe(res.data.data)
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
        <h1>THIẾT KẾ NỘI THẤT</h1>
        <Slider {...settings}>
          {dataThietKe?.map((item, index) => {
            return (
              <div key={index} className="item">
                <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Thiết kế' />
                <p>{item.attributes.title}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}