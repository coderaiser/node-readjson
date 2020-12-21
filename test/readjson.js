'use strict';

const tryCatch = require('try-catch');

const path = require('path');
const test = require('supertape');
const tryToCatch = require('try-to-catch');
const readjson = require('..');

const NAME = path.join(__dirname, '..', 'package.json');

test('readjson: should read json data from file', async (t) => {
    const json = await readjson(NAME);
    
    t.equal(typeof json, 'object', 'json should be object');
    t.end();
});

test('readjson: should read json data from file', async (t) => {
    const [error] = await tryToCatch(readjson, 'hello');
    
    t.equal(error.code, 'ENOENT', 'should equal');
    t.end();
});

test('readjson.sync.try: should read json data from file', (t) => {
    const json = readjson.sync.try(NAME);
    
    t.equal(typeof json, 'object', 'json should be object');
    t.end();
});

test('readjson: URL', async (t) => {
    const url = new URL('file:///package.json');
    const [error] = await tryToCatch(readjson, url);
    
    t.equal(error.message, `ENOENT: no such file or directory, open '/package.json'`);
    t.end();
});

test('readjson: no args', async (t) => {
    const [error] = await tryToCatch(readjson);
    
    t.equal(error.message, 'name should be string or instance of URL!');
    t.end();
});

test('readjson.sync: no args', (t) => {
    const [error] = tryCatch(readjson.sync);
    t.equal(error.message, 'name should be string or instance of URL!', 'NAME check');
    t.end();
});

test('readjson.sync.try: no args', (t) => {
    const [error] = tryCatch(readjson.sync.try);
    t.equal(error.message, 'name should be string or instance of URL!', 'NAME check');
    t.end();
});

