// import form from '../form.css' 


function Form({placeholder, newNote, setNewNote}){
    const handleNoteChange = (event) => setNewNote(event.target.value)

    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
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