# easyform

> encapsulate antd form to easy use.

[![NPM](https://img.shields.io/npm/v/easyform.svg)](https://www.npmjs.com/package/easyform) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save easyform
```

## Usage

```jsx
import React, { Component } from 'react'

import Fields from 'easyform'

const fields = [
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
  }
];

class Example extends Component {
  render() {
    return (
      <Form>
        <Fields form={form} initialValues={initialValues}>
          <Fields.Field
            {...{
              name: 'startTime',
              label: '开始时间',
              required: true,
              type: 'date',
            }}
          />
        </Fields>
        <Fields form={form} fields={fields} initialValues={initialValues} />
      </Form>
    )
  }
}
```
