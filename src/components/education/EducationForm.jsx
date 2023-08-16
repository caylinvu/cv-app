import { SaveButton } from '../Buttons';

function EducationForm({ activeObj, handleChange, handleClick }) {
  return (
    <form className="education-form">
      <div className={activeObj.id} id="education-inputs">
        <input
          type="text"
          placeholder="Degree / Field of Study"
          name="degree"
          value={activeObj.degree}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="School / University"
          name="school"
          value={activeObj.school}
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

export default EducationForm;
