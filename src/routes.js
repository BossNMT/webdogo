import React from 'react';
// import PermissionData from './middleware/PermissionData'
const Home = React.lazy(() => import('./modules/Home/view'));
const Info = React.lazy(() => import('./modules/Info/view'));
const DichVu = React.lazy(() => import('./modules/DichVu/view'));
const ThietKeNoiThat = React.lazy(() => import('./modules/ThietKe/view'));
const ProDuctDetail = React.lazy(() => import('./modules/ThietKe/components/ProductDetail'));
const LienHe = React.lazy(() => import('./modules/LienHe/view'));
const Congtrinh = React.lazy(() => import('./modules/Congtrinh/view'));
const CongtrinhDetail = React.lazy(() => import('./modules/Congtrinh/components/ProductDetail'));
const PhongCach = React.lazy(() => import('./modules/Phongcach/view'));
const KinhNghiem = React.lazy(() => import('./modules/KinhNghiem/view'));
const KinhNghiemDetail = React.lazy(() => import('./modules/KinhNghiem/components/KinhNghiemDetail'));



const routes = [
  { path: '/', exact: true, name: 'Home' , component: Home },
  { path: '/gioi-thieu', exact: true, component: Info },
  { path: '/dich-vu', exact: true, component: DichVu },
  { path: '/thiet-ke-noi-that', exact: true, component: ThietKeNoiThat },
  { path: '/thiet-ke-noi-that/detail/:id', exact: true, component: ProDuctDetail },
  { path: '/lien-he', exact: true, component: LienHe },
  { path: '/cong-trinh-hoan-thien', exact: true, component: Congtrinh },
  { path: '/cong-trinh-hoan-thien/detail/:id', exact: true, component: CongtrinhDetail },
  { path: '/phong-cach', exact: true, component: PhongCach },
  { path: '/kinh-nghiem', exact: true, component: KinhNghiem },
  { path: '/kinh-nghiem/detail/:id', exact: true, component: KinhNghiemDetail },
]

export default routes;
