import { SaveButton } from '../Buttons';

function GeneralForm({ info, handleChange, handleClick }) {
  return (
    <form className="general-form">
      <div className="general-inputs">
        <label htmlFor="gen-name">Full Name</label>
        <input
          type="text"
          placeholder="First & Last Name"
          name="name"
          id="gen-name"
          value={info.name}
          onChange={handleChange}
        />
        <label htmlFor="gen-title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="gen-title"
          value={info.title}
          onChange={handleChange}
        />
        <label htmlFor="gen-email">Email Address</label>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          id="gen-email"
          value={info.email}
          onChange={handleChange}
        />
        <label htmlFor="gen-phone">Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          id="gen-phone"
          value={info.phone}
          onChange={handleChange}
        />
        <label htmlFor="gen-location">Location</label>
        <input
          type="text"
          placeholder="Location"
          name="location"
          id="gen-location"
          value={info.location}
          onChange={handleChange}
        />
        <label htmlFor="gen-description">Description</label>
        <input
          type="text"
          placeholder="Description"
          name="description"
          id="gen-description"
          value={info.description}
          onChange={handleChange}
        />
      </div>
      <SaveButton handleClick={handleClick} />
    </form>
  );
}

export default GeneralForm;
