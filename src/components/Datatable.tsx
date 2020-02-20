import * as React from 'react';
import { Table } from 'antd';

interface Props {
  data: any[];
  fetching: boolean;
  columns: TableColumns[];
  loading?: boolean;
}

function Datatable({ data, columns, fetching }: Props) {
  return (
    <Table dataSource={data} columns={columns} loading={fetching} />
  )
}

export default Datatable;
