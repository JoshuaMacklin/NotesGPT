// import form from '../form.css' 

function Form({placeholder, newNote, setNewNote, notes, setNotes}){
    const handleNoteChange = (event) => setNewNote(event.target.value)

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            id: notes.length + 1
        }

        if (newNote.trim() != "") {
            setNotes(notes.concat(noteObject))
            setNewNote('')
        }
        
      }

    return(
        <form onSubmit={addNote}>
            <input 
                placeholder={placeholder} 
                value={newNote}
                onChange={handleNoteChange}
            />
            <button type="submit">
                Save
            </button>
        </form>
    )
}

export default Form