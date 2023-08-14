function DisplayEducation({ info }) {
  return (
    <div className="display-education">
      <p>{info.degree}</p>
      <p>{info.school}</p>
      <p>{info.startDate}</p>
      <p>{info.endDate}</p>
      <p>{info.description}</p>
    </div>
  );
}

export default DisplayEducation;
