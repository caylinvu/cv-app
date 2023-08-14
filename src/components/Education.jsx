import { useState } from 'react';

function SaveEduBtn({ counter, setCounter, setShowInputs }) {
  const saveEducation = (e) => {
    setCounter(counter + 1);
    setShowInputs(false);
  };

  return (
    <button type="button" onClick={saveEducation}>
      Save
    </button>
  );
}

function EducationInputs({ info, handleChange, counter, setCounter, setShowInputs }) {
  return (
    <div>
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
      <SaveEduBtn counter={counter} setCounter={setCounter} setShowInputs={setShowInputs} />
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

function Education({ info, handleChange, counter, setCounter }) {
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div className="education">
      {showInputs ? (
        <EducationInputs
          info={info}
          handleChange={handleChange}
          counter={counter}
          setCounter={setCounter}
          setShowInputs={setShowInputs}
        />
      ) : (
        <div>
          {info.map((obj) => {
            return <p key={obj.id}>{obj.school}</p>;
          })}
          <AddEducationBtn setShowInputs={setShowInputs} />
        </div>
      )}
    </div>
  );
}

export default Education;
