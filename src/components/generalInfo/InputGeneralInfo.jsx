import { useState } from 'react';
import GeneralForm from './GeneralForm';
import { EditButton } from '../Buttons';

function InputGeneralInfo({ info, setInfo, prevState, setPrevState }) {
  const [showInputs, setShowInputs] = useState(true);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    setShowInputs(false);
    setPrevState(info);
  };

  const cancel = (e) => {
    setInfo(prevState);
    setShowInputs(false);
  };

  const edit = () => {
    setShowInputs(true);
  };

  return (
    <div className="input-section">
      <h2 className="gen-title">General Information</h2>
      {showInputs ? (
        <GeneralForm
          info={info}
          handleChange={handleChange}
          handleSave={save}
          handleCancel={cancel}
        />
      ) : (
        <div className="entry">
          <h3>{info.name}</h3>
          <EditButton handleClick={edit} />
        </div>
      )}
    </div>
  );
}

export default InputGeneralInfo;
