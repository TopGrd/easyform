import React from 'react'
import { Radio } from 'antd';

const RadioGroup = Radio.Group;
export const frameWorks = [
  {
    label: 'tomcat7',
    value: 'tomcat_7',
  },
  {
    label: 'tomcat8',
    value: 'tomcat_8',
  },
  {
    label: 'maxwell',
    value: 'maxwell',
  },
];

export default [
  {
    name: 'name',
    label: '计划名称',
    col: 24,
    required: true,
  },
  {
    name: 'startTime',
    label: '开始时间',
    required: true,
    type: 'date',
  },
  {
    name: 'ds',
    label: '开始时间',
    type: 'select',
    props: {
      options: frameWorks,
    },
  },
  {
    name: 'config.enableScm',
    label: '代码拉取',
    type: 'checkbox',
    col: 24,
    required: true,
  },
  {
    name: 'asd',
    label: '代码d拉取',
    col: 24,
    required: true,
    render: () => (
      <RadioGroup>
        <Radio value="NONE">开放</Radio>
        <Radio value="CONNECTION">连接</Radio>
        <Radio value="REQUEST">请求</Radio>
      </RadioGroup>
    ),
  },
];
