import React from 'react';
import { Table, Popconfirm, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type propsType = {
    data: any,
    setData: any
}

const TableForm = ({ data, setData }: propsType) => {

    const sumAge: number = data.reduce((acc: number, curr: any) => {
        return acc + (parseInt(curr.age) || 0)
    }, 0)

    const handleDelete = (index: number) => {
        const filterd:DataType[] = data.filter((_: DataType, i: number) => i !== index);
        setData(filterd);
    }

    interface DataType {
        name: string;
        age: number;
        address: string;
        action: any
        remember?: boolean
    }


    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <span style={
                {
                    color: 'blue',
                    fontWeight: "bolder"
                }
            }>{text}</span>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: (_, record, i) => (
                <Input
                    min={0}
                    onChange={e => {
                        const _data = [...data]
                        const value = e.target.value
                        _data[i].age = value
                        setData(_data)
                    }}
                    value={record.age} />
            ),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record, i) => (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(i)}>
                    <a style={{
                        color: 'red',
                        fontWeight: "bold",
                    }}>Delete</a>
                </Popconfirm>
            ),
        },
    ];
    return (
        <div>

            <Table columns={columns} dataSource={data || []} footer={() => <span style={{
                color: 'red',
                fontWeight: 'bolder'
            }}>{`Total Age : ${sumAge}`}</span>} />
        </div>
    );
};

export default TableForm;