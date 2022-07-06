import React from 'react';
// import PermissionData from './middleware/PermissionData'
const Home = React.lazy(() => import('./modules/Home/view'));
const WorkList = React.lazy(() => import('work/_views/WorkList'))

const routes = [
  { path: '/', exact: true, name: 'Home' , component: Home },
  { path: '/work', exact: true, component: WorkList }
  
]

export default routes;
