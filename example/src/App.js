import React from 'react'
import { Form, Button } from 'antd'
import Fields from 'easyform'

import fields from './fields'

console.log(Fields)

class App extends React.Component {
  state = {}

  hatyndleSubmit = () => {
    const { form } = this.props
    form.validateFields((err, values) => {
      console.log(values)
    })
  }

  render() {
    const { form } = this.props
    const initialValues = {
      asd: 1,
    }
    return (
      <div>
        <Button onClick={this.handleSubmit}>submit</Button>
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
      </div>
    )
  }
}

export default Form.create()(App)
