export type ButtonType = 'button' | 'submit' | 'reset';

export interface Field {
  type: string | ButtonType,
  name: string,
  label?: string,
  placeholder?: string,
  options?: RadioItems[] | string[] | React.ReactNode[] | readonly string[],
  validation?: {
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,
    pattern?: string | RegExp,
    custom?: string
  },
  value: string | number | readonly string[] | undefined,
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}

export type RadioItems = {
  label: string,
  value: string
};

export type FormProps = {
  [key: string]: string | boolean;
};

export type Data = { [key: string]: string | boolean };