import React from 'react';
import background from 'assets/images/12.jpg'

export default () => {
  return (
    <div className='breadcrumb full-width d-flex-center' style={{ background: `url("${background}")` }}>
      <div className='breadcrumb__info'>
        <h1 style={{ textTransform: 'uppercase' }}>Giới thiệu</h1>
        <p style={{ textTransform: 'uppercase' }}><span>Trang chủ</span> / Giới Thiệu</p>
      </div>
    </div>
  )
}