import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import { Tabs } from 'antd';
import '../styles/index.scss'
import TabAll from '../components/TabAll';
import TabSelect from '../components/TabSelect';
import { getDuAn } from '../api';

export default () => {
  const { TabPane } = Tabs;
  const [data, setData] = useState()
  useEffect(() => {
    callMauNhaGo();
  }, [])
  const callMauNhaGo = () => {
    getDuAn()
      .then(res => setData(res.data.data))
  }
  return (
    <>
      <Breadcrumb title="DỰ ÁN" subTitle="DỰ ÁN ĐÃ THỰC HIỆN" />
      <div className='product'>
        <p style={{ fontSize: '16px', textAlign: 'center', margin: '0 auto 60px auto', width: '67%' }}>Mỗi tác phẩm như một câu chuyện có giá trị trường tồn theo thời gian cùng chủ nhân, gửi gắm vào đó không chỉ giá trị nghệ thuật cao, độc đáo, riêng biệt mà còn là tâm huyết của bao thế hệ đúc kết ngàn năm của làng nghề Chàng Sơn</p>
        <Tabs defaultActiveKey="1">
          <TabPane tab="TẤT CẢ" key="0">
            <TabAll />
          </TabPane>
          {data?.map((item) => {
            return (
              <TabPane tab={item.attributes.title} key={item.id}>
                <TabSelect id={item.id} />
              </TabPane>
            )
          })}
        </Tabs>
      </div>
    </>
  )
}