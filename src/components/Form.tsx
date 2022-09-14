import React, { useState } from 'react';
import { Button, InputNumber, Form, Input } from 'antd';
import Table from './Table';
import 'antd/dist/antd.css'
import TableForm from './Table';

const FormInput = () => {
    const [form] = Form.useForm();
    
    interface FormDataType {
        name: string;
        age: number;
        address: string;
        remember?: boolean
    }
    const [data, setData] = useState<FormDataType[]>([]);


    const onFinish = () => {
        const values: FormDataType = form.getFieldsValue(true);
        console.log(values);
        setData([...data, values]);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form form={form}
                style={{ width: '50%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Valid Age!',
                        },
                    ]}
                >
                    <InputNumber min={0} />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 24,
                    }}
                >
                    <Button style={{
                        marginTop: '38px'
                    }} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <TableForm data={data} setData={setData} />
        </div>
    );
};

export default FormInput;