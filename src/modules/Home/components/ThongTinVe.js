import React from 'react';
import Img1 from '../../../assets/images/europalace-home-why-chosen-us-icon1.png'
import Img2 from '../../../assets/images/europalace-home-why-chosen-us-icon2.png'
import Img3 from '../../../assets/images/europalace-home-why-chosen-us-icon3.png'
import Img4 from '../../../assets/images/europalace-home-why-chosen-us-icon4.png'
import Img5 from '../../../assets/images/europalace-home-why-chosen-us-icon5.png'
import Img6 from '../../../assets/images/europalace-home-why-chosen-us-icon6.png'


export default () => {
  return (
    <div className="Home__ThongTinVe">
      <div className="item">
        <div className="right">
          <div className='right__info'>
            <h4>VỀ NHÂN LỰC</h4>
            <p>VỀ NHÂN LỰC MaxHome có hơn 200 kỹ thuật là các thợ mộc có tay nghề và đội ngũ thiết kế nội thất MaxHome có hơn 20 kiến trúc sư có nhiều năm kinh nghiệm, kết hợp cùng cán bộ công nhân viên văn phòng với đam mê, nhiệt huyết cống hiến để tạo nên một tập thể vững mạnh. Mang lại giá trị riêng cho thương hiệu nội thất MaxHome.</p>
          </div>
          <div className='img'>
            <img src={Img1} alt='Thông tin'/>
          </div>
        </div>
        <div className="left">
          <div className='img'>
            <img src={Img2} alt='Thông tin'/>
          </div>
          <div className='left__info'>
            <h4>VỀ VẬT LỰC</h4>
            <p>Nội thất MaxHome có 1 nhà máy sàn xuât nội thất gõ + 2 Xưởng mộc + 1 Xưởng cơ khí +1 xưởng quảng cáo tại TPHCM , các văn phòng thiết kế ở tất cả các chi nhánh. Với đầy đủ trang thiết bị và máy móc hiện đại cho nghành gỗ, cơ khí và quảng cáo sẽ đảm bào chất lượng và tiến độ cho các dự án của MaxHome.</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="right">
          <div className='right__info'>
            <h4>VỀ CHẤT LƯỢNG</h4>
            <p>Với uy tín và kinh nghiệm 10 Năm trong ngành nội thất MaxHome luôn cam kết Chất Lượng và tiến độ được đặt lên hàng đầu. Các sản phẩm nội thất được chúng tôi bào hành với thời gian lên tới 2 năm.</p>
          </div>
          <div className='img'>
            <img src={Img3} alt='Thông tin'/>
          </div>
        </div>
        <div className="left">
          <div className='img'>
            <img src={Img4} alt='Thông tin'/>
          </div>
          <div className='left__info'>
            <h4>VỀ DỊCH VỤ</h4>
            <p>Chúng tôi ưu tiên việc bào hành hơn cả đơn hàng mới. Sau khi bàn giao nghiệm thu khi hoàn thiện thi công nội thất, Bào hành 2 năm. Nhận thiết kế văn phòng làm việc, thiết kế nhà hàng khách sạn, thiết kế quán cafe đẹp…</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="right">
          <div className='right__info'>
            <h4>VỀ GIÁ THÀNH</h4>
            <p>Nội thất MaxHome áp dụng Quy Trình 5S + Kỹ thuật có tay nghề cao + công cụ máy móc hiện đại phục vụ sàn xuất theo công nghiệp giúp báo giá thi công nội thất tại MaxHome hợp lý và tốt nhất cho khách hàng.</p>
          </div>
          <div className='img'>
            <img src={Img5} alt='Thông tin'/>
          </div>
        </div>
        <div className="left">
          <div className='img'>
            <img src={Img6} alt='Thông tin'/>
          </div>
          <div className='left__info'>
            <h4>VỀ VẬT LIỆU</h4>
            <p>Các nguyên vật liệu phục vụ sàn xuất tại Nội thất MaxHome đều được lựa chọn đạt các tiêu chuẩn về an toàn, có chứng nhận CO, CQ. Không sử dụng các vật tư kém chất lượng.</p>
          </div>
        </div>
      </div>
    </div>
  )
}