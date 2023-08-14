import { useState } from 'react';

function EducationInputs({ info, handleChange, counter }) {
  return (
    <div className="education-inputs" id={counter}>
      <input
        type="text"
        placeholder="Degree / Field of Study"
        name="degree"
        value={info.degree}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="School / University"
        name="school"
        value={info.school}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Start Date"
        name="startDate"
        value={info.startDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="End Date"
        name="endDate"
        value={info.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={info.description}
        onChange={handleChange}
      />
    </div>
  );
}

function AddEducationBtn({ setShowInputs }) {
  const addEducation = () => {
    setShowInputs(true);
  };

  return (
    <button type="button" onClick={addEducation}>
      + Education
    </button>
  );
}

function Education({ info, handleChange, counter }) {
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div className="education">
      {showInputs ? (
        <EducationInputs info={info} handleChange={handleChange} counter={counter} />
      ) : (
        <AddEducationBtn setShowInputs={setShowInputs} />
      )}
    </div>
  );
}

export default Education;
