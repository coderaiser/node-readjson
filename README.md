# Readjson

Read file and parse it as json.

## Install

```
npm i readjson --save
```
## How to use?

```js
var readjson = require('readjson');

readjson('./package.json', function(error, json) {
    if (error)
        console.error(error.message);
    else
        console.log([
            json.name, json.version
        ].join(' '));
});
```

## License

MIT
