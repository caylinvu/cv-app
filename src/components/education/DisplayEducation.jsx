function DisplayEducation({ education }) {
  return (
    <div className="display-education">
      {education.length > 0 ? <h2 className="display-header">Education</h2> : ''}
      {education.map((obj) => {
        return (
          <div className="education-entry" key={obj.id}>
            <div className="bold">
              <p>{obj.school}</p>
              {obj.startDate && obj.endDate ? (
                <p>
                  {obj.startDate}-{obj.endDate}
                </p>
              ) : (obj.startDate && !obj.endDate) || (!obj.startDate && obj.endDate) ? (
                <p>
                  {obj.startDate}
                  {obj.endDate}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="italic">
              <p>{obj.degree}</p>
              <p>{obj.location}</p>
            </div>
            <p className="desc">{obj.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayEducation;
