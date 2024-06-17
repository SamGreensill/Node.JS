async function displayNotes() {
    const chalk = (await import('chalk')).default;
    const yargs = require('yargs')
    const getNotes = (await import('./notes.js')).default;

  const command = process.argv [2]

console.log(process.argv)

  if (command === 'add') {
    console.log("Adding note")

  } else if (command === 'remove') {
    console.log('Removing note')
  }
}


displayNotes();
