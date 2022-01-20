import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 14 },
};


// useNavigate


export const Ingresar = () => {

    useHideMenu(false);

    const [usuario] = useState(getUsuarioStorage())
    const navigate = useNavigate();


    console.log(usuario)
    const onFinish = ({ agente, escritorio }) => {


        localStorage.setItem('agente', agente)
        localStorage.setItem('escritorio', escritorio)
        navigate('/escritorio');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if(usuario.agente && usuario.escritorio){
        return <Navigate to="/escritorio" />
    }

    return (
        <>
            <Title level={2}>Ingresar</Title>
            <Text>Ingrese su nombre y numero de escritorio</Text>
            <Divider />
            <Form
                {...layout}
                //name="basic"

                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre del agente"
                    name="agente"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su nombre',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="escritorio"
                    rules={[
                        {
                            required: true,
                            message: 'Ingrese el numero de escritorio',
                        },
                    ]}
                >
                    <InputNumber min={1} max={99} />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >

                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" shape='round'>
                        <SaveOutlined />
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
