const express = require('express');
const bodyParser = require('body-parser');
const notes = require('./path-to-your-notes-file'); // Adjust the path to where your notes.js file is located

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // To serve static files like HTML, CSS, JS

app.get('/notes', (req, res) => {
    res.send(notes.loadNotes());
});

app.post('/notes', (req, res) => {
    const { title, body } = req.body;
    notes.addNote(title, body);
    res.send({ message: 'Note added' });
});

app.delete('/notes/:title', (req, res) => {
    const title = req.params.title;
    notes.removeNote(title);
    res.send({ message: 'Note removed' });
});

app.get('/notes/:title', (req, res) => {
    const title = req.params.title;
    const note = notes.loadNotes().find(note => note.title === title);
    if (note) {
        res.send(note);
    } else {
        res.status(404).send({ message: 'Note not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
