import * as React from 'react';
import { Table } from 'antd';

interface Props {
  data: any[];
  columns: TableColumns[];
}

function Datatable({ data, columns }: Props) {
  return (
    <Table dataSource={data} columns={columns} />
  )
}

export default Datatable;
