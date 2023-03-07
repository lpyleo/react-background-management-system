import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
    const nav = useNavigate()
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log('Success:', values);
        const { username, password } = values
        if (username === 'admin' && password === '123456') {
            message.success('登录成功');
            // 存储用户信息
            dispatch({ type: 'LOGIN', playload: { username } })
            nav('/home/dashboard')
        } else {
            message.error('帐号或密码错误');
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button ml-8">
                    Log in
                </Button>
                <Button htmlType="button" onClick={onReset} className="ml-8">
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Login;
