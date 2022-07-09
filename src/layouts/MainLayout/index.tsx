import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useSiderConfig } from 'hooks/useSiderConfig';
import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './MainLayout.module.scss';

const { Sider, Header, Content } = Layout;

interface IProps {
  children: React.ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { siderConfig } = useSiderConfig();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/users_page');
  }, []);

  const handleSiderToggle = () => setIsCollapsed((prev) => !prev);

  const collapsedSideBtn = isCollapsed ? (
    <MenuUnfoldOutlined className={style.sider_toggle} onClick={handleSiderToggle} />
  ) : (
    <MenuFoldOutlined className={style.sider_toggle} onClick={handleSiderToggle} />
  );

  return (
    <Layout className={style.main_layout}>
      <Sider collapsed={isCollapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          className={style.main_layout__sider_menu}
          items={siderConfig}
        />
      </Sider>
      <Layout>
        <Header className={style.main_layout__header}>{collapsedSideBtn}</Header>
        <Content className={style.main_layout__content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
