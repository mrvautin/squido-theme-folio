---
title: Post build tasks
permalink: post-build-tasks
description: Getting started with the squido post build tasks
date: '2021-02-26 01:52:00'
author: Mark Moffat
tags: 
  - extending
---

Post build tasks are tasks which run after the website is built. You can configure zipping up your website, automatic deployment etc to make deploying your website faster. See [configuration](/configuration/) for information on configuring a task.

## Zip

The `zip` `postBuild` task simply zips all the files in your `/build` directory into a file called `build.zip` located here: `/build/build.zip`. You can then send/upload this file to your website host, FTP it or back it up.

An example `config.js` configuration is below. There are no options for this task.

``` javascript
production: {
  name: 'squido docs',
  description: 'Squido documentation - A dead simple static website generator',
  ...
  postBuild: [
    {
        name: 'zip',
        options: {}
    }
  ]
  ...
}
```

## Netlify

The `netlify` `postBuild` deploys your website to [Netlify](https://netlify.com) without the use of Git. This task requires the `zip` task to also be configured before this task (see below config) as this task will upload the zip file containing your website direct to [Netlify](https://netlify.com) using their file upload API. 

An example `netlify` task configuration is below. You can see the `zip` task is configured first:

``` javascript
production: {
  name: 'squido docs',
  description: 'Squido documentation - A dead simple static website generator',
  ...
  postBuild: [
    {
        name: 'zip',
        options: {}
    },
    {
      name: 'netlify',
      options: {
        siteName: 'squido test website'
        apiToken: 'my-netlify-api-token'
      }
    }
  ]
  ...
}
```

To use this task you will need to obtain your `apiToken` from `Netlify` by:

1. Logging into `Netlify` here [https://app.netlify.com/user/applications](https://app.netlify.com/user/applications)
2. Under `Personal access tokens`, click `New access token`
3. Set a name of your token which you will remember.
4. Copy the token and add to your `config.js` file under `apiToken`

After you run:
``` plaintext
$ squido build -c
```

The build files of your website will first be added to a zip file, then that file is uploaded to Netlify to be built and served. You can then view your Netlify websites under the `Sites` tab and can control your custom domain and other settings.