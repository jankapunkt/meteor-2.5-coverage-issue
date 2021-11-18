# reproduction

```bash
$ cd coverage-report
$ meteor npm install
$ ./test.sh -c -o
```

The test script basically wraps the full coverage command:

```bash
TEST_BROWSER_DRIVER=${T_BROWSER} \
TEST_SERVER=${T_SERVER} \
TEST_CLIENT=${T_CLIENT} \
MOCHA_GREP=${T_FILTER} \
BABEL_ENV=COVERAGE \
COVERAGE=${T_COVERAGE} \
COVERAGE_OUT_HTML=1 \
COVERAGE_APP_FOLDER=$PWD/ \
COVERAGE_VERBOSE_MODE=${T_VERBOSE} \
meteor test \
    ${T_RUN_ONCE} \
    --driver-package=meteortesting:mocha \
    --settings=settings.json \
    --port=${PORT}
```

Expected errors:

```bash
W20211118-11:56:44.280(1)? (STDERR) Error: Failed to save html report
W20211118-11:56:44.281(1)? (STDERR)     at packages/meteortesting:mocha/server.handleCoverage.js:37:18
W20211118-11:56:44.281(1)? (STDERR)     at runWithEnvironment (packages/meteor.js:1320:24)
W20211118-11:56:44.281(1)? (STDERR)     at packages/meteor.js:1333:14
W20211118-11:56:44.281(1)? (STDERR)     at packages/http/httpcall_server.js:103:9
W20211118-11:56:44.281(1)? (STDERR)     at packages/http/httpcall_server.js:159:9
W20211118-11:56:44.282(1)? (STDERR)     at /path/to/.meteor/packages/promise/.0.12.0.1vx0qpc.muny++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/meteor-promise/fiber_pool.js:43:40
```