import { SaveButton, CancelButton } from '../Buttons';

function GeneralForm({ info, handleChange, handleSave, handleCancel }) {
  return (
    <form className="form" id="general-form">
      <div id="general-inputs">
        <div className="input">
          <label htmlFor="gen-name">Full Name</label>
          <input
            type="text"
            placeholder="First & Last Name"
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
            placeholder="Title"
            name="title"
            id="gen-title"
            value={info.title}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gen-email">Email Address</label>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            id="gen-email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gen-phone">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
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
            placeholder="Location"
            name="location"
            id="gen-location"
            value={info.location}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gen-summary">Summary</label>
          <input
            type="text"
            placeholder="Summary"
            name="summary"
            id="gen-summary"
            value={info.summary}
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

export default GeneralForm;
