import React from 'react'
import PropTypes from 'prop-types'
import Field from './Field'

/**
 * 🚀 键名对象访问
 * const obj = { b: { c: 1 } };
 * accessValue(obj, 'b.c') // return 1
 */
export function accessValue(value, access) {
  const arr = access.split ? access.split('.') : access
  return arr.reduce(
    (prev, cur) => (prev[cur] !== undefined ? prev[cur] : ''),
    value
  )
}

// 🚗 使用 context 传递 form
export const FieldContext = React.createContext({
  form: {}
})
// TODO: form redesign
class Fields extends React.Component {
  static propTypes = {
    fields: PropTypes.array,
    form: PropTypes.object,
    initialValues: PropTypes.object,
    children: PropTypes.element
  }

  static defaultProps = {
    fields: []
  }

  static Field = Field

  getFieldInitialValue(key, type) {
    const { initialValues } = this.props
    if (initialValues) {
      const accValue = accessValue(initialValues, key)
      return type === 'date' ? accValue || +new Date() : accValue
    }

    return undefined
  }

  // 👉 如果传入 fields，自动生成表单
  generateFieldItems() {
    const { fields } = this.props
    const element = React.createElement(Fields.Field)
    return fields.map(({ name, initialValue, ...otherProps }) =>
      React.cloneElement(element, {
        key: name,
        name, // ! react key 关键字
        ...otherProps,
        initialValue: initialValue || this.getFieldInitialValue(name)
      })
    )
  }

  render() {
    const { children, fields, form } = this.props
    return (
      <FieldContext.Provider value={{ form }}>
        {fields.length > 0 ? this.generateFieldItems() : children}
      </FieldContext.Provider>
    )
  }
}

export default Fields
