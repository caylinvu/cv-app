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

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  });
  const [genPrev, setGenPrev] = useState(generalInfo);
  const [showGen, setShowGen] = useState(true);

  const [workExp, setWorkExp] = useState([]);
  const [workPrev, setWorkPrev] = useState([]);
  const [newWorkId, setNewWorkId] = useState(0);
  const [showWork, setShowWork] = useState(false);

  const [education, setEducation] = useState([]);
  const [eduPrev, setEduPrev] = useState([]);
  const [newEduId, setNewEduId] = useState(0);
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

// STYLING INPUT TO DOS

// edit placeholder text

// maybe add recommended fields????

// maybe make start + end dates side by side

// maybe take out summary and title on general information

// MAYBE ADD ABILITY TO EXPAND SECTIONS

// MAYBE disable other add button when clicking on add

// set character limits????

// maybe add current/ongoing toggle for dates

//

// STYLING DISPLAY TO DOS

//

// ALL TO DOS

// style everything

// make responsive
