type Field = {
  type: string,
  name?: string,
  label?: string,
  placeholder?: string,
  options?: RadioItems[] | string[],
  validation?: {
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,
    pattern?: string | RegExp,
    custom?: string
  },
  value: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
};

type RadioItems = {
  label: string,
  value: string
};

export const config: Field[] = [
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter your first name',
    validation: {
      required: true,
      minLength: 2,
      maxLength: 20,
      min: 0,
      max: 100,
      pattern: '',
      custom: ''
    },
    value: ''
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    validation: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      custom: ''
    },
    value: ''
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    validation: {
      required: true,
      minLength: 8,
      maxLength: 20,
      pattern: '',
      custom: ''
    },
    value: ''
  },
  {
    type: 'select',
    name: 'country',
    label: 'Country',
    options: ['Select a country', 'USA', 'Canada', 'UK', 'Australia'],
    validation: {
      required: true,
      custom: ''
    },
    value: ''
  },
  {
    type: 'checkbox',
    name: 'subscribe',
    label: 'Subscribe to Newsletter',
    validation: {
      required: false,
      custom: ''
    },
    value: ''
  }
];
