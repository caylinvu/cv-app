import { SaveButton, CancelButton } from '../Buttons';

function WorkExpForm({ activeObj, handleChange, handleSave, handleCancel }) {
  return (
    <form className="form" id="work-form">
      <div className={activeObj.id} id="work-exp-inputs">
        <div className="input">
          <label htmlFor="work-company">Company</label>
          <input
            type="text"
            placeholder="Enter company name"
            name="company"
            id="work-company"
            value={activeObj.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="work-position">Position</label>
          <input
            type="text"
            placeholder="Enter position title"
            name="position"
            id="work-position"
            value={activeObj.position}
            onChange={handleChange}
          />
        </div>
        <div className="date-div">
          <div className="input">
            <label htmlFor="work-start">Start Date</label>
            <input
              type="text"
              placeholder="Enter start date"
              name="startDate"
              id="work-start"
              value={activeObj.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="work-end">End Date</label>
            <input
              type="text"
              placeholder="Enter end date"
              name="endDate"
              id="work-end"
              value={activeObj.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="work-location">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            name="location"
            id="work-location"
            value={activeObj.location}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="work-description">Description</label>
          <textarea
            placeholder="Enter work description and responsibilities"
            name="description"
            id="work-description"
            value={activeObj.description}
            onChange={handleChange}
            rows="4"
          />
        </div>
      </div>
      <div className="form-btns">
        <SaveButton handleClick={handleSave} />
        <CancelButton handleClick={handleCancel} />
      </div>
    </form>
  );
}

export default WorkExpForm;
