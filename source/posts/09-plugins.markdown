---
title: Plugins
permalink: plugins
description: Getting started with the squido plugins
date: '2021-03-02 01:53:00'
author: Mark Moffat
tags: 
  - extending
---

Plugins can be created for if core functionality is not included or customisation is required. Plugins run at the final step of the build so you can override any of the existing steps if needed.

Plugins are Javascript files within `/<source dir>/plugins/<plugin name>.js`. 

The plugin file needs to export a function named `run`. For example:

``` javascript
const run = (opts) => {
  /* code in here */
  console.log('opts', opts);
};

module.exports = {
  run
};
```

### Configuration

Adding plugins to your `/config.js` file is simple by adding the plugin to the plugins array:

``` javascript
const config = {
  development: {
    ...
    plugins: [
      {
        name: 'search',
        options: {}
      }
    ]
  }
}
```

`name`: the name of the plugin. This also needs to match the name of the file. Eg: `/source/plugins/search.js`

`options`: An arg object passed into the plugin. 