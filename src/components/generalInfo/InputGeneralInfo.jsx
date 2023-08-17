import { useState } from 'react';
import GeneralForm from './GeneralForm';
import { EditButton } from '../Buttons';

function InputGeneralInfo({ info, setInfo }) {
  const [showInputs, setShowInputs] = useState(true);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    setShowInputs(false);
  };

  const edit = () => {
    setShowInputs(true);
  };

  return (
    <div className="input-section">
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
