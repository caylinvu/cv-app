function AddButton({ handleClick, title }) {
  return (
    <button type="button" onClick={handleClick}>
      + {title}
    </button>
  );
}

function SaveButton({ handleClick }) {
  return (
    <button type="submit" onClick={handleClick}>
      Save
    </button>
  );
}

function EditButton({ handleClick, className }) {
  return (
    <button type="button" onClick={handleClick} className={className}>
      Edit
    </button>
  );
}

function DeleteButton({ handleClick, className }) {
  return (
    <button type="button" onClick={handleClick} className={className}>
      Delete
    </button>
  );
}

export { AddButton, SaveButton, EditButton, DeleteButton };
