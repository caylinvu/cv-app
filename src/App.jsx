import { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import DisplayGeneralInfo from './components/DisplayGeneralInfo';
import Education from './components/Education';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    description: '',
  });

  const [education, setEducation] = useState({
    degree: '',
    school: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleGeneralChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="input-container">
        <GeneralInfo info={generalInfo} handleChange={handleGeneralChange} />
        <Education info={education} handleChange={handleEducationChange} />
      </div>
      <div className="display-container">
        <DisplayGeneralInfo info={generalInfo} />
      </div>
    </>
  );
}

export default App;

// add basic education experience

// add basic work experience

// add ability to add additional education/work experience

// add ability to remove education/work experience
