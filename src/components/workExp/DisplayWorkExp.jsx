function DisplayWorkExp({ info }) {
  return (
    <div className="display-work-exp">
      <p>{info.company}</p>
      <p>{info.position}</p>
      <p>{info.startDate}</p>
      <p>{info.endDate}</p>
      <p>{info.description}</p>
    </div>
  );
}

export default DisplayWorkExp;
