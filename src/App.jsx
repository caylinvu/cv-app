import { useState } from 'react';
import './styles/App.css';
import InputGeneralInfo from './components/generalInfo/InputGeneralInfo';
import InputExperience from './components/InputExperience';
import EducationForm from './components/education/EducationForm';
import WorkExpForm from './components/workExp/WorkExpForm';
import DisplayGeneralInfo from './components/generalInfo/DisplayGeneralInfo';
import DisplayEducation from './components/education/DisplayEducation';
import DisplayWorkExp from './components/workExp/DisplayWorkExp';
import InputControl from './components/InputControl';
import { generalExample, workExample, eduExample } from './data/example-resume';

function App() {
  const [generalInfo, setGeneralInfo] = useState(generalExample);
  const [genPrev, setGenPrev] = useState(generalInfo);
  const [showGen, setShowGen] = useState(true);

  const [workExp, setWorkExp] = useState(workExample);
  const [workPrev, setWorkPrev] = useState(workExp);
  const [newWorkId, setNewWorkId] = useState(2);
  const [showWork, setShowWork] = useState(false);

  const [education, setEducation] = useState(eduExample);
  const [eduPrev, setEduPrev] = useState(education);
  const [newEduId, setNewEduId] = useState(1);
  const [showEdu, setShowEdu] = useState(false);

  return (
    <>
      <div className="input-container">
        <InputControl
          setGeneralInfo={setGeneralInfo}
          setWorkExp={setWorkExp}
          setEducation={setEducation}
          setNewWorkId={setNewWorkId}
          setNewEduId={setNewEduId}
          setGenPrev={setGenPrev}
          setWorkPrev={setWorkPrev}
          setEduPrev={setEduPrev}
          setShowGen={setShowGen}
          setShowWork={setShowWork}
          setShowEdu={setShowEdu}
        />
        <InputGeneralInfo
          info={generalInfo}
          setInfo={setGeneralInfo}
          prevState={genPrev}
          setPrevState={setGenPrev}
          showInputs={showGen}
          setShowInputs={setShowGen}
        />
        <InputExperience
          section={workExp}
          setSection={setWorkExp}
          Form={WorkExpForm}
          title="Work Experience"
          newId={newWorkId}
          setNewId={setNewWorkId}
          prevState={workPrev}
          setPrevState={setWorkPrev}
          showInputs={showWork}
          setShowInputs={setShowWork}
        />
        <InputExperience
          section={education}
          setSection={setEducation}
          Form={EducationForm}
          title="Education"
          newId={newEduId}
          setNewId={setNewEduId}
          prevState={eduPrev}
          setPrevState={setEduPrev}
          showInputs={showEdu}
          setShowInputs={setShowEdu}
        />
      </div>
      <div className="display-container">
        <DisplayGeneralInfo info={generalInfo} />
        <DisplayWorkExp workExp={workExp} />
        <DisplayEducation education={education} />
      </div>
    </>
  );
}

export default App;

// FUTURE TO DOS

// add ability to expand/minimize sections

// set character limits????

// add current/ongoing toggle for dates

// create new resume page if overflow

// add ability to customize resume color/font
