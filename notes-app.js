
const notes = getSavedNotes()

const filters = {
    searchText: ''
}



//to convert obj to string to use local storage, use JSON
//use after writing object 
//const userJSON = JSON.stringify(user)
//localStorage.setItem('user', userJSON)
//use to read it 
//const userJSON =localStorage.getItem('user')
//const user = JSON.parse(userJSON)



renderNotes(notes, filters)

document.querySelector('#create').addEventListener('click', function(event){
    const id = uuidv4()
    notes.push({
        id: id,
        title:'',
        body:''
        
    })
    
    saveNotes(notes)
    location.assign(`edit1.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})





// --single --
//p
//#replace
//.item

// --multiple--
//p#order
//button.inventory
//h1#title.application
//h1.application#title

//DOM - Document Object Model - how js communicates with html, use "document"

//finds paragraph tag
//const p = document.querySelector('p')
//removes first paragraph it finds 
//p.remove()

//list of all of the nodes that match 
//const ps = document.querySelectorAll('p')
//removes all 
//ps.forEach(function(p){
    //writes all on the terminal 
    //console.log(p.textContent)

    //changes value for all text content 
  //  p.textContent = '******'
    //p.remove()
//})

//add a new element 
//const newParagraph = document.createElement('p')
//newParagraph.textContent = 'this is a new element'
//adds element in the last part of the body 
//document.querySelector('body').appendChild(newParagraph)

//create
//localStorage.setItem('location', 'Phillidelphia')
//call
//localStorage.getItem('location')
//remove
//localStorage.removeItem('location') or localStorage.clear