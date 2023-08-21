function DisplayWorkExp({ workExp }) {
  return (
    <div className="display-work-exp">
      {workExp.length > 0 ? <h2>Work Experience</h2> : ''}
      {workExp.map((obj) => {
        return (
          <div className="work-entry" key={obj.id}>
            <p>{obj.company}</p>
            <p>{obj.position}</p>
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

export default DisplayWorkExp;
