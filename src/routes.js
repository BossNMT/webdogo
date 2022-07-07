import React from 'react';
// import PermissionData from './middleware/PermissionData'
const Home = React.lazy(() => import('./modules/Home/view'));
const Info = React.lazy(() => import('./modules/Info/view'));
const Product = React.lazy(() => import('./modules/Product/view'));
const ProDuctDetail = React.lazy(() => import('./modules/Product/components/ProductDetail'));


const routes = [
  { path: '/', exact: true, name: 'Home' , component: Home },
  { path: '/gioi-thieu', exact: true, component: Info },
  { path: '/mau-nha-go', exact: true, component: Product },
  { path: '/mau-nha-go/:id', exact: true, component: ProDuctDetail },
]

export default routes;
