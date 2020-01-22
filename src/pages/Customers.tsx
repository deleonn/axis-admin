import * as React from 'react';
import { Datatable } from '../components';
import { Card, Row, Button, Col, Icon } from 'antd';

function Customers() {

  const fakeData: any[] = [
    {
      key: '1',
      name: 'Nombre 1',
      email: 'correo 1',
      telephone: '8181818181',
    },
    {
      key: '2',
      name: 'Nombre 2',
      email: 'correo 2',
      telephone: '8181818181',
    },
    {
      key: '3',
      name: 'Nombre 3',
      email: 'correo 3',
      telephone: '8181818181',
    },
    {
      key: '4',
      name: 'Nombre 4',
      email: 'correo 4',
      telephone: '8181818181',
    },
    {
      key: '5',
      name: 'Nombre 5',
      email: 'correo 5',
      telephone: '8181818181',
    },
  ];

  const columns: TableColumns[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Nombre',
    },
    {
      key: 'email',
      dataIndex: 'email',
      title: 'Correo',
    },
    {
      key: 'telephone',
      dataIndex: 'telephone',
      title: 'Teléfono',
    },
  ];

  return (
    <>
      <Row
        gutter={16}
        type="flex"
        align="middle"
        justify="end"
        style={{ marginBottom: '1rem' }}
      >
        <Col>
          <Button type="primary">
            <Icon type="plus" />
            New customer
          </Button>
        </Col>
      </Row>

      <Row>
        <Card bordered={false}>
          <Datatable columns={columns} data={fakeData} />
        </Card>
      </Row>
    </>
  )
}

export default Customers;