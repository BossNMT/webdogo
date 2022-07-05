import React from 'react';
// import PermissionData from './middleware/PermissionData'
import * as AUTH from 'auth/_store/constants'
const Dashboard = React.lazy(() => import('dashboard/_views'));
const WorkList = React.lazy(() => import('work/_views/WorkList'))

const routes = [
  { path: '/', exact: true, name: AUTH.MODULE_DASHBOARD , component: Dashboard },
  { path: '/work', exact: true, component: WorkList }
  
]

export default routes;
