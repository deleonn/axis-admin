import * as React from 'react';
import { Table } from 'antd';

interface Props {
  data: any[];
  columns: TableColumns[];
  loading?: boolean;
}

function Datatable({ data = [], columns, loading }: Props) {
  return (
    <Table dataSource={data} columns={columns} loading={loading} />
  )
}

export default Datatable;
