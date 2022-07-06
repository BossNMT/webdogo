import React from 'react';
import HomeSilder from '../components/HomeSilder';
import HomeInfo from '../components/HomeInfo';
import DanhHieu from '../components/DanhHieu';
import MauNhaGo from '../components/MauNhaGo';
import DuAn from '../components/DuAn';
import KienThuc from '../components/KienThuc';
import '../styles/index.scss'

export default () => {
  return (
    <div className="Home">
      <HomeSilder />
      <HomeInfo />
      <DanhHieu />
      <MauNhaGo />
      <DuAn />
      <KienThuc />
    </div>
  )
}