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