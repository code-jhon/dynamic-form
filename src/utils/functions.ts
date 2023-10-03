// Purpose: Utility functions for the app.
import { Field } from "../entities/types"

type InitialData = { [key: string]: string | boolean };

// function to get the initial data from config values
export const getInitialData = (config: Field[]): InitialData => {
  const data: InitialData = {};
  config.forEach((field: Field) => {
    data[field.name] = field.value;
  });
  return data;
};