import { SaveButton, CancelButton } from '../Buttons';

function EducationForm({ activeObj, handleChange, handleSave, handleCancel }) {
  return (
    <form className="form" id="edu-form">
      <div className={activeObj.id} id="education-inputs">
        <div className="input">
          <label htmlFor="edu-school">School</label>
          <input
            type="text"
            placeholder="Enter school / university"
            name="school"
            id="edu-school"
            value={activeObj.school}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="edu-degree">Degree</label>
          <input
            type="text"
            placeholder="Enter degree / field of study"
            name="degree"
            id="edu-degree"
            value={activeObj.degree}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="edu-start">Start Date</label>
          <input
            type="text"
            placeholder="Enter start date"
            name="startDate"
            id="edu-start"
            value={activeObj.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="edu-end">End Date</label>
          <input
            type="text"
            placeholder="Enter end date"
            name="endDate"
            id="edu-end"
            value={activeObj.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="edu-location">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            name="location"
            id="edu-location"
            value={activeObj.location}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="edu-description">Description</label>
          <textarea
            placeholder="Enter additional school description and extracurricular activities (optional)"
            name="description"
            id="edu-description"
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

export default EducationForm;
