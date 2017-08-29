const _ = require('lodash'); 
const yargs = require('yargs'); 

//------------- Get terminal arguments
const argv = yargs.command('whatIsMyIP', 'Display IP Address', {}).help().argv;

var command = argv._[0] 
   
if (command == 'whatIsMyIP') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created.');
        notes.logNote(note);

    } else {
        console.log('Note title taken.');
    }
} else {
    console.log("Command Not recognize");
}
