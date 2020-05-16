import React, { Component } from 'react';
import { Modal, Button, Space } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { DeleteOutlined } from '@ant-design/icons';

export default class ConformationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { onOkFunc, id } = this.props;
    return (
      <div>
        <Button icon={<DeleteOutlined />} onClick={this.showModal} danger />
        <Modal
          title='Remove Conformation'
          visible={this.state.visible}
          onOk={() => {
            onOkFunc(id);
            this.handleOk();
          }}
          onCancel={this.handleCancel}
        >
          <p>Are you sure you want to remove this Security Role?</p>
        </Modal>
      </div>
    );
  }
}
