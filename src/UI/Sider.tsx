import { Layout, Menu, Icon } from 'antd';
import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

interface IProps extends RouteComponentProps {}

function Sider({ location }: IProps) {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const { pathname } = location;

  function handleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  const routes: Route[] = [
    {
      icon: 'home',
      label: 'Home',
      path: '/',
    },
    {
      icon: 'user',
      label: 'Customers',
      path: '/customers',
    },
    {
      icon: 'form',
      label: 'Plans',
      path: '/plans',
    }
  ]

  return (
    <Layout.Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapse}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
      >
        {routes.map((route: Route) => (
          <Menu.Item key={route.path}>
            <Icon type={route.icon} />
            <span>{route.label}</span>
            <Link to={route.path} />
          </Menu.Item> 
        )) }
      </Menu>
    </Layout.Sider>
  )
}

export default withRouter(Sider);
