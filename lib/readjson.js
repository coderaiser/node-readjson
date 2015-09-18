(function() {
    'use strict';
    
    var fs          = require('fs'),
        tryCatch    = require('try-catch');
    
    module.exports = function(name, callback) {
        fs.readFile(name, 'utf8', function(error, data) {
            var json;
            
            if (!error)
                error = tryCatch(function() {
                    json = JSON.parse(data);
                });
            
            callback(error, json);
        });
    };
    
    module.exports.sync = sync;
    
    function sync(name) {
        var data = fs.readFileSync(name, 'utf8'),
            json = JSON.parse(data);
            
        return json;
    }
    
    module.exports.sync.try = function(name) {
        var data;
        
        tryCatch(function() {
            data = sync(name);
        });
        
        return data;
    };
})();
