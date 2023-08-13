function GeneralInfo({info, handleChange}) {
    return (
        <div className="general-info">
            <input type="text" placeholder="First & Last Name" name="name" value={info.name} onChange={handleChange} />
            <input type="text" placeholder="Title" name="title" value={info.title} onChange={handleChange} />
            <input type="text" placeholder="Email Address" name="email" value={info.email} onChange={handleChange} />
            <input type="text" placeholder="Phone Number" name="phone" value={info.phone} onChange={handleChange} />
            <input type="text" placeholder="Location" name="location" value={info.location} onChange={handleChange} />
            <input type="text" placeholder="Description" name="description" value={info.description} onChange={handleChange} />
        </div>
    );
}

export default GeneralInfo