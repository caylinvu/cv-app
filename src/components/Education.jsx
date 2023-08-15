import { useState } from 'react';

function SaveEduBtn({ counter, setCounter, setShowInputs, setIsActive }) {
  const saveEducation = () => {
    setCounter(counter + 1);
    setShowInputs(false);
    setIsActive(counter + 1);
  };

  return (
    <button type="button" onClick={saveEducation}>
      Save
    </button>
  );
}

function EducationInputs({ info, handleChange, counter, setCounter, setShowInputs, setIsActive }) {
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
      <SaveEduBtn
        counter={counter}
        setCounter={setCounter}
        setShowInputs={setShowInputs}
        setIsActive={setIsActive}
      />
    </div>
  );
}

function AddEducationBtn({ setShowInputs, setEducation, info, counter, setIsActive }) {
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

  return (
    <div className="education">
      {showInputs ? (
        <EducationInputs
          info={info[isActive]}
          handleChange={handleChange}
          counter={counter}
          setCounter={setCounter}
          setShowInputs={setShowInputs}
          isActive={isActive}
          setIsActive={setIsActive}
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
          />
        </div>
      )}
    </div>
  );
}

export default Education;
