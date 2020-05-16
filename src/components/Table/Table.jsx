import React from 'react';
import { Table } from 'antd';
import ConformationModal from '../Modal/ConformationModal';
import TableFilter from './TableFilter';

export default function TableBody(props) {
  const { data, onOk } = props;
  //sort table roles based on the career ladder
  function customSort() {
    const rulesWithRatings = {
      Founder: 7,
      Director: 6,
      Manager: 5,
      Officer: 4,
      Coordinator: 3,
      Facilitator: 2,
      Assistant: 1,
      Volunteer: 0,
    };
    //add new property to the state object so we can sort them
    data.map((role) => (role['rating'] = rulesWithRatings[role['role']]));
    data.sort(function (a, b) {
      return a.rating - b.rating;
    });
  }
  const columns = [
    {
      title: 'User Role',
      dataIndex: 'role',
      key: 'role',
      width: '95%',
      sorter: customSort,
      filterDropdown: TableFilter,
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <ConformationModal onOkFunc={onOk} id={record.id} />
      ),
      width: '5%',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      pagination={false}
      scroll={{ y: true }}
    />
  );
}
