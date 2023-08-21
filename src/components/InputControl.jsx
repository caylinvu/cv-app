import { generalExample, workExample, eduExample } from '../data/example-resume';

function InputControl({
  setGeneralInfo,
  setWorkExp,
  setEducation,
  setNewWorkId,
  setNewEduId,
  setGenPrev,
  setWorkPrev,
  setEduPrev,
  setShowGen,
  setShowWork,
  setShowEdu,
}) {
  const loadExample = () => {
    setGeneralInfo(generalExample);
    setGenPrev(generalExample);
    setWorkExp(workExample);
    setWorkPrev(workExample);
    setNewWorkId(2);
    setEducation(eduExample);
    setEduPrev(eduExample);
    setNewEduId(1);
    setShowGen(true);
    setShowWork(false);
    setShowEdu(false);
  };

  const clearResume = () => {
    setGeneralInfo({
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    });
    setGenPrev({
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    });
    setWorkExp([]);
    setWorkPrev([]);
    setNewWorkId(0);
    setEducation([]);
    setEduPrev([]);
    setNewEduId(0);
    setShowGen(true);
    setShowWork(false);
    setShowEdu(false);
  };

  return (
    <div className="input-controls">
      <button type="button" className="clear" onClick={clearResume}>
        Clear Resume
      </button>
      <button type="button" onClick={loadExample}>
        Load Example
      </button>
    </div>
  );
}

export default InputControl;
