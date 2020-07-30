import React from 'react';

const CreateArea = (props) => {
  const [inputValues, setValue] = React.useState({title: '', content: ''});

  const valuesOnChange = (e) => {
    const inputName = e.target.name;
    const newValue = e.target.value;

    setValue((prev) => {
      return {...prev, [inputName]: newValue};
    })
  }

  const addNote = () => {
    props.onAdd(inputValues);
    setValue({title: '', content: ''});
  }

  return (
    <form>
      <input onChange={valuesOnChange} value={inputValues.title} name="title" placeholder="Title"/>
      <textarea onChange={valuesOnChange} value={inputValues.content} name="content" placeholder="Take a note..."/>
      <button onClick={addNote} type="button">ADD</button>
    </form>
  )
}

export default CreateArea;
