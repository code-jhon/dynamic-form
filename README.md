# Dynamic Forms - DynaForms

Application designed to dynamically construct forms based on an array of objects describing each field.

## Key Features

- **Dynamic Construction**: Generates form fields based on the type and properties of the `Field` object. [DONE]
- **Customizable Fields**: Broad options to tailor the behavior and appearance of each field. [DONE]
- **Integrated Validation**: Supports common and custom validation rules. [In Progress]
- **Complete Event Control**: Fields can handle events like `onChange`, `onBlur`, and `onFocus`.  [DONE]

## Field Specification

The application utilizes the `Field` type to define and construct each form field:

```typescript
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
  value: string | boolean,
  isChecked?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
};

