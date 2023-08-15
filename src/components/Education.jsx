import { useState } from 'react';

function SaveEduBtn({ setShowInputs }) {
  const saveEducation = () => {
    setShowInputs(false);
  };

  return (
    <button type="button" onClick={saveEducation}>
      Save
    </button>
  );
}

function EducationInputs({ info, handleChange, setShowInputs }) {
  return (
    <div>
      <div className="education-inputs" id={info.id}>
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
      <SaveEduBtn setShowInputs={setShowInputs} />
    </div>
  );
}

function AddEducationBtn({ setShowInputs, setEducation, info, counter, setIsActive, setCounter }) {
  const addEducation = () => {
    setShowInputs(true);
    setEducation([
      ...info,
      {
        id: counter,
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
    setIsActive(counter);
    setCounter(counter + 1);
  };

  return (
    <button type="button" onClick={addEducation}>
      + Education
    </button>
  );
}

function Education({ info, handleChange, counter, setCounter, setEducation }) {
  const [showInputs, setShowInputs] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const currentObj = info.find((obj) => obj.id == isActive);
  console.log(currentObj);

  return (
    <div className="education">
      {showInputs ? (
        <EducationInputs
          info={currentObj}
          handleChange={handleChange}
          setShowInputs={setShowInputs}
        />
      ) : (
        <div>
          {info.map((obj) => {
            return <p key={obj.id}>{obj.school}</p>;
          })}
          <AddEducationBtn
            setShowInputs={setShowInputs}
            setEducation={setEducation}
            info={info}
            counter={counter}
            setIsActive={setIsActive}
            setCounter={setCounter}
          />
        </div>
      )}
    </div>
  );
}

export default Education;
