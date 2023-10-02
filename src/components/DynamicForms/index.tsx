import React from 'react';
import { Field, Data } from '../../entities/types';

type Props = {
  config: Field[];
  openModal: () => void;
  formValues: Data;
  setFormValues: (values: Data) => void;
};

const DynamicForm: React.FC<Props> = ({ config, openModal, formValues, setFormValues }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field, index) => {
        const { type, name, label, placeholder, options } = field;
        return (
          <div className="mb-4" key={index}>
            <label className="block text-gray-600" htmlFor={name}>{label}</label>
            {type === 'text' && (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formValues[name] as string}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            )}
            {type === 'email' && (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formValues[name] as string}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            )}
            {type === 'password' && (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formValues[name] as string}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            )}
            {type === 'select' && (
              <select
                name={name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
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
                placeholder={placeholder}
                value={formValues[name] as boolean }
                onChange={handleChange}
                className="form-checkbox"
              />
            )}
          </div>
        );
      })}
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded' type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;