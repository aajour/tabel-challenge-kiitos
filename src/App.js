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
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleModalOk = this.handleModalOk.bind(this);
  }

  handleModalOk(rowKey) {
    //delete the row when the user clicks modal ok button
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
            //generate simple random ID
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
            onSelect={this.handleSelectChange}
            options={roles}
            value={selectedValue}
            style={{ width: '90%' }}
            placeholder='Select a role'
          />
          <CustomButton onClick={this.handleAdd} text='Add' />
          <CustomButton onClick={this.handleClear} text='Clear' />
        </div>
        <div className='TableContainer'>
          <TableBody onOk={this.handleModalOk} data={tableData} />
        </div>
      </div>
    );
  }
}
