import { useState } from 'react';

function EducationForm({ activeObj, handleChange, handleClick }) {
  return (
    <form className="education-form">
      <div className="education-inputs" id={activeObj.id}>
        <input
          type="text"
          placeholder="Degree / Field of Study"
          name="degree"
          value={activeObj.degree}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="School / University"
          name="school"
          value={activeObj.school}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Start Date"
          name="startDate"
          value={activeObj.startDate}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="End Date"
          name="endDate"
          value={activeObj.endDate}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={activeObj.description}
          onChange={handleChange}
        />
      </div>
      <SaveEduBtn handleClick={handleClick} />
    </form>
  );
}

function AddEduBtn({ handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      + Education
    </button>
  );
}

function SaveEduBtn({ handleClick }) {
  return (
    <button type="submit" onClick={handleClick}>
      Save
    </button>
  );
}

function EditEduBtn({ handleClick, id }) {
  return (
    <button type="button" onClick={handleClick} id={id}>
      Edit
    </button>
  );
}

function DeleteEduBtn({ handleClick, id }) {
  return (
    <button type="button" onClick={handleClick} id={id}>
      Delete
    </button>
  );
}

function Education({ education, handleChange, setEducation }) {
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
    setIsActive(e.target.id);
    setShowInputs(true);
  };

  const deleteEducation = (e) => {
    let newArr = education.filter((obj) => obj.id != e.target.id);
    setEducation(newArr);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      {showInputs ? (
        <EducationForm
          activeObj={activeObj}
          handleChange={handleChange}
          handleClick={saveEducation}
        />
      ) : (
        <div>
          {education.map((obj) => {
            return (
              <div key={obj.id}>
                <p>{obj.school}</p>
                <EditEduBtn handleClick={editEducation} id={obj.id} />
                <DeleteEduBtn handleClick={deleteEducation} id={obj.id} />
              </div>
            );
          })}
          <AddEduBtn handleClick={addEducation} />
        </div>
      )}
    </div>
  );
}

export default Education;
