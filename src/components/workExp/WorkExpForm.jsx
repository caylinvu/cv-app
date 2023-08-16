import { SaveButton } from '../Buttons';

function WorkExpForm({ activeObj, handleChange, handleClick }) {
  return (
    <form className="work-exp-form">
      <div className={activeObj.id} id="work-exp-inputs">
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={activeObj.company}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={activeObj.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Start Date"
          name="startDate"
          value={activeObj.startDate}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="End Date"
          name="endDate"
          value={activeObj.endDate}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={activeObj.description}
          onChange={handleChange}
        />
      </div>
      <SaveButton handleClick={handleClick} />
    </form>
  );
}

export default WorkExpForm;
