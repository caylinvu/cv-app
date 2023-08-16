import { useState } from 'react';
import EducationForm from './EducationForm';
import { AddButton, EditButton, DeleteButton } from '../Buttons';

function InputEducation({ education, setEducation, handleChange }) {
  const [showInputs, setShowInputs] = useState(false);
  const [newId, setNewId] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const activeObj = education.find((obj) => obj.id == isActive);

  const addEducation = () => {
    setIsActive(newId);
    setShowInputs(true);
    setEducation([
      ...education,
      {
        id: newId,
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
    setNewId(newId + 1);
  };

  const saveEducation = (e) => {
    e.preventDefault();
    setShowInputs(false);
  };

  const editEducation = (e) => {
    setIsActive(e.target.className);
    setShowInputs(true);
  };

  const deleteEducation = (e) => {
    let newArr = education.filter((obj) => obj.id != e.target.className);
    setEducation(newArr);
  };

  return (
    <div className="input-education">
      <h2>Education</h2>
      {showInputs ? (
        <EducationForm
          activeObj={activeObj}
          handleChange={handleChange}
          handleClick={saveEducation}
        />
      ) : (
        <div className="education-preview">
          {education.map((obj) => {
            return (
              <div className="school" key={obj.id}>
                <p>{obj.school}</p>
                <EditButton handleClick={editEducation} className={obj.id} />
                <DeleteButton handleClick={deleteEducation} className={obj.id} />
              </div>
            );
          })}
          <AddButton handleClick={addEducation} title="Education" />
        </div>
      )}
    </div>
  );
}

export default InputEducation;
