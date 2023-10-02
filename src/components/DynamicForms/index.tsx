import React from 'react';
import { Field } from '../../entities/types';

type Props = {
  config: Field[];
};

const DynamicForm: React.FC<Props> = ({ config }) => {
  const [formValues, setFormValues] = React.useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field, index) => {
        const { type, name, label, placeholder, options } = field;
        return (
          <div key={index}>
            <label htmlFor={name}>{label}</label>
            {type === 'text' && (
              <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={formValues[name] || ''}
                onChange={handleChange}
              />
            )}
            {type === 'email' && (
              <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={formValues[name] || ''}
                onChange={handleChange}
              />
            )}
            {type === 'password' && (
              <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={formValues[name] || ''}
                onChange={handleChange}
              />
            )}
            {type === 'select' && (
              <select
                name={name}
                id={name}
                value={formValues[name] || ''}
                onChange={handleChange}
              >
                {options?.map((option) => (
                  <option key={option as string} value={option as string}>
                    {option as string}
                  </option>
                ))}
              </select>
            )}
            {type === 'checkbox' && (
              <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={formValues[name] || ''}
                onChange={handleChange}
              />
            )}
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;