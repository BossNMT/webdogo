import React from 'react';
import background from 'assets/images/europalace-gioi-thieu-banner.jpg'

// eslint-disable-next-line react/prop-types
export default ({ title, subTitle }) => {
  return (
    <div className='breadcrumb full-width d-flex-center' style={{ background: `url("${background}")` }}>
      <div className='breadcrumb__info'>
        <h1 style={{ textTransform: 'uppercase' }}>{title}</h1>
        <p style={{ textTransform: 'uppercase' }}>{subTitle}</p>
      </div>
    </div>
  )
}