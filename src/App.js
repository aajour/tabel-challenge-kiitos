import React, { Component } from 'react';
import './App.css';
import SelectMenu from './components/SelectMenu/SelectMenu';
import TableBody from './components/Table/Table';
import CustomButton from './components/Button/CustomButton';
import { roles, userRoles } from './mockData';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: userRoles,
      selectedValue: null,
    };
  }

  handleOki(rowKey) {
    const newRows = this.state.tableData.filter((row) => row.id !== rowKey);
    this.setState({
      ...this.state,
      tableData: newRows,
    });
  }
  handleSelectChange(value) {
    this.setState({
      ...this.state,
      selectedValue: value,
    });
  }
  handleAdd() {
    const { tableData, selectedValue } = this.state;
    if (selectedValue) {
      this.setState(
        {
          ...this.state,
          tableData: [
            ...tableData,
            { id: Math.random() * 10, role: selectedValue },
          ],
        },
        this.handleClear
      );
    }
  }
  handleClear() {
    this.setState({
      ...this.state,
      selectedValue: null,
    });
  }

  render() {
    const { tableData, selectedValue } = this.state;
    return (
      <div className='App'>
        <div className='menuWithHeaders'>
          <SelectMenu
            onSelect={this.handleSelectChange.bind(this)}
            options={roles}
            value={selectedValue}
            style={{ width: '90%' }}
            placeholder='Select a role'
          />
          <CustomButton onClick={this.handleAdd.bind(this)} text='Add' />
          <CustomButton onClick={this.handleClear.bind(this)} text='Clear' />
        </div>
        <div className='TableContainer'>
          <TableBody onOk={this.handleOki.bind(this)} data={tableData} />
        </div>
      </div>
    );
  }
}
