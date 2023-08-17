function InputControl({ setGeneralInfo, setWorkExp, setEducation, setNewWorkId, setNewEduId }) {
  const generalExample = {
    name: 'Janet Smith',
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
      company: 'Cat Software Inc.',
      position: 'UI Designer',
      startDate: 'August 2020',
      endDate: 'present',
      description:
        'Designed user interface for a variety of clients and industries, including personal websites, notetaking apps, and mobile games.',
    },
    {
      id: 1,
      company: 'Industrial Sound',
      position: 'UX Reasearch Assistant',
      startDate: 'May 2018',
      endDate: 'July 2020',
      description:
        'Supported senior researchers on accessibility standards for the open web. Created and tested prototypes. Produced interactive documenentaion.',
    },
  ];

  // ADD EDUCATION EXAMPLE

  const loadExample = () => {
    setGeneralInfo(generalExample);
    setWorkExp(workExample);
    setNewWorkId(2);
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
    setWorkExp([]);
    setNewWorkId(0);
  };

  return (
    <div>
      <button type="button" onClick={clearResume}>
        Clear Resume
      </button>
      <button type="button" onClick={loadExample}>
        Load Example
      </button>
    </div>
  );
}

export default InputControl;
