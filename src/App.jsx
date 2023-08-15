import { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import DisplayGeneralInfo from './components/DisplayGeneralInfo';
import Education from './components/Education';
import DisplayEducation from './components/DisplayEducation';
import WorkExp from './components/WorkExp';
import DisplayWorkExp from './components/DisplayWorkExp';

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

  const [workExp, setWorkExp] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleGeneralChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    const currentId = e.target.parentElement.id;

    let nextArr = education.map((obj) => {
      if (obj.id != currentId) {
        return obj;
      } else {
        return {
          ...obj,
          [e.target.name]: e.target.value,
        };
      }
    });

    setEducation(nextArr);
  };

  const handleWorkChange = (e) => {
    setWorkExp({ ...workExp, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="input-container">
        <GeneralInfo info={generalInfo} handleChange={handleGeneralChange} />
        <Education
          education={education}
          handleChange={handleEducationChange}
          setEducation={setEducation}
        />
        <WorkExp info={workExp} handleChange={handleWorkChange} />
      </div>
      <div className="display-container">
        <DisplayGeneralInfo info={generalInfo} />
        <DisplayEducation education={education} />
        <DisplayWorkExp info={workExp} />
      </div>
    </>
  );
}

export default App;

// EDUCATION TO DOS

// add ability to edit education experience

// add ability to remove education experience

//

// WORK TO DOS

// add ability to add additional work experience

// add ability to remove work experience

//

// ALL TO DOS

// add labels to fields

// set correct input fields (email, phone number, dates)
