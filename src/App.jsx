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

  const [eduCounter, setEduCounter] = useState(0);

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
    const parentId = e.target.parentElement.id;
    let nextArr = [];

    if (education.length < 1) {
      nextArr = [
        {
          id: eduCounter,
          [e.target.name]: e.target.value,
        },
      ];
    } else {
      nextArr = education.map((obj) => {
        if (obj.id == null) {
          return {
            id: eduCounter,
            [e.target.name]: e.target.value,
          };
        } else if (obj.id != parentId) {
          return obj;
        } else {
          return {
            ...obj,
            [e.target.name]: e.target.value,
          };
        }
      });
    }

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
          info={education}
          handleChange={handleEducationChange}
          counter={eduCounter}
          setCounter={setEduCounter}
        />
        <WorkExp info={workExp} handleChange={handleWorkChange} />
      </div>
      <div className="display-container">
        <DisplayGeneralInfo info={generalInfo} />
        <DisplayEducation info={education} />
        <DisplayWorkExp info={workExp} />
      </div>
    </>
  );
}

export default App;

// NEED TO MAKE INPUTS FORMS

// add ability to add additional education/work experience

// add ability to remove education/work experience
