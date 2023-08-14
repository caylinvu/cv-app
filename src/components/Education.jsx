function Education({ info, handleChange }) {
  return (
    <div className="education">
      <input
        type="text"
        placeholder="Degree / Field of Study"
        name="degree"
        value={info.degree}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="School / University"
        name="school"
        value={info.school}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Start Date"
        name="startDate"
        value={info.startDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="End Date"
        name="endDate"
        value={info.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={info.description}
        onChange={handleChange}
      />
    </div>
  );
}

export default Education;
