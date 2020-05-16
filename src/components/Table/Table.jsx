import React, { Component } from 'react';
import { Table } from 'antd';
import ConformationModal from '../Modal/ConformationModal';
export default class TableBody extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data, onOk } = this.props;
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
      <Table columns={columns} dataSource={data} bordered pagination={false} />
    );
  }
}
