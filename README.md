[![Build Status](https://travis-ci.org/bradyhouse/15.svg?branch=master)](https://travis-ci.org/bradyhouse/16) 
[![Stories in Progress](https://badge.waffle.io/bradyhouse/16.svg?label=in%20progress&title=Stories%20In%20Progress)](http://waffle.io/bradyhouse/16)
[![dependencies Status](https://david-dm.org/bradyhouse/16/status.svg)](https://david-dm.org/bradyhouse/15)
[![devDependencies Status](https://david-dm.org/bradyhouse/16/dev-status.svg)](https://david-dm.org/bradyhouse/15?type=dev)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Puzzle 16
======

![Icon](http://i.imgur.com/COJkHV6.png)

Puzzle 16 is a game inspired by [Eni Puzzle](http://www.enipuzzles.com/). The android and iOS versions of the
app are currently under construction.

# Table of Contents

- [Prerequisites](#prerequisites)
- [How to start](#how-to-start)
- [Running tests](#running-tests)
- [License](#license)

### Prerequisites

**Note** you should have **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

* To run the NativeScript app:

```
npm install -g nativescript
npm install -g typescript
```

## How to start

```bash
# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# generate api documentation
$ npm run compodoc
$ npm run serve.compodoc

# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build
$ npm run build.prod
```

## Running tests

```bash
$ npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
$ ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
$ npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)



## License

MIT
