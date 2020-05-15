import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

export default function CustomButton(props) {
  return <Button size='large'>{props.text}</Button>;
}
