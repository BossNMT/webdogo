import React from 'react';
// import PermissionData from './middleware/PermissionData'
const Home = React.lazy(() => import('./modules/Home/view'));
const Info = React.lazy(() => import('./modules/Info/view'));

const routes = [
  { path: '/', exact: true, name: 'Home' , component: Home },
  { path: '/gioi-thieu', exact: true, component: Info }
  
]

export default routes;
