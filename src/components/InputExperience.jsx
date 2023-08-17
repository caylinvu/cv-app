import { useState } from 'react';
import { AddButton, EditButton, DeleteButton } from './Buttons';

function InputExperience({ section, setSection, Form, title, newId, setNewId }) {
  const [showInputs, setShowInputs] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const activeObj = section.find((obj) => obj.id == isActive);

  let newObj = '';
  if (title == 'Education') {
    newObj = {
      id: newId,
      degree: '',
      school: '',
      startDate: '',
      endDate: '',
      description: '',
    };
  } else if (title == 'Work Experience') {
    newObj = {
      id: newId,
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
  }

  const handleChange = (e) => {
    let nextArr = section.map((obj) => {
      if (obj.id != activeObj.id) {
        return obj;
      } else {
        return {
          ...obj,
          [e.target.name]: e.target.value,
        };
      }
    });

    setSection(nextArr);
  };

  const addExp = () => {
    setIsActive(newId);
    setShowInputs(true);
    setSection([...section, newObj]);
    setNewId(newId + 1);
  };

  const saveExp = (e) => {
    e.preventDefault();
    setShowInputs(false);
  };

  const editExp = (e) => {
    setIsActive(e.target.className);
    setShowInputs(true);
  };

  const deleteExp = (e) => {
    let newArr = section.filter((obj) => obj.id != e.target.className);
    setSection(newArr);
  };

  return (
    <div className="input-section">
      <h2>{title}</h2>
      {showInputs ? (
        <Form activeObj={activeObj} handleChange={handleChange} handleClick={saveExp} />
      ) : (
        <div className="input-preview">
          {section.map((obj) => {
            return (
              <div key={obj.id} className="entry">
                {title == 'Education' ? <h3>{obj.school}</h3> : <h3>{obj.company}</h3>}
                <div className="entry-btns">
                  <EditButton handleClick={editExp} className={obj.id} />
                  <DeleteButton handleClick={deleteExp} className={obj.id} />
                </div>
              </div>
            );
          })}
          <div className="add-btn">
            <AddButton handleClick={addExp} title={title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default InputExperience;
