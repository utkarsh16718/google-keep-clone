import './App.css';
import Navbar from './components/Navbar';
import Count from './components/Count';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import { useState } from 'react';


function App(props) {
  const [notes, setnotes] = useState([])

  function addNotes(newNotes) {
    setnotes((preval) => {
      return [...preval, newNotes]

    });

  }
  const deleteNotes = (id) => {
    setnotes(preval => {
      return [...preval.filter((note, index) => index !== id)]
    })

  }

  return (
    <div className="App">
      <Navbar />
      <Count count={notes.length === 0 ? "Empty" : `Showing ${notes.length} notes`} />
      <CreateArea onAdd={addNotes} />{
        notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNotes}
            />

          )
        }


        )
      }

    </div>
  );
}

export default App;
