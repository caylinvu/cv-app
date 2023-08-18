import { SaveButton, CancelButton } from '../Buttons';

function EducationForm({ activeObj, handleChange, handleSave, handleCancel }) {
  return (
    <form className="form">
      <div className={activeObj.id} id="education-inputs">
        <div className="input">
          <label htmlFor="edu-school">School</label>
          <input
            type="text"
            placeholder="School / University"
            name="school"
            id="edu-school"
            value={activeObj.school}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="edu-degree">Degree</label>
          <input
            type="text"
            placeholder="Degree / Field of Study"
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
            placeholder="Start Date"
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
            placeholder="End Date"
            name="endDate"
            id="edu-end"
            value={activeObj.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="edu-description">Description</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            id="edu-description"
            value={activeObj.description}
            onChange={handleChange}
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
