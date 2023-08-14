function DisplayEducation({ info }) {
  return info.map((obj) => {
    return (
      <div className="display-education" key={obj.id}>
        <p>{obj.degree}</p>
        <p>{obj.school}</p>
        <p>{obj.startDate}</p>
        <p>{obj.endDate}</p>
        <p>{obj.description}</p>
      </div>
    );
  });
}

export default DisplayEducation;
