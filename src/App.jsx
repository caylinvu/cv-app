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

  const [workExp, setWorkExp] = useState([]);

  const [newWorkId, setNewWorkId] = useState(0);

  const [education, setEducation] = useState([]);

  const [newEduId, setNewEduId] = useState(0);

  return (
    <>
      <div className="input-container">
        <InputControl
          setGeneralInfo={setGeneralInfo}
          setWorkExp={setWorkExp}
          setEducation={setEducation}
          setNewWorkId={setNewWorkId}
          setNewEduId={setNewEduId}
        />
        <InputGeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
        <InputExperience
          section={workExp}
          setSection={setWorkExp}
          Form={WorkExpForm}
          title="Work Experience"
          newId={newWorkId}
          setNewId={setNewWorkId}
        />
        <InputExperience
          section={education}
          setSection={setEducation}
          Form={EducationForm}
          title="Education"
          newId={newEduId}
          setNewId={setNewEduId}
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

// ALL TO DOS

// style everything

// add buttons to clear resume or load an example

// don't allow you to enter empty entries

// maybe add recommended fields

// MAYBE disable other add button when clicking on add

// set character limits????

// maybe add current/ongoing toggle for dates

// maybe add customization options

// leave date input fields as text or change to dates???

// edit example info

//

// QUESTIONS

// is it better to leave different button types in different components or do one and pass info through
