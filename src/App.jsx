import { useState } from 'react';
import './styles/App.css';
import InputGeneralInfo from './components/generalInfo/InputGeneralInfo';
import InputExperience from './components/InputExperience';
import EducationForm from './components/education/EducationForm';
import WorkExpForm from './components/workExp/WorkExpForm';
import DisplayGeneralInfo from './components/generalInfo/DisplayGeneralInfo';
import DisplayEducation from './components/education/DisplayEducation';
import DisplayWorkExp from './components/workExp/DisplayWorkExp';

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

  const [education, setEducation] = useState([]);

  return (
    <>
      <div className="input-container">
        <InputGeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
        <InputExperience
          section={workExp}
          setSection={setWorkExp}
          Form={WorkExpForm}
          title="Work Experience"
        />
        <InputExperience
          section={education}
          setSection={setEducation}
          Form={EducationForm}
          title="Education"
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

// don't allow you to enter empty entries

// maybe add recommended fields

// MAYBE disable other add button when clicking on add

// set character limits????

// maybe add current/ongoing toggle for dates

// maybe add customization options

// leave date input fields as text or change to dates???

//

// QUESTIONS

// is it better to leave different button types in different components or do one and pass info through
