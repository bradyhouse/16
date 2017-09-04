[![Build Status](https://travis-ci.org/bradyhouse/15.svg?branch=master)](https://travis-ci.org/bradyhouse/16) 
[![Stories in Progress](https://badge.waffle.io/bradyhouse/16.svg?label=in%20progress&title=Stories%20In%20Progress)](http://waffle.io/bradyhouse/16)

Puzzle 16
======

![Icon](http://i.imgur.com/COJkHV6.png)

Puzzle 16 is a game inspired by [Eni Puzzle](http://www.enipuzzles.com/). The android and iOS versions of the
app are currently under construction.

# Table of Contents

- [Prerequisites](#prerequisites)
- [How to start](#how-to-start)
- [Running tests](#running-tests)
- [Web configuration options](#web-configuration-options)
- [Code organization overview](#code-organization-overview)
- [How-tos](#how-tos)
- [General best practice guide to sharing code](#general-best-practice-guide-to-sharing-code)
- [Integration guides](https://github.com/NathanWalker/angular-seed-advanced/wiki)
- [How best to use for your project](#how-best-to-use-for-your-project)
- [Dockerization](#dockerization)
  + [How to build and start the dockerized version of the application](#how-to-build-and-start-the-dockerized-version-of-the-application)
  + [Development build and deployment](#development-build-and-deployment)
  + [Production build and deployment](#production-build-and-deployment)
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