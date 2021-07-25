---
title: Configuration
permalink: configuration
description: Getting started with the squido configuration
date: '2021-03-07 01:56:00'
author: Mark Moffat
tags: 
  - customizing
---

An example config can be seen below. You can see that you can specify different values for different environments you run. `development` and `production` are examples but they need to match up with whatever `NODE_ENV` is set. If one is not set, the default is `development`.

``` javascript
const config = {
    development: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    },
    production: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://example.com',
        sourcesExt: 'markdown',
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    }
};

module.exports = config;
```

The configuration options are self explanatory. You can use any of the config in your template files using `{{config.<option>}}`. Eg: For example `{{config.baseUrl}}`.

This is a static website so the `port` is used for spinning up a Web Server for development.

The `templateEngine` config allows for the setting of which template engine to use - either: `hbs` or `ejs` is allowed. The `templateConfig` object allows for the passing of configurations and is used when `ejs` is set for the `templateEngine`. See [here](https://github.com/mde/ejs#options) for available `ejs` options.

The `postBuild` array is similar to the [plugins](/plugins/) which allow you to specify tasks which run after the build is complete. The above configuration runs the `zip` task which is included in `squido` core which will zip up your `build` folder into a zip here: `/build/build.zip`. You may also use this `postBuild` task in conjunction with another task to push your website to your hosting provider in Zip format rather than using Git.