async function displayNotes() {
    const chalk = (await import('chalk')).default;
    const yargs = require('yargs');
    const notes = require('./notes.js');

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
        handler(argv) {
            notes.addNote(argv.title, argv.body);
        }
    });

    // Creation of remove command
    yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true, // This ensures the title is required
                type: 'string' // This ensures the title is a string
            }
        },
        handler(argv) {
            notes.removeNote(argv.title);
        }
    });

    // Creation of list command 
    yargs.command({
        command: 'list',
        describe: 'List all notes',
        handler() {
            notes.listNotes();
        }
    });

    // Creation of read command 
    yargs.command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true, // This ensures the title is required
                type: 'string' // This ensures the title is a string
            }
        },
        handler(argv) {
            notes.readNote(argv.title);
        }
    });

    yargs.parse();
}

displayNotes();
