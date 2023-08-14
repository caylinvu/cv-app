function WorkExp({ info, handleChange }) {
  return (
    <div className="work-exp">
      <input
        type="text"
        placeholder="Company"
        name="company"
        value={info.company}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={info.position}
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

export default WorkExp;
