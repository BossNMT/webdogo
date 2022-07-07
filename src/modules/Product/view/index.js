import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import { Tabs } from 'antd';
import '../styles/index.scss'
import TabAll from '../components/TabAll';
import TabSelect from '../components/TabSelect';
import { getMauNhaGo } from '../api';

export default () => {
  const { TabPane } = Tabs;
  const [data, setData] = useState()
  useEffect(() => {
    callMauNhaGo();
  }, [])
  const callMauNhaGo = () => {
    getMauNhaGo()
      .then(res => setData(res.data.data))
  }
  return (
    <>
      <Breadcrumb title="SẢM PHẨM" subTitle="SẢM PHẨM" />
      <div className='product'>
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