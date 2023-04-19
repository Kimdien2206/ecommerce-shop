import React from 'react'

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { TABLE_HEIGHT } from '../../constant/styles';

interface DataType {
  key: string;
  id: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tên',
    key: 'name',
  },
  {
    title: 'Thao tác',
    key: 'action',
    width: "10%"
  },
];

const CollectionTable = () => {
  return (
    <Table columns={columns} />
  )
}

export default CollectionTable