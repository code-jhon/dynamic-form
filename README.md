# Dynamic Forms - DynaForms

Application designed to dynamically construct forms based on an array of objects describing each field.

# Implemented Technologies

This project incorporates a blend of powerful technologies to deliver an optimal and scalable solution. Below is an overview of the major technologies we've integrated:

## 1. Bun

`Bun` is a [specific tool/library description]. It plays a crucial role in [describe its role, e.g., "managing dependencies and building the project"].

- [Bun Official Documentation](#)
- [Getting Started with Bun](#)

## 2. React

`React` is a popular JavaScript library for building user interfaces. It allows us to create reusable UI components and manage the application's state seamlessly.

- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorials & Resources](#)

## 3. Typescript

`Typescript` is a typed superset of JavaScript, which brings static typing to the language, enabling us to write safer and more reliable code, especially for large-scale applications.

- [Typescript Official Documentation](https://www.typescriptlang.org/docs/)
- [Useful Typescript Tips & Tricks](#)

## 4. Tailwind

`Tailwind` is a utility-first CSS framework for rapidly building custom designs. It provides low-level utility classes that let us build completely custom, production-ready designs without leaving our HTML.

- [TailwindCSS Official Documentation](https://tailwindcss.com/docs)
- [Tailwind Components & Templates](#)

---

For any further information on these technologies or to delve deeper into our implementation, please refer to the respective official documentation or reach out to our development team.


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
```

## Usage
``` Javascript
const formFields = [
  {
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
    validation: {
      required: true,
      minLength: 3,
      maxLength: 15
    },
    value: ""
  },
  // ... other fields
];

<DynamicForm fields={formFields} />

```





