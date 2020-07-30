import React from 'react';
import Header from './Header';
import CreateArea from './CreateArea';
import Footer from './Footer';
import Note from './Note';

const App = () => {
  const [notesArray, setNotesArray] = React.useState([])

  const addNote = (values) => {
    values.id = new Date();
    const newNote = {...values};
    setNotesArray((prev) => {
      return [...prev, newNote];
    })
  }

  const deleteNote = (id) => {
    setNotesArray((prev) => {
      const newArray = prev.filter((note) => note.id !== id);
      return newArray;
    })
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notesArray.map((note) => {
        return (
          <Note 
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
};

export default App;
