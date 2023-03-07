import React, { useState } from 'react';
import MyParticles from '../../components/MyParticles';
import { Card } from 'antd';
import Login from '../../components/Login';
import Register from '../../components/Register';

const Index = () => {

    const tabListNoTitle = [
        {
            key: 'login',
            tab: 'login',
        },
        {
            key: 'register',
            tab: 'register',
        }
    ];
    const contentListNoTitle = {
        login: <Login />,
        register: <Register />
    };

    const [activeTabKey, setActiveTabKey] = useState('login');
    const onTabChange = (key) => {
        setActiveTabKey(key);
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <MyParticles />
            <Card
                style={{
                    width: '400',
                }}
                tabList={tabListNoTitle}
                activeTabKey={activeTabKey}
                onTabChange={(key) => {
                    onTabChange(key);
                }}
            >
                {contentListNoTitle[activeTabKey]}
            </Card>

        </div>
    );
}

export default Index;
