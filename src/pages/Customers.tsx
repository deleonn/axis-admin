import * as React from 'react';
import { Datatable } from '../components';
import { Card, Row, Button, Col, Icon, Divider } from 'antd';
import { useQuery } from 'urql';
import { formatPhone } from '../util/helpers';

function Customers() {
  const [{fetching, data}] = useQuery({
    query: `
      {
        usersQuery {
          _id
          name
          email
          username
          role
          phone
        }
      }
    `,
  });

  const filteredCustomers = data?.usersQuery
    .filter((el: User) => el.role === 'USER')
    .map((el: User) => {
      return {
        ...el,
        key: el._id,
        phone: formatPhone(el.phone)
      }
    });

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
      title: 'Phone number',
    },
    {
      key: 'role',
      dataIndex: 'role',
      title: 'Role',
    },
    {
      key: 'action',
      dataIndex: 'action',
      title: 'Actions',
      render: (text: string, record: string) => (
        <span>
          <a href="#">Detail</a>
          <Divider type="vertical" />
          <a href="#">Delete</a>
        </span>
      ),
    }
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
          {/* <Button type="primary" onClick={refetch}>
            <Icon type="sync" />
            Fetch customers
          </Button> */}
        </Col>
      </Row>

      <Row>
        <Card bordered={false}>
          <Datatable columns={columns} data={filteredCustomers} fetching={fetching} />
        </Card>
      </Row>
    </>
  )
}

export default Customers;