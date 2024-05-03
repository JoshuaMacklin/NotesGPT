

function Notes({notes, showAll, setShowAll}){
    const notesToShow = showAll ? notes : notes.filter(notes => notes.important)

    return(
        <>
            <button onClick={() => {setShowAll(!showAll)}}>
                Show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map(note => <li key={note.id}>{`${note.content}`}</li>)}
            </ul>
        </>
    )
}

export default Notes