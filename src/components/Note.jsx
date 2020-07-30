import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {
  const id = props.id;
  const deleteItself = () => {
    props.onDelete(id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItself} type="button">
        <DeleteIcon titleAccess="delete" />
      </button>
    </div>
  );
};

export default Note;
