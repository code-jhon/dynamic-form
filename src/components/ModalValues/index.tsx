import { useState } from 'react'
import { Data } from '../../entities/types'

type Props = {
  data: Data,
  onClose: () => void
}

const ModalValues = ({ data, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="modal-header pb-3">
              <h3 className="text-lg font-semibold">User Information</h3>
            </div>
            <div className="modal-body">
              <ul className="list-none pl-0">
                <li>
                  <span className="font-medium">Name:</span> {data.name}
                </li>
                <li>
                  <span className="font-medium">Email:</span> {data.email}
                </li>
                <li>
                  <span className="font-medium">Country:</span> {data.country}
                </li>
                <li>
                  <span className="font-medium">Password:</span> { isVisible ? data.password : '********'}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded ml-2" onClick={() => setIsVisible(!isVisible)}> {isVisible ? 'Hide' : 'Show'}</button>
                </li>
                <li>
                  <span className="font-medium">Subscribe:</span> {data.subscribe || 'No'}
                </li>
              </ul>
            </div>
            <div className="modal-footer pt-3">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalValues;