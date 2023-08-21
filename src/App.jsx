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
    name: 'Jan Smith',
    title: 'Software Engineer',
    email: 'jansmith@fakeemail.com',
    phone: '123-456-7890',
    location: 'Portland, Oregon',
    summary:
      'Young professional with 5 years of programming experience and a college background in Computer Science. Looking for new career opportunities where I can further improve my skills in web development and work alongside a passionate team in a company whose values align with mine. Open to work in any field where my experience is applicable, and also open to learning new skills.',
  });
  const [genPrev, setGenPrev] = useState(generalInfo);
  const [showGen, setShowGen] = useState(true);

  const [workExp, setWorkExp] = useState([
    {
      id: 0,
      company: 'Catmart Inc.',
      position: 'Software Engineer II',
      startDate: 'August 2020',
      endDate: 'present',
      location: 'Remote',
      description:
        'Developed the monitoring framework which interfaces with various applications. Supported new application features, serviced launch, and managed application using automated deployment tools.',
    },
    {
      id: 1,
      company: 'Meow Electronics',
      position: 'Software Engineer I',
      startDate: 'May 2018',
      endDate: 'July 2020',
      location: 'Portland, OR',
      description:
        'Monitored, supported, and deployed multi-tenant solutions. Developed efficient code to automate repetitive tasks. Improved systems and applications with analytics and ad hoc reporting.',
    },
  ]);
  const [workPrev, setWorkPrev] = useState(workExp);
  const [newWorkId, setNewWorkId] = useState(2);
  const [showWork, setShowWork] = useState(false);

  const [education, setEducation] = useState([
    {
      id: 0,
      degree: "Bachelor's Degree in Computer Science",
      school: 'University of Portland',
      startDate: 'August 2013',
      endDate: 'December 2017',
      location: 'Portland, OR',
      description: '',
    },
  ]);
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

// change resume name font

// add ability to expand/minimize sections

// set character limits????

// add current/ongoing toggle for dates

// create new resume page if overflow

//

// ALL TO DOS

// make responsive

// make example resume default on load
