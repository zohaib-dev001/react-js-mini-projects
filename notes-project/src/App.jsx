import React from 'react'
import Form from './components/form';
import Notes from './components/notes';
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setnotes] = useState([]);

  const Formsubmit = (e) => {
    e.preventDefault();
    const newNotes = {
      title, description
    }
    setnotes([...notes, newNotes]);

    setTitle("");
    setDescription("");

  }
  const Deletenotes = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1)
    setnotes(newNotes);
  }

  return (
    <div className='  bg-black text-white min-h-screen '>
      <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription} Formsubmit={Formsubmit}
      />


      <div className='p-10 border-t  '>
        <h1 className='text-3xl font-medium mb-10'>My Notes</h1>
        <div className='flex  w-1/2 gap-15 flex-wrap justify-center  mx-auto  '>

          {notes.map((note, index) => {
            return (
              <Notes key={index} note={note} index={index} Deletenotes={Deletenotes}
              />
            )
          })}



        </div>
      </div>
    </div>
  )
}

export default App