import React, { useEffect, useState } from 'react';
import { getSelect } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';

export default ({ id }) => {
  const [data, setData] = useState();
  const callGetSelect = () => {
    getSelect(id)
      .then(res => setData(res.data.data.attributes))
  }

  useEffect(() => {
    callGetSelect();
  }, [])
  return (
    <div className='product__list'>
      {data?.list_du_ans.data.map((item, index) => {
        return (
            <div className='item' key={index}>
                <Link to={`/du-an/${item.id}`}>
                  <div className='item__img'>
                      <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data[0].attributes.url}`} alt='Du An' />
                  </div>
                </Link>
                <Link to={`/du-an/${item.id}`}><h2>{item.attributes.title}</h2></Link>
                <span>{data?.title}</span>
                <p>{item.attributes.subTitle}</p>
            </div>
        )
      })}
    </div>
  )
}