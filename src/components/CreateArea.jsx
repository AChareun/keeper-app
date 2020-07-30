import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const CreateArea = (props) => {
  const [isExtended, setExtended] = React.useState(false);
  const [inputValues, setValue] = React.useState({ title: '', content: '' });

  const valuesOnChange = (e) => {
    const { name, value } = e.target;

    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addNote = () => {
    props.onAdd(inputValues);
    setValue({ title: '', content: '' });
  };

  return (
    <form className="create-note">
      {isExtended && (
        <input
          onChange={valuesOnChange}
          value={inputValues.title}
          name="title"
          placeholder="Title"
        />
      )}
      <textarea
        onChange={valuesOnChange}
        value={inputValues.content}
        name="content"
        placeholder="Take a note..."
        onFocus={() => setExtended(true)}
        rows={isExtended ? 3 : 1}
      />
      <Zoom in={isExtended}>
        <Fab onClick={addNote} type="button">
          <AddIcon titleAccess="add" />
        </Fab>
      </Zoom>
    </form>
  );
};

export default CreateArea;
