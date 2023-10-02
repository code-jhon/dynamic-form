import React from 'react';
import DynamicForms from '../components/DynamicForms';
import ModalValues from '../components/ModalValues';
import { config } from '../config';
import { Field, Data } from '../entities/types';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [formValues, setFormValues] = React.useState<Data>({});

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Dynamic Forms</h2>
      <DynamicForms config={config as Field[]} openModal={() => setIsModalOpen(true)} formValues={formValues} setFormValues={setFormValues} />
      { isModalOpen && <ModalValues data={formValues} onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default Home;