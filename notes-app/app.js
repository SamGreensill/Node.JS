// Name is depriciated so make it as function 
// NOTE Switching betweem termial directorys is 'Cd then where you want to be.
(function () {
    const validator = require('validator');
    const getNotes = require('./notes.js'); // Corrected path

    const msg = getNotes();
    console.log(msg);

    console.log(validator.isEmail('Samgreensill@aol.co.uk'));
})();
