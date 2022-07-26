import React from 'react';
import HomeSilder from '../components/HomeSilder';
import HomeInfo from '../components/HomeInfo';
import DichVuNoiBat from '../components/DichVuNoiBat';
import MauThietKeNoiThat from '../components/MauThietKeNoiThat';
import DuAn from '../components/DuAn';
import QuyTrinh from '../components/QuyTrinh';
import '../styles/index.scss'
import ThongTinVe from '../components/ThongTinVe';
import TuVanNoiThat from '../components/TuVanNoiThat';

export default () => {
  return (
    <div className="Home">
      <HomeSilder />
      <HomeInfo />
      <DichVuNoiBat />
      <MauThietKeNoiThat />
      <DuAn />
      <QuyTrinh />
      <ThongTinVe />
      <TuVanNoiThat />
    </div>
  )
}