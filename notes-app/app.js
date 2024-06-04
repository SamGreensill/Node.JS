async function displayNotes() {
    const chalk = (await import('chalk')).default;
    const getNotes = (await import('./notes.js')).default;

    const msg = getNotes();
    console.log(msg);

    const greenMsg = chalk.red.bold('Error!');
    console.log(greenMsg);
}

displayNotes();
