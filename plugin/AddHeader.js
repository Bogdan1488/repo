var fs = require('fs');
var path = require('path');


function AddHeadersGreaseMonkey(options) {
    // Setup the plugin instance with options...
}

AddHeadersGreaseMonkey.prototype.apply = function(compiler) {
    compiler.plugin('done', function(compilation) {
        var headers = fs.readFileSync(path.join(__dirname, '/headers.txt'), 'utf-8');
        var script = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf-8');
        var newline = '\r\n\r\n';
        fs.writeFileSync(path.join(__dirname, '../jfl.user.js'), headers + newline + script, 'utf-8');
    });
};

module.exports = AddHeadersGreaseMonkey;