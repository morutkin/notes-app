//check for existing saved data 
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON !==null){
        return JSON.parse(notesJSON)
    }else{
        return[]
    }
}

const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//remove note from list 
const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })
    if(noteIndex> -1){
        notes.splice(noteIndex,1)
    }
}
//generate DOM structure for note 

const generateNoteDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    //set up the remove note button 
    button.textContent ='x'
    noteEl.appendChild(button)
    button.addEventListener('click', function(){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })

    //set of note title text 
    //text content overrides the button command 
    if(note.title.length > 0 ){
        textEl.textContent = note.title
    } else{
        textEl.textContent = 'Unnamed note'
    }
    //links to a new page 
    textEl.setAttribute('href', `edit1.html#${note.id}`)
    noteEl.appendChild(textEl)
    return noteEl
}

//render app notes 
const renderNotes = function (notes, filters){
    const filterNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    filterNotes.forEach(function(note){
       const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })

}