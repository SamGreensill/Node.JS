async function displayNotes() {
    const chalk = (await import('chalk')).default;
    const yargs = require('yargs');
    const notes = (await import('./notes.js')).default;

    // Customize yargs version 
    yargs.version('1.1.0');

    // Creation of add command
    yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true, // This ensures the title is required
                type: 'string' // This ensures the title is a string
            },

            body: {
                describe: 'Body of your note',
                demandOption: true, 
                type: 'string' 
            }
        },
        handler: function(argv) {
         notes.addNote(argv.title, argv.body)
        }
    });

    // Creation of remove command
    yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        handler: function() {
            console.log('Removing the note!');
        }
    });

    // Creation of list command 
    yargs.command({
        command: 'list',
        describe: 'List some data',
        handler: function() {
            console.log('Listing information');
        }
    });

    // Creation of read command 
    yargs.command({
        command: 'read',
        describe: 'Reading of data',
        handler: function() {
            console.log('Reading information');
        }
    });

    yargs.parse();
}

displayNotes();
