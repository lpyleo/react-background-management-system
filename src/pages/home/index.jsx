import { LoginOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, Avatar } from 'antd';
import { useSelector } from 'react-redux';
import MyMenu from '../../components/MyMenu';
const { Header, Content, Footer } = Layout;


const Index = () => {
    const nav = useNavigate()
    const userInfo = useSelector(state => state.user)
    const goLogin = () => {
        nav('/loginRegister')
    }
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <MyMenu />
                <div className='absolute right-5 top-0 text-white flex items-center justify-center mr-8'>
                    <div><Avatar src="http://api.btstu.cn/sjtx/api.php" /></div>
                    <div className='ml-3 cursor-pointer'>{userInfo && userInfo.username}</div>
                    <div className='ml-3 cursor-pointer mb-1' onClick={goLogin}><LoginOutlined /></div>
                </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Outlet></Outlet>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Index;
