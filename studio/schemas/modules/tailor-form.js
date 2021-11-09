export default {
  title: 'Tailor Form',
  name: 'tailorForm',
  type: 'object',
  fields: [
    {
      title: 'Form Fields',
      name: 'formFields',
      type: 'array',
      of: [
        {
          title: 'Form Field',
          name: 'formField',
          type: 'object',
          fields: [
            {
              title: 'Field Type',
              name: 'fieldType',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Textarea', value: 'textarea' },
                  { title: 'Checkbox', value: 'checkbox' },
                  { title: 'Radio', value: 'radio' },
                  { title: 'Select', value: 'select' },
                  { title: 'File', value: 'file' },
                  { title: 'Hidden', value: 'hidden' },
                  { title: 'Button', value: 'button' },
                  { title: 'Submit', value: 'submit' },
                  { title: 'Reset', value: 'reset' },
                  { title: 'Image', value: 'image' },
                  { title: 'File', value: 'file' },
                  { title: 'Email', value: 'email' },
                  { title: 'Tel', value: 'tel' },
                  { title: 'Number', value: 'number' }
                ]
              }
            },
            {
              title: 'Field Label',
              name: 'fieldLabel',
              type: 'string'
            },
            {
              title: 'Field Name',
              name: 'fieldName',
              type: 'string'
            },
            {
              title: 'Field Value',
              name: 'fieldValue',
              type: 'string'
            },
            {
              title: 'Field Placeholder',
              name: 'fieldPlaceholder',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}
