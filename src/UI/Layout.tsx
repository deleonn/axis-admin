import { Layout } from 'antd';
import * as React from 'react';
import { Sider } from '../UI';

interface IProps {
  children: React.ReactChild | React.ReactChild[];
}

function BaseLayout({ children }: IProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Layout.Header style={{ background: '#fff', padding: 0 }} />
        <Layout.Content style={{ padding: '1rem' }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default BaseLayout;