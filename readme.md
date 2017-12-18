```javascript
    {
        "plugins": [
            "babel-plugin-transform-async-to-generator",
            "babel-plugin-transform-es2015-modules-commonjs"
        ]
    }


    equivalent

    {
        "presets": [ "env" ],
        "plugins": [
            "transform-runtime",
            "transform-async-to-generator"
        ]
    }

```


## selenium-server@3.8.1 doesn't work with phantomjs
    "selenium-server": "<=3.7.1"

    the latest `selenium-server` which is `3.8.1` doesn't work with `phantomjs`;
    so we have to limit it to `<=3.7.1`

## nightwatch has a horrible error message
```javascript
Error: Cannot read source folder: /media/bochen2014/Work/__work/material-ui/examples/tests
    at /media/bochen2014/Work/__work/material-ui/node_modules/nightwatch/lib/runner/run.js:203:21
    at /media/bochen2014/Work/__work/material-ui/node_modules/nightwatch/lib/runner/walk.js:97:18
    at FSReqWrap.oncomplete (fs.js:152:21)
```

above message means `nightwatch` can't find `conf.js` or `conf.json`; therefore it defaults to `examples/tests` and the folder doesn't exists

