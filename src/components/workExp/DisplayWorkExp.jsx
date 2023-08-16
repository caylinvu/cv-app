function DisplayWorkExp({ workExp }) {
  let title = '';
  if (workExp.length > 0) {
    title = 'Work Experience';
  } else {
    title = '';
  }

  return (
    <div className="display-work-exp">
      <h2>{title}</h2>
      {workExp.map((obj) => {
        return (
          <div className="work-entry" key={obj.id}>
            <p>{obj.company}</p>
            <p>{obj.position}</p>
            <p>{obj.startDate}</p>
            <p>{obj.endDate}</p>
            <p>{obj.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayWorkExp;
