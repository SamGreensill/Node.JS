Key learnings from this ;
Cd changes file path

1- addNote Function:
Checks for duplicate titles.
Adds a new note if no duplicates are found.
Saves the updated list of notes.

2- RemoveNote Function:
Loads the notes.
Filters out the note with the specified title.
Saves the updated list of notes.
Logs appropriate messages based on whether a note was found and removed.

3- listNotes Function:
Loads the notes.
Logs the titles of all notes.

4- ReadNote Function:
Loads the notes.
Finds and logs the note with the specified title if it exists.

5-saveNotes Function:
Converts notes array to JSON string and writes it to notes.json.

6-loadNotes Function:
Reads the notes from notes.json.
Returns an empty array if the file does not exist or cannot be read.
