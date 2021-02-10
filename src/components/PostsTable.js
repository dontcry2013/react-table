import React from 'react';
import { Table, Row } from 'antd';
import postColumns from '../columns/postColumns'

export default ({data, loading}) => {

  return (
    <Row>
      <Table
        rowKey="title"
        dataSource={data}
        columns={postColumns}
        loading={loading}
        pagination={false}
      />
    </Row>
  )
}