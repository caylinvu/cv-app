function InputControl({
  setGeneralInfo,
  setWorkExp,
  setEducation,
  setNewWorkId,
  setNewEduId,
  setGenPrev,
  setWorkPrev,
  setEduPrev,
  setShowGen,
  setShowWork,
  setShowEdu,
}) {
  const generalExample = {
    name: 'Jan Smith',
    title: 'Software Engineer',
    email: 'janetsmith@fakeemail.com',
    phone: '(123)-456-7890',
    location: 'Portland, Oregon',
    summary:
      'Young professional with 5 years of programming experience. Looking for new career opportunities where I can further improve my skills in web development and work alongside a passionate team in a company whose values align with mine.',
  };

  const workExample = [
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
  ];

  const eduExample = [
    {
      id: 0,
      degree: 'Computer Science',
      school: 'University of Portland',
      startDate: 'August 2013',
      endDate: 'December 2017',
      location: 'Portland, OR',
      description: '',
    },
  ];

  const loadExample = () => {
    setGeneralInfo(generalExample);
    setGenPrev(generalExample);
    setWorkExp(workExample);
    setWorkPrev(workExample);
    setNewWorkId(2);
    setEducation(eduExample);
    setEduPrev(eduExample);
    setNewEduId(1);
    setShowGen(false);
    setShowWork(false);
    setShowEdu(false);
  };

  const clearResume = () => {
    setGeneralInfo({
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    });
    setGenPrev({
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    });
    setWorkExp([]);
    setWorkPrev([]);
    setNewWorkId(0);
    setEducation([]);
    setEduPrev([]);
    setNewEduId(0);
    setShowGen(true);
    setShowWork(false);
    setShowEdu(false);
  };

  return (
    <div className="input-controls">
      <button type="button" className="clear" onClick={clearResume}>
        Clear Resume
      </button>
      <button type="button" onClick={loadExample}>
        Load Example
      </button>
    </div>
  );
}

export default InputControl;
