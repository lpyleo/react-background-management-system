import React from 'react';
import { Menu, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const items = [
    { label: '首页', key: 'dashboard', to: '/home/dashboard' }, // 菜单项务必填写 key
    { label: '订单列表', key: 'orderList', to: '/home/orderList' },
    {
        label: '用户列表',
        key: 'userinfo',
        children: [{ label: '登出', key: 'logout', to: '/login' }],
    },
]

const MyMenu = () => {
    const userInfo = useSelector(state => state.user);
    const num = useSelector(state => state.num);

  return (
    <div className='w-full h-full relative'>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['dashboard']}>
                {
                    items.map(item => (item.children && item.children instanceof Array && item.children.length) ? 
                    <Menu.SubMenu key={item.key} title={item.label}>
                        {
                            item.children.map(subItem => <Menu.Item key={subItem.key}><NavLink to={subItem.to}>{subItem.label}</NavLink></Menu.Item>)
                        }
                    </Menu.SubMenu>
                    :
                    <Menu.Item key={item.key}><NavLink to={item.to}>{item.label}</NavLink></Menu.Item>
                    )
                }
        </Menu>
    </div>
  )
}

export default MyMenu;
