async function displayNotes() {
    const chalk = (await import('chalk')).default;
    const yargs = require('yargs')
    const getNotes = (await import('./notes.js')).default;


//Customize yargs version 
yargs.version('1.1.0')

//addition, reading, read, list

//Creation of add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

//Creation of remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

//Creation of list command 

yargs.command({
    command: 'list',
    describe: 'List some data',
    handler: function() {
        console.log('Listing information')
    }
})

//Creation of read command 

yargs.command({
    command: 'read',
    describe: 'Reading of data',
    handler: function() {
        console.log('Reading information')
    }
})

console.log(yargs.argv)

}
displayNotes();
