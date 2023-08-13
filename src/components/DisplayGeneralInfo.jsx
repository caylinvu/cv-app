function DisplayGeneralInfo({info}) {
    return (
        <div className="display-general-info">
            <p>{info.name}</p>
            <p>{info.title}</p>
            <p>{info.email}</p>
            <p>{info.phone}</p>
            <p>{info.location}</p>
            <p>{info.description}</p>
        </div>
    );
}

export default DisplayGeneralInfo