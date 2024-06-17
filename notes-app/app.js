async function displayNotes() {
    const chalk = (await import('chalk')).default;
    const getNotes = (await import('./notes.js')).default;

    const msg = getNotes();
    console.log(msg);

    const greenMsg = chalk.blue.bold('Success');
    console.log(greenMsg);

    console.log(process.argv)
}



displayNotes();
