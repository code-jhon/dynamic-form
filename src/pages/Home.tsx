import React from 'react';
import DynamicForms from '../components/DynamicForms';
import { config } from '../config';
import { Field } from '../entities/types';

const Home: React.FC = () => {

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Dynamic Forms</h2>
      <DynamicForms config={config as Field[]} />
    </div>
  )
}

export default Home;