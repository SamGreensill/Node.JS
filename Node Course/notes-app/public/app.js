document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('note-form');
    const notesContainer = document.getElementById('notes');

    // Fetch and display notes
    function fetchNotes() {
        fetch('/notes')
            .then(response => response.json())
            .then(notes => {
                notesContainer.innerHTML = '';
                notes.forEach(note => {
                    const noteDiv = document.createElement('div');
                    noteDiv.classList.add('note');

                    const noteTitle = document.createElement('div');
                    noteTitle.classList.add('note-title');
                    noteTitle.textContent = note.title;

                    const noteBody = document.createElement('div');
                    noteBody.textContent = note.body;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.onclick = function() {
                        deleteNote(note.title);
                    };

                    noteDiv.appendChild(noteTitle);
                    noteDiv.appendChild(noteBody);
                    noteDiv.appendChild(deleteButton);

                    notesContainer.appendChild(noteDiv);
                });
            });
    }

    // Add note
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        fetch('/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body })
        }).then(() => {
            fetchNotes();
            form.reset();
        });
    });

    // Delete note
    function deleteNote(title) {
        fetch(`/notes/${title}`, {
            method: 'DELETE'
        }).then(() => {
            fetchNotes();
        });
    }

    // Initial fetch
    fetchNotes();
});
