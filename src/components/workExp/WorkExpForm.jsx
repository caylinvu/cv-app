import { SaveButton } from '../Buttons';

function WorkExpForm({ activeObj, handleChange, handleClick }) {
  return (
    <form className="work-exp-form">
      <div className={activeObj.id} id="work-exp-inputs">
        <label htmlFor="work-company">Company</label>
        <input
          type="text"
          placeholder="Company"
          name="company"
          id="work-company"
          value={activeObj.company}
          onChange={handleChange}
        />
        <label htmlFor="work-position">Position</label>
        <input
          type="text"
          placeholder="Position"
          name="position"
          id="work-position"
          value={activeObj.position}
          onChange={handleChange}
        />
        <label htmlFor="work-start">Start Date</label>
        <input
          type="text"
          placeholder="Start Date"
          name="startDate"
          id="work-start"
          value={activeObj.startDate}
          onChange={handleChange}
        />
        <label htmlFor="work-end">End Date</label>
        <input
          type="text"
          placeholder="End Date"
          name="endDate"
          id="work-end"
          value={activeObj.endDate}
          onChange={handleChange}
        />
        <label htmlFor="work-description">Description</label>
        <input
          type="text"
          placeholder="Description"
          name="description"
          id="work-description"
          value={activeObj.description}
          onChange={handleChange}
        />
      </div>
      <SaveButton handleClick={handleClick} />
    </form>
  );
}

export default WorkExpForm;
