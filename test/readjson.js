'use strict';

let os          = require('os');
let path        = require('path');
let fs          = require('fs');
let test        = require('tape');
let readjson   = require('..');

let name = path.join(__dirname, '..', 'package.json');

test('readjson: should read json data from file', t => {
    readjson(name, (error, json)  => {
        t.notOk(error, 'no read error');
        t.equal(typeof json, 'object', 'json should be object');
        t.end();
    });
});

test('readjson: no args', t => {
    t.throws(readjson, /name should be string!/, 'name check');
    t.end();
});

test('readjson: no callback', t => {
    let fn = () => readjson('hello', [1,2,3]);
    
    t.throws(fn, /callback should be function!/, 'callback check');
    t.end();
}

test('readjson.sync: no args', t => {
    t.throws(readjson.sync, /name should be string!/, 'name check');
    t.end();
});

test('readjson.sync.try: no args', t => {
    t.throws(readjson.sync.try, /name should be string!/, 'name check');
    t.end();
});

