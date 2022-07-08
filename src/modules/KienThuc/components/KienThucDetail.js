import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { APP_CONFIG } from 'utils/constants';
import { getDetail } from '../api';
import Breadcrumb from '../../../components/Breadcrumb';
import '../styles/index.scss';

export default () => {
  const [data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    callDetail();
  }, [])
  const callDetail = () => {
    getDetail(params.id)
      .then(res => setData(res.data.data))
  }
  return (
    <>
      <Breadcrumb title="KIẾN THỨC NHÀ GỖ" subTitle="KIẾN THỨC NHÀ GỖ" />
      <div className="kienthuc__detail">
        <img src={`${APP_CONFIG.dataUrl}${data?.attributes.img.data.attributes.url}`} alt={data?.attributes.img.data.attributes.name} />
        <span>{`${data?.attributes.Thoigian.split('T')[0]} | ${data?.attributes.Thoigian.split('T')[1].split('.')[0]}`}</span>
        <h1>{data?.attributes.title}</h1>
        <h2>{data?.attributes.subTitle}</h2>
        <div style={{ marginTop: '40px' }} dangerouslySetInnerHTML={{ __html: data?.attributes.content }}></div>
      </div>
    </>
  )
}