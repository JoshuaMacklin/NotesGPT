import { useState } from "react"
import Header from "./components/Header"
import Notes from "./components/Notes"
import Form from "./components/Form"

function App(props){
  const [note, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  
  return(
    <>
      <Header text="NotesGPT"/>
      <Notes notes={note} showAll={showAll} setShowAll={setShowAll}/>
      <Form placeholder="Enter Notes" notes={note} setNotes={setNotes} newNote={newNote} setNewNote={setNewNote}/>
    </>
  )
}

export default App