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
    </div>
  );
}

export default Education;
