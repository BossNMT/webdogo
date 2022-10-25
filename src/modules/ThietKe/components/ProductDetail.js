import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getThietKeNhaGoDetail } from '../api';
// import useRouter from 'hooks/useRouter';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../styles/index.scss';
import { openNotificationWithIcon } from '../../../helpers/funcs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { APP_CONFIG } from 'utils/constants';

export default () => {
  const [data, setData] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams();
  useEffect(() => {
    callDetail();
  }, [])
  const callDetail = async () => {
    const res = await getThietKeNhaGoDetail(params.id);
    if (res) {
      console.log(res.data.data.attributes)
      setData(res.data.data.attributes)
    } else {
      openNotificationWithIcon('error', 'Có lỗi xảy ra xin vui lòng thử lại!')
    }
  }
  return (
    <>
      {data && (
        <div className='MauThietKeNoiThat'>
          <h1>{data.title}</h1>
          <div className='MauThietKeNoiThat__btn'>
            <div className='MauThietKeNoiThat__btn-datlich'>
              <div className='icon'>
                <i className='icon-calendar-full'></i>
              </div>
              <div>
                <p>ĐẶT LỊCH TƯ VẤN</p>
                <span>Thường phản hồi ngay</span>
              </div>
            </div>
          </div>
          <div className='MauThietKeNoiThat__slider'>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {data?.img.data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={`${APP_CONFIG.dataUrl}${item.attributes.url}`} alt="img_thiet_ke" />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={7}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data?.img.data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={`${APP_CONFIG.dataUrl}${item.attributes.url}`} alt="img_thiet_ke" />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div class="single-duan-info">
            <table>
              <tbody>
                <tr>
                  <td>Chủ đầu tư: <strong>Chú Nguyễn Văn Hằng </strong></td>
                  <td>Địa chỉ: <strong>Hàm Thuận Bắc, Bình Thuận </strong></td>
                </tr>

                <tr>
                  <td>Diện tích sử dụng: <strong>200m<sup>2</sup></strong></td>
                  <td>Phong cách: <strong>Hiện đại </strong></td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Công năng:</strong>
                    <ul>
                      <li>Tầng 1: Phòng khách, phòng thờ, phòng bếp, 1 wc</li>
                      <li>Tầng 2: Phòng sinh hoạt chung, 3 phòng ngủ, 2 wc</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}