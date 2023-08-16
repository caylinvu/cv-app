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

function EditButton({ handleClick, id }) {
  return (
    <button type="button" onClick={handleClick} id={id}>
      Edit
    </button>
  );
}

function DeleteButton({ handleClick, id }) {
  return (
    <button type="button" onClick={handleClick} id={id}>
      Delete
    </button>
  );
}

export { AddButton, SaveButton, EditButton, DeleteButton };
