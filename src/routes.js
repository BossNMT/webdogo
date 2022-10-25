import React from 'react';
// import PermissionData from './middleware/PermissionData'
const Home = React.lazy(() => import('./modules/Home/view'));
const Info = React.lazy(() => import('./modules/Info/view'));
const DichVu = React.lazy(() => import('./modules/DichVu/view'));
const ThietKeNoiThat = React.lazy(() => import('./modules/ThietKe/view'));
const ProDuctDetail = React.lazy(() => import('./modules/ThietKe/components/ProductDetail'));
const DuAn = React.lazy(() => import('./modules/DuAn/view'));
const DuAnDetail = React.lazy(() => import('./modules/DuAn/components/DuAnDetail'));
const KienThuc = React.lazy(() => import('./modules/KienThuc/view'));
const LienHe = React.lazy(() => import('./modules/LienHe/view'));
const KienThucDetail = React.lazy(() => import('./modules/KienThuc/components/KienThucDetail'));


const routes = [
  { path: '/', exact: true, name: 'Home' , component: Home },
  { path: '/gioi-thieu', exact: true, component: Info },
  { path: '/dich-vu', exact: true, component: DichVu },
  { path: '/thiet-ke-noi-that', exact: true, component: ThietKeNoiThat },
  { path: '/thiet-ke-noi-that/detail/:id', exact: true, component: ProDuctDetail },
  { path: '/du-an', exact: true, component: DuAn },
  { path: '/du-an/:id', exact: true, component: DuAnDetail },
  { path: '/kien-thuc-nha-go', exact: true, component: KienThuc },
  { path: '/kien-thuc-nha-go/:id', exact: true, component: KienThucDetail },
  { path: '/lien-he', exact: true, component: LienHe },
]

export default routes;
