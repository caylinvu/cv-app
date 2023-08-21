function DisplayWorkExp({ workExp }) {
  return (
    <div className="display-work-exp">
      {workExp.length > 0 ? <h2 className="display-header">Work Experience</h2> : ''}
      {workExp.map((obj) => {
        return (
          <div className="work-entry" key={obj.id}>
            <div className="bold">
              <p>{obj.company}</p>
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
              <p>{obj.position}</p>
              <p>{obj.location}</p>
            </div>
            <p className="desc">{obj.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayWorkExp;
