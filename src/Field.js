import React from 'react'
import { Form, Col } from 'antd'
import { FieldContext } from './index'
import fieldTypes from './types'

const FormItem = Form.Item
const isFunction = fun =>
  Object.prototype.toString.call(fun) === '[object Function]'

class Field extends React.Component {
  static defaultProps = {
    fieldLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }

  getComponent() {
    const { render, type, initialValue, form, props, name } = this.props
    if (render && isFunction(render)) {
      return render(initialValue, form)
    }

    const Component = !type && !render ? fieldTypes.input : fieldTypes[type]
    return <Component key={name} {...props} />
  }

  getDecoratorOpts() {
    const { options, required, label, type, initialValue } = this.props
    let decoratorOpts = { ...options }
    // 👉 是否必填 并填充默认校验信息
    if (required && (!options || !options.rules)) {
      decoratorOpts = {
        ...options,
        rules: [
          {
            required: true,
            message: `请填写${label}!`
          }
        ]
      }
    }

    // 👉 设置默认值 与 表单组件值属性
    if (initialValue) {
      decoratorOpts = {
        ...decoratorOpts,
        valuePropName: type === 'checkbox' ? 'checked' : 'value',
        initialValue
      }
    }

    return decoratorOpts
  }

  render() {
    const { name, key, label, colSpan, fieldLayout } = this.props
    const renderComponent = this.getComponent()
    const decoratorOpts = this.getDecoratorOpts()

    return (
      <FieldContext.Consumer>
        {({ form }) => (
          <Col span={colSpan}>
            <FormItem label={label} {...fieldLayout}>
              {form.getFieldDecorator(name || key, decoratorOpts)(
                renderComponent
              )}
            </FormItem>
          </Col>
        )}
      </FieldContext.Consumer>
    )
  }
}

export default Field
