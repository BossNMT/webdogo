import React, { useEffect, useState } from 'react';
import { getAll } from '../api';
import { APP_CONFIG } from 'utils/constants';
import { Link } from 'react-router-dom';

export default () => {
  const [data, setData] = useState();
  const callGetAll = () => {
    getAll()
      .then(res => setData(res.data.data))
  }

  useEffect(() => {
    callGetAll();
  }, [])
  return (
    <div className='product__list'>
      {data?.map((item, index) => {
        return (
            <div className='item' key={index}>
                <Link to={`/du-an/${item.id}`}>
                  <div className='item__img'>
                      <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data[0].attributes.url}`} alt='Du An' />
                  </div>
                </Link>
                <Link to={`/du-an/${item.id}`}><h2>{item.attributes.title}</h2></Link>
                <span>{item.attributes.du_ans.data[0].attributes.title}</span>
                <p>{item.attributes.subTitle}</p>
            </div>
        )
      })}
    </div>
  )
}