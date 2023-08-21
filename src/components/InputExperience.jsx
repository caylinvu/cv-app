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
  showInputs,
  setShowInputs,
}) {
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
    let form = '';
    let isFormValid = '';
    if (title == 'Education') {
      form = document.getElementById('edu-form');
      isFormValid = form.checkValidity();
    } else if (title == 'Work Experience') {
      form = document.getElementById('work-form');
      isFormValid = form.checkValidity();
    }

    if (!isFormValid) {
      form.reportValidity();
    } else {
      e.preventDefault();
      setShowInputs(false);
      setPrevState(section);
      let currentObj = section.filter((obj) => obj.id == newId);
      if (currentObj.length > 0) {
        setNewId(newId + 1);
      }
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
    setPrevState(newArr);
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
