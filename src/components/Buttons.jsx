import '../styles/Buttons.css';

function AddButton({ handleClick, title }) {
  return (
    <button type="button" onClick={handleClick}>
      + {title}
    </button>
  );
}

function SaveButton({ handleClick }) {
  return (
    <button type="submit" onClick={handleClick} className="save-btn">
      Save
    </button>
  );
}

function CancelButton({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="cancel-btn">
      Cancel
    </button>
  );
}

function EditButton({ handleClick, objId }) {
  return (
    <button type="button" onClick={() => handleClick(objId)}>
      <img src="/square-edit-outline.svg" className="btn-icon" alt="" />
    </button>
  );
}

function DeleteButton({ handleClick, objId }) {
  return (
    <button type="button" onClick={() => handleClick(objId)}>
      <img src="/trash-can-outline.svg" className="btn-icon" alt="" />
    </button>
  );
}

export { AddButton, SaveButton, CancelButton, EditButton, DeleteButton };
