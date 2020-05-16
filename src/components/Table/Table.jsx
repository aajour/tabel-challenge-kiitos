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
    const columns = [
      {
        title: 'User Role',
        dataIndex: 'role',
        key: 'role',
        width: '95%',
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
