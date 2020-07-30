import React from 'react';

const Note = (props) => {
  const id = props.id;
  const deleteItself = () => {
    props.onDelete(id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItself} type="button">DELETE</button>
    </div>
  );
};

export default Note;
