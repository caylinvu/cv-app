import { useState } from 'react';
import { AddButton, EditButton, DeleteButton } from './Buttons';

function InputExperience({
  section,
  setSection,
  Form,
  title,
  newId,
  setNewId,
  prevState,
  setPrevState,
}) {
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
  };

  const saveExp = (e) => {
    e.preventDefault();
    setShowInputs(false);
    setPrevState(section);
    let currentObj = section.filter((obj) => obj.id == newId);
    console.log(currentObj.length > 0);
    if (currentObj.length > 0) {
      setNewId(newId + 1);
    }
  };

  const cancelExp = () => {
    setSection(prevState);
    setShowInputs(false);
  };

  const editExp = (objId) => {
    setIsActive(objId);
    setShowInputs(true);
  };

  const deleteExp = (objId) => {
    let newArr = section.filter((obj) => obj.id != objId);
    setSection(newArr);
  };

  return (
    <div className="input-section">
      <div className="section-heading">
        <img
          src={title == 'Education' ? '/school.svg' : '/briefcase.svg'}
          className="section-icon"
          alt=""
        />
        <h2>{title}</h2>
      </div>
      {showInputs ? (
        <Form
          activeObj={activeObj}
          handleChange={handleChange}
          handleSave={saveExp}
          handleCancel={cancelExp}
        />
      ) : (
        <div className="input-preview">
          {section.map((obj) => {
            return (
              <div key={obj.id} className="entry">
                {title == 'Education' ? <h3>{obj.school}</h3> : <h3>{obj.company}</h3>}
                <div className="entry-btns">
                  <EditButton handleClick={editExp} objId={obj.id} />
                  <DeleteButton handleClick={deleteExp} objId={obj.id} />
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
