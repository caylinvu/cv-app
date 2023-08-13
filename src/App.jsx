import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/GeneralInfo'
import DisplayGeneralInfo from './components/DisplayGeneralInfo';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    description: '',
  });

  const handleGeneralChange = (e) => {
    setGeneralInfo({...generalInfo, [e.target.name]: e.target.value});
  };

  return (
    <>
      <div className="input-container">
        <GeneralInfo info={generalInfo} handleChange={handleGeneralChange} />
      </div>
      <div className="display-container">
        <DisplayGeneralInfo info={generalInfo} />
      </div>
    </>
  )
}

export default App
