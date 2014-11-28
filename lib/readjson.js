(function() {
    'use strict';
    
    var fs = require('fs');
    
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
    
    function tryCatch(fn) {
        var error;
        
        try {
            fn();
        } catch(err) {
            error = err;
        }
        
        return error;
    }
})();
