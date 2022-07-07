import React, { Suspense, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Loadable from 'react-loadable';
import routes from 'src/routes'
import PermissionContent from 'middleware/PermissionContent';
import { Spin } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

const loading = () => (
  // <div className="animated fadeIn text-center">Loading 1...</div>
  <Spin></Spin>
);

const Page404 = Loadable({
  loader: () => import('modules/Commons/_views/Page404'),
  loading
});

const DefaultLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout
      className="site-layout"
      style={{ minHeight: '100vh' }}
    >
      <Suspense fallback={loading()}>
        <Header />
      </Suspense>
      <Layout>
        <Content>
          <div className="bg-main">
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <PermissionContent
                      key={idx}
                      path={route.path}
                      exact
                      name={route.name}
                      middle={route.middleware}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Route component={Page404} />
              </Switch>
            </Suspense>
          </div>
        </Content>
      </Layout>
      <Suspense fallback={loading()}>
        <Footer />
      </Suspense>
    </Layout>
  );
};

export default DefaultLayout;
