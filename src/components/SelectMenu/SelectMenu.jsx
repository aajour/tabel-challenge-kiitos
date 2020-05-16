import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;

export default class SelectMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    prop: PropTypes,
  };

  render() {
    const { options, onSelect, value, placeholder, style } = this.props;
    return (
      <Select
        showSearch
        showArrow
        placeholder={placeholder}
        value={value ? value : this.placeholder}
        onSelect={onSelect}
        size='large'
        style={style}
        optionFilterProp='children'
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {options.map((role, i) => (
          <Option key={i} value={role}>
            {role}
          </Option>
        ))}
      </Select>
    );
  }
}
