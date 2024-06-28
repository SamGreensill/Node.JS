const fs = require('fs')

const getNotes = function () {
    return 'Your notes...';
}

const addNote = function (title, body) {
    const notes = loadNotes ()
    const duplicateNotes  = notes.filter(function (note) { 
        return note.title === title
    }) //This is to ensure there are no duplications of the titles

if (duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body,
    })
    
      saveNotes(notes)
      console.log('New note added!')
} else {
    console.log('Note title taken!')
}
}

const saveNotes = function (notes) { //This is saving the written notes to the file system 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON ) 
}

const loadNotes = function () { //Block below is defensive code, If the 'TRY' code doesnt work. it will run the catch code instead
    try {
        const dataBuffer = fs.readFileSync('notes.json') //Where you will be reading information from
        const dataJSON = dataBuffer.toString() //converts into a readable string
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
