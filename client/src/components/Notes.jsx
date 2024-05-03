

function Notes({notes, showAll, setShowAll}){

    return(
        <>
            <ul>
                {notes.map(note => <li key={note.id}>{`${note.content}`}</li>)}
            </ul>
        </>
    )
}

export default Notes