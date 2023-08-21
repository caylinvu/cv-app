import GeneralForm from './GeneralForm';
import { EditButton } from '../Buttons';

function InputGeneralInfo({ info, setInfo, prevState, setPrevState, showInputs, setShowInputs }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    const form = document.getElementById('general-form');
    let isFormValid = form.checkValidity();
    if (!isFormValid) {
      form.reportValidity();
    } else {
      e.preventDefault();
      setShowInputs(false);
      setPrevState(info);
    }
  };

  const cancel = () => {
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
          prevState={prevState}
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
