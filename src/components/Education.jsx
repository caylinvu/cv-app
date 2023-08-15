import { useState } from 'react';

function SaveEduBtn({ setShowInputs }) {
  const saveEducation = (e) => {
    e.preventDefault();
    setShowInputs(false);
  };

  return (
    <button type="submit" onClick={saveEducation}>
      Save
    </button>
  );
}

function EducationForm({ activeObj, handleChange, setShowInputs }) {
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
      <SaveEduBtn setShowInputs={setShowInputs} />
    </form>
  );
}

function AddEduBtn({ setShowInputs, setEducation, education, newId, setIsActive, setNewId }) {
  const addEducation = () => {
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
    setIsActive(newId);
    setNewId(newId + 1);
  };

  return (
    <button type="button" onClick={addEducation}>
      + Education
    </button>
  );
}

function Education({ education, handleChange, setEducation }) {
  const [showInputs, setShowInputs] = useState(false);
  const [newId, setNewId] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const activeObj = education.find((obj) => obj.id == isActive);
  // console.log(currentObj);

  return (
    <div className="education">
      {showInputs ? (
        <EducationForm
          activeObj={activeObj}
          handleChange={handleChange}
          setShowInputs={setShowInputs}
        />
      ) : (
        <div>
          {education.map((obj) => {
            return <p key={obj.id}>{obj.school}</p>;
          })}
          <AddEduBtn
            setShowInputs={setShowInputs}
            setEducation={setEducation}
            education={education}
            newId={newId}
            setIsActive={setIsActive}
            setNewId={setNewId}
          />
        </div>
      )}
    </div>
  );
}

export default Education;
