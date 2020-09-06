var fs = require('fs-extra');

var source = './docs/img/img/';
var dest = './docs/img';

fs.copy(source, dest, function (err) {

    if (err)
    {
        return console.error(err);
    }

    console.log('Copied to ' + dest);
    fs.remove(source);
    console.log('Removed sources ' + source);
});


