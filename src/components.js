import React from 'react'
import { Select } from 'antd'

const Option = Select.Option
// 🖐 无状态组件不能够被 refs，与 antd 的 FormItem 实现有关, 此处必须为 class componet
class HSelect extends React.Component {
  state = {}

  render() {
    const { options, ...props } = this.props

    return (
      <Select
        {...props}
        style={{
          minWidth: 150
        }}
      >
        {options.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    )
  }
}

export { HSelect }
