import React from 'react';
import SelectMenu from '../SelectMenu/SelectMenu';
import CustomButton from '../Button/CustomButton';
import { filterValues } from '../../mockData';
import { Input } from 'antd';
import './style.css';

export default function TableFilter() {
  return (
    <div className='FilterMainDiv'>
      <div className='tableFilterMenu'>
        <h1 className='filterHeader'>Show items with value that:</h1>

        <SelectMenu
          defaultActiveFirstOption={true}
          options={filterValues.firstCondation}
          placeholder='Select a Condation'
        />

        <Input />
        <SelectMenu
          defaultActiveFirstOption={true}
          options={filterValues.secondCondation}
          placeholder='Select a Condation'
          style={{ margin: '10px 0px 10px 0px' }}
        />

        <SelectMenu
          defaultActiveFirstOption={true}
          options={filterValues.firstCondation}
          placeholder='Select a Condation'
        />
        <Input />

        <div className='filterMenuButtons'>
          <CustomButton text='Filter' />
          <CustomButton text='Clear' />
        </div>
      </div>
    </div>
  );
}
