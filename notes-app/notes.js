const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log('Note removed!');
    } else {
        console.log('No note found!');
    }
}

const listNotes = function () {
    const notes = loadNotes();
    console.log('Your notes:');
    notes.forEach(function (note) {
        console.log(note.title);
    });
}

const readNote = function (title) {
    const notes = loadNotes();
    const note = notes.find(function (note) {
        return note.title === title;
    });

    if (note) {
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body);
    } else {
        console.log('Note not found!');
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
