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
import { useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../Commons/_store/commonSlice';

export default () => {
  const dispatch = useDispatch();
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
            <button className='MauThietKeNoiThat__btn-datlich' onClick={() => dispatch(setIsOpenModal(true))}>
              <div className='icon'>
                <i className='icon-calendar-full'></i>
              </div>
              <div>
                <p>ĐẶT LỊCH TƯ VẤN</p>
                <span>Thường phản hồi ngay</span>
              </div>
            </button>
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
                  <td>Chủ đầu tư: <strong>{data.ChuDauTu}</strong></td>
                  <td>Địa chỉ: <strong>{data.DiaChi}</strong></td>
                </tr>

                <tr>
                  <td>Diện tích sử dụng: <strong>{data.DienTichSuDung}<sup>2</sup></strong></td>
                  <td>Phong cách: <strong>{data.PhongCach}</strong></td>
                </tr>
                <tr>
                  <td colspan="2">Công năng: <strong>{data.CongNang}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='MauThietKeNoiThat__view'>
            <div className='MauThietKeNoiThat__view__title'>
              <p>MÔ TẢ</p>
            </div>
            <div style={{ marginTop: '15px' }} dangerouslySetInnerHTML={{ __html: data.MoTa }}></div>
          </div>
        </div>
      )}
    </>
  )
}