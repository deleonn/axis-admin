import * as React from 'react';
import { Datatable } from '../components';
import { Card, Row, Button, Col, Icon, Spin } from 'antd';
import { useQuery } from 'urql';
import gql from 'graphql-tag'

const UsersQuery = gql`
  query {
    usersQuery {
      name
      email
      username
      phone
    }
  }
`;

function Customers() {
  const [res, executeQuery] = useQuery({query: UsersQuery});
  const refetch = React.useCallback(
    () => executeQuery({ requestPolicy: 'network-only' }),
    [executeQuery]
  );

  const columns: TableColumns[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
    },
    {
      key: 'email',
      dataIndex: 'email',
      title: 'Email',
    },
    {
      key: 'username',
      dataIndex: 'username',
      title: 'Username',
    },
    {
      key: 'phone',
      dataIndex: 'phone',
      title: 'Phone',
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
        <Col>
          <Button type="primary" onClick={refetch}>
            <Icon type="sync" />
            Fetch customers
          </Button>
        </Col>
      </Row>

      <Row>
        <Card bordered={false}>
          <Datatable columns={columns} data={res.data?.usersQuery} loading={res.fetching}/>
        </Card>
      </Row>
    </>
  )
}

export default Customers;