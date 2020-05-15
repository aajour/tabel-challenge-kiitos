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
      tableDate: userRoles,
      selectedValue: null,
    };
  }

  handleOki() {
    console.log(this.state);
  }
  handleSelectChange(value) {
    this.setState({
      ...this.state,
      selectedValue: value,
    });
  }

  render() {
    const { tableDate } = this.state;
    return (
      <div className='App'>
        <div className='menuWithHeaders'>
          <SelectMenu
            onSelect={this.handleSelectChange.bind(this)}
            roles={roles}
          />
          <CustomButton text='Add' />
          <CustomButton text='Clear' />
        </div>
        <TableBody onOk={this.handleOki.bind(this)} data={tableDate} />
      </div>
    );
  }
}
