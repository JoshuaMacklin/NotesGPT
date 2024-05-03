import { useState } from "react"
import Header from "./components/Header"
import Notes from "./components/Notes"
import Form from "./components/Form"

function App({notes}){
  const [note, addNote] = useState(notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  
  return(
    <>
      <Header text="NotesGPT"/>
      <Notes notes={note} showAll={showAll} setShowAll={setShowAll}/>
      <Form placeholder="Enter Notes" newNote={newNote} setNewNote={setNewNote} addNote={addNote}/>
    </>
  )
}

export default App