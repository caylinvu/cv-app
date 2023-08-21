function DisplayEducation({ education }) {
  return (
    <div className="display-education">
      {education.length > 0 ? <h2 className="display-header">Education</h2> : ''}
      {education.map((obj) => {
        return (
          <div className="education-entry" key={obj.id}>
            <p>{obj.school}</p>
            <p>{obj.degree}</p>
            <p>{obj.startDate}</p>
            <p>{obj.endDate}</p>
            <p>{obj.location}</p>
            <p>{obj.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayEducation;
