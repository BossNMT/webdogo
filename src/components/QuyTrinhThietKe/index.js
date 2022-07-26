import React from 'react';
import Img1 from '../../assets/images/europalace-home-quytrinh-icon1.png';
import Img2 from '../../assets/images/europalace-home-quytrinh-icon2.png';
import Img3 from '../../assets/images/europalace-home-quytrinh-icon3.png';
import Img4 from '../../assets/images/europalace-home-quytrinh-icon4.png';
import Img5 from '../../assets/images/europalace-home-quytrinh-icon5.png';
import Img6 from '../../assets/images/europalace-home-quytrinh-icon6.png';


import './index.scss';

export default () => {
  return (
    <div className='QuyTrinhThietKe'>
      <h2>QUY TRÌNH THIẾT KẾ & THI CÔNG</h2>
      <div className='QuyTrinhThietKe__list'>
        <div className='item'>
          <p className='item__count'>01</p>
          <img src={Img1} alt="QUY TRÌNH THIẾT KẾ THI CÔNG"/>
          <h4>Gặp trao đổi & Khảo sát</h4>
          <p>Ghi nhận thông tin khách hàng, trao đổi và khảo sát hiện trạng công trình đưa ra ý tưởng phù hợp.</p>
        </div>
        <div className='item'>
          <p className='item__count'>02</p>
          <img src={Img2} alt="QUY TRÌNH THIẾT KẾ THI CÔNG"/>
          <h4>Ký HĐ Thiết Kế – Lên Bản Vẽ 3D & 2D</h4>
          <p>Thống nhất ý tưởng và ký hợp đồng thiết kế. Hoàn thiện bản vẽ nội thất.</p>
        </div>
        <div className='item'>
          <p className='item__count'>03</p>
          <img src={Img3} alt="QUY TRÌNH THIẾT KẾ THI CÔNG"/>
          <h4>Gửi Báo Giá & Ký HĐ Thi Công</h4>
          <p>Báo giá dự toán thi công, chốt báo giá và ký HĐ thi công nội thất.</p>
        </div>
        <div className='item'>
          <p className='item__count'>04</p>
          <img src={Img4} alt="QUY TRÌNH THIẾT KẾ THI CÔNG"/>
          <h4>Sản Xuất Thi Công Lắp Đặt Hoàn Thiện</h4>
          <p>Tiến hành sản xuất nội thất và thi công hoàn thiện chuẩn xác theo bản vẽ.</p>
        </div>
        <div className='item'>
          <p className='item__count'>05</p>
          <img src={Img5} alt="QUY TRÌNH THIẾT KẾ THI CÔNG"/>
          <h4>Nghiệm Thu & Bàn Giao</h4>
          <p>Kiểm tra số lượng, chất lượng, chi phí phát sinh và bàn giao công trình hoàn thiện</p>
        </div>
        <div className='item'>
          <p className='item__count'>06</p>
          <img src={Img6} alt="QUY TRÌNH THIẾT KẾ THI CÔNG"/>
          <h4>Bảo Hành – Bảo Trì Sản Phẩm</h4>
          <p>Tất cả sản phẩm nội thất được bảo hành 2 năm & bảo trì vĩnh viễn. Hỗ trợ khách hàng trong vòng 48h</p>
        </div>
      </div>
    </div>
  )
}