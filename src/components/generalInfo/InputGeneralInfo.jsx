import { useState } from 'react';
import GeneralForm from './GeneralForm';
import { EditButton } from '../Buttons';

function InputGeneralInfo({ info, handleChange }) {
  const [showInputs, setShowInputs] = useState(true);

  const save = (e) => {
    e.preventDefault();
    setShowInputs(false);
  };

  const edit = () => {
    setShowInputs(true);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {showInputs ? (
        <GeneralForm info={info} handleChange={handleChange} handleClick={save} />
      ) : (
        <div>
          <h3>{info.name}</h3>
          <EditButton handleClick={edit} />
        </div>
      )}
    </div>
  );
}

export default InputGeneralInfo;
