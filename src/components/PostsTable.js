import React from 'react';
import { Table } from 'antd';
import postColumns from '../columns/postColumns'

export default ({data, loading}) => {

  return (
    <>
      <Table
        rowKey="title"
        dataSource={data}
        columns={postColumns}
        loading={loading}
        pagination={false}
      />
    </>
  )
}