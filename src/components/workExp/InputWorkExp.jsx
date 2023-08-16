import { useState } from 'react';
import WorkExpForm from './WorkExpForm';
import { AddButton, EditButton, DeleteButton } from '../Buttons';

function InputWorkExp({ workExp, setWorkExp, handleChange }) {
  const [showInputs, setShowInputs] = useState(false);
  const [newId, setNewId] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const activeObj = workExp.find((obj) => obj.id == isActive);

  const addWorkExp = () => {
    setIsActive(newId);
    setShowInputs(true);
    setWorkExp([
      ...workExp,
      {
        id: newId,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
    setNewId(newId + 1);
  };

  const saveWorkExp = (e) => {
    e.preventDefault();
    setShowInputs(false);
  };

  const editWorkExp = (e) => {
    setIsActive(e.target.className);
    setShowInputs(true);
  };

  const deleteWorkExp = (e) => {
    let newArr = workExp.filter((obj) => obj.id != e.target.className);
    setWorkExp(newArr);
  };

  return (
    <div className="input-work-exp">
      <h2>Work Experience</h2>
      {showInputs ? (
        <WorkExpForm activeObj={activeObj} handleChange={handleChange} handleClick={saveWorkExp} />
      ) : (
        <div className="work-preview">
          {workExp.map((obj) => {
            return (
              <div className="job" key={obj.id}>
                <p>{obj.company}</p>
                <EditButton handleClick={editWorkExp} className={obj.id} />
                <DeleteButton handleClick={deleteWorkExp} className={obj.id} />
              </div>
            );
          })}
          <AddButton handleClick={addWorkExp} title="Work Experience" />
        </div>
      )}
    </div>
  );
}

export default InputWorkExp;

// ADD HANDLE CLICK FUNCTIONS

// UPDATE DISPLAY WORK EXP
