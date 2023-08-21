function DisplayGeneralInfo({ info }) {
  return (
    <div className="display-general-info">
      <div className="basic-info">
        <h1>{info.name}</h1>
        <h2>{info.title}</h2>
        <div className="info-container">
          <div>
            {!info.email ? '' : <img src="/email.svg" className="resume-icon" alt="" />}
            <p>{info.email}</p>
          </div>
          <div>
            {!info.phone ? '' : <img src="/phone.svg" className="resume-icon" alt="" />}
            <p>{info.phone}</p>
          </div>
          <div>
            {!info.location ? '' : <img src="/map-marker.svg" className="resume-icon" alt="" />}
            <p>{info.location}</p>
          </div>
        </div>
      </div>
      <div className="summary">
        {info.summary ? <h2>Summary</h2> : ''}
        <p>{info.summary}</p>
      </div>
    </div>
  );
}

export default DisplayGeneralInfo;
