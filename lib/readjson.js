(function() {
    'use strict';
    
    var fs          = require('fs'),
        tryCatch    = require('try-catch');
    
    module.exports = function(name, callback) {
        fs.readFile(name, 'utf8', function(error, data) {
            var json;
            
            if (!error)
                tryCatch(function() {
                    json = JSON.parse(data);
                });
            
            callback(error, json);
        });
    };
})();
