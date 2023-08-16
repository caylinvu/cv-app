import { useState } from 'react';
import './styles/App.css';
import InputGeneralInfo from './components/generalInfo/InputGeneralInfo';
import DisplayGeneralInfo from './components/generalInfo/DisplayGeneralInfo';
import InputEducation from './components/education/InputEducation';
import DisplayEducation from './components/education/DisplayEducation';
import InputWorkExp from './components/workExp/InputWorkExp';
import DisplayWorkExp from './components/workExp/DisplayWorkExp';

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
        <InputGeneralInfo info={generalInfo} handleChange={handleGeneralChange} />
        <InputEducation
          education={education}
          handleChange={handleEducationChange}
          setEducation={setEducation}
        />
        <InputWorkExp info={workExp} handleChange={handleWorkChange} />
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

//

// WORK TO DOS

// add ability to add additional work experience

// add ability to remove work experience

//

// ALL TO DOS

// add labels to fields

// set correct input fields (email, phone number, dates)

// maybe move change handlers to specific components

//

// QUESTIONS

// is it better to leave different button types in different components or do one and pass info through
