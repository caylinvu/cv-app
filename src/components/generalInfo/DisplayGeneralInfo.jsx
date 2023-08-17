function DisplayGeneralInfo({ info }) {
  return (
    <div className="display-general-info">
      <div>
        <h1>{info.name}</h1>
        <p>{info.title}</p>
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <p>{info.location}</p>
      </div>
      <div>
        {info.summary ? <h2>Summary</h2> : ''}
        <p>{info.summary}</p>
      </div>
    </div>
  );
}

export default DisplayGeneralInfo;
