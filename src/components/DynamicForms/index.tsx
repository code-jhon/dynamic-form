import React from 'react';
import { Field, Data } from '../../entities/types';
import { getInitialData } from '../../utils/functions';
import "./styles.scss"

type Props = {
  config: Field[];
  openModal: () => void;
  formValues: Data;
  setFormValues: (values: Data) => void;
};

const DynamicForm: React.FC<Props> = ({ config, openModal, formValues, setFormValues }) => {
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<Data>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue: boolean | string = type === "checkbox" ? !!(e.target as HTMLInputElement).checked : value;

    // check validations
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isValid){
      openModal();
    }    
  };
  
  const handleClear = () => {
    setFormValues(getInitialData(config));
  }

  // function to handle onBlur event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  // now we need to validate the fields
  const validateField = (name: string, value: string) => {
    const field = config.find((f) => f.name === name);
    if (field?.validation) {
      const { required, pattern } = field.validation;
      if (required && !value) {
        return 'Required';
      }
      if (pattern && !RegExp(pattern).test(value)) {
        return 'Invalid';
      }
    }
    return '';
  };


  // function to check if the form is valid
  React.useEffect(() => {
    const isFormValid = () => {
      let isValid = true;
      config.forEach((field) => {
        const { validation, name } = field;
        if (validation?.required) {
          if (!formValues[name]) {
            isValid = false;
          }
        }
      });
      return isValid;
    };
    setIsValid(isFormValid());
  }, [config, formValues]);

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field, index) => {
        const { type, name, label, placeholder, options, validation } = field;
        const requiredStyle: string = validation?.required ? 'required' : '';
        return (
          <div className={`mb-4 ${requiredStyle}`} key={index}>
            <label className="block text-gray-600" htmlFor={name}>{label}{' '}</label>
            {type === 'text' && (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formValues[name] as string}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 p-2 w-full border rounded-md`}
              />
            )}
            {type === 'email' && (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formValues[name] as string}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 p-2 w-full border rounded-md`}
              />
            )}
            {type === 'password' && (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formValues[name] as string}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 p-2 w-full border rounded-md`}
              />
            )}
            {type === 'select' && (
              <select
                name={name}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md`}
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
                checked={formValues[name] as boolean}
                onChange={handleChange}
                className="form-checkbox"
              />
            )}
          </div>
        );
      })}
      <button disabled={!isValid} className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 me-2 rounded disabled:opacity-75`} type="submit">Submit</button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 me-2 rounded" type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default DynamicForm;