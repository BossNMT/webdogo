import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import SanPhamDichVu from '../../../components/SanPhamDichVu';

export default () => {
  return (
    <>
      <Breadcrumb title="DỊCH VỤ" subTitle="" />
      <div style={{ marginTop: '60px' }}>
        <SanPhamDichVu />
      </div>
    </>
  )
}