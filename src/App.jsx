import { useState } from 'react';
import './styles/App.css';
import InputGeneralInfo from './components/generalInfo/InputGeneralInfo';
import DisplayGeneralInfo from './components/generalInfo/DisplayGeneralInfo';
import DisplayEducation from './components/education/DisplayEducation';
import DisplayWorkExp from './components/workExp/DisplayWorkExp';
import EducationForm from './components/education/EducationForm';
import WorkExpForm from './components/workExp/WorkExpForm';
import InputExperience from './components/InputExperience';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    description: '',
  });

  const [education, setEducation] = useState([]);

  const [workExp, setWorkExp] = useState([]);

  const handleGeneralChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="input-container">
        <InputGeneralInfo info={generalInfo} handleChange={handleGeneralChange} />
        <InputExperience
          section={education}
          setSection={setEducation}
          Form={EducationForm}
          title="Education"
        />
        <InputExperience
          section={workExp}
          setSection={setWorkExp}
          Form={WorkExpForm}
          title="Work Experience"
        />
      </div>
      <div className="display-container">
        <DisplayGeneralInfo info={generalInfo} />
        <DisplayEducation education={education} />
        <DisplayWorkExp workExp={workExp} />
      </div>
    </>
  );
}

export default App;

// ALL TO DOS

// add labels to fields

// set correct input fields (email, phone number, dates)

// maybe move change handlers to specific components

// maybe try to refactor some of the repeated education/work code

// general info - add ability to save info to minimize and add edit button to update fields

// style everything

// disable other add button when clicking on add

// DELETE INPUTEDUCATION AND INPUTWORKEXP COMPONENTS

//

// QUESTIONS

// is it better to leave different button types in different components or do one and pass info through
