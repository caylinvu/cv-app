function DisplayEducation({ education }) {
  let title = '';
  if (education.length > 0) {
    title = 'Education';
  } else {
    title = '';
  }

  return (
    <div className="display-education">
      <h2>{title}</h2>
      {education.map((obj) => {
        return (
          <div className="education-entry" key={obj.id}>
            <p>{obj.degree}</p>
            <p>{obj.school}</p>
            <p>{obj.startDate}</p>
            <p>{obj.endDate}</p>
            <p>{obj.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayEducation;
