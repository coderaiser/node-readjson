'use strict';

const path = require('path');
const test = require('tape');
const readjson = require('..');

const NAME = path.join(__dirname, '..', 'package.json');

test('readjson: should read json data from file', (t) => {
    readjson(NAME, (error, json)  => {
        t.notOk(error, 'no read error');
        t.equal(typeof json, 'object', 'json should be object');
        t.end();
    });
});

test('readjson: should read json data from file', (t) => {
    readjson('hello', (error, json)  => {
        t.equal(error.code, 'ENOENT', 'should equal');
        t.end();
    });
});

test('readjson.sync.try: should read json data from file', (t) => {
    const json = readjson.sync.try(NAME);
    
    t.equal(typeof json, 'object', 'json should be object');
    t.end();
});

test('readjson: no args', (t) => {
    t.throws(readjson, /name should be string!/, 'NAME check');
    t.end();
});

test('readjson: no callback', (t) => {
    let fn = () => readjson('hello', [1,2,3]);
    
    t.throws(fn, /callback should be function!/, 'callback check');
    t.end();
});

test('readjson.sync: no args', (t) => {
    t.throws(readjson.sync, /name should be string!/, 'NAME check');
    t.end();
});

test('readjson.sync.try: no args', (t) => {
    t.throws(readjson.sync.try, /name should be string!/, 'NAME check');
    t.end();
});

