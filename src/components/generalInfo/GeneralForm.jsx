import { SaveButton, CancelButton } from '../Buttons';

function GeneralForm({ info, handleChange, handleSave, handleCancel }) {
  return (
    <form className="form" id="general-form">
      <div id="general-inputs">
        <div className="input">
          <label htmlFor="gen-name">Full name</label>
          <input
            type="text"
            placeholder="Enter first and last name"
            name="name"
            id="gen-name"
            value={info.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="gen-title">Title</label>
          <input
            type="text"
            placeholder="Enter title (optional)"
            name="title"
            id="gen-title"
            value={info.title}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gen-email">Email address</label>
          <input
            type="text"
            placeholder="Enter email address"
            name="email"
            id="gen-email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gen-phone">Phone number</label>
          <input
            type="text"
            placeholder="Enter phone number"
            name="phone"
            id="gen-phone"
            value={info.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gen-location">Location</label>
          <input
            type="text"
            placeholder="City, State / Country"
            name="location"
            id="gen-location"
            value={info.location}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gen-summary">Summary</label>
          <textarea
            placeholder="Enter short summary to appear at top of resume"
            name="summary"
            id="gen-summary"
            value={info.summary}
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

export default GeneralForm;
