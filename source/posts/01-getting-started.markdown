---
title: Getting started
permalink: getting-started
description: Getting started with squido
date: '2021-03-10 01:59:00'
author: Mark Moffat
tags: 
  - setup
---

<img src="https://raw.githubusercontent.com/mrvautin/squido/main/docs/images/squido.svg" width="200" height="200" alt="squido logo">

## What is squido?

`squido` is a dead simple static website builder which can be hosted anywhere for super fast websites and very little effort.

The idea is to be a `no-code` setup and have everything you need to run and host a website. You simply do the writing and customization of style and layout. 

## Installation

Simply install the `squido` cli module globally in order to build and manage your static site.

From Github (preferred for latest version)
``` plaintext
$ npm i -g https://github.com/mrvautin/squido.git
```

From npm
``` plaintext
$ npm install -g squido
```

With Yarn
``` plaintext
$ yarn global add squido
```

### Start from default blog setup

<div class="bd-callout bd-callout-squido">
Warning: This will overwrite any existing content you've created
</div>

Make your `squido` website directory:
``` plaintext
$ mkdir my-squido-website
```

Enter your new `squido` website directory:
``` plaintext
$ cd my-squido-website
```

Setup a new `squido` website from defaults
``` plaintext
$ squido new
```

### Start from scratch

Make your `squido` website directory:
``` plaintext
$ mkdir my-squido-website
```

Enter your new `squido` website directory:
``` plaintext
$ cd my-squido-website
```

Get started building your `squido` website [structure](https://docs.squido.org/structure/).

### Start from template

The example we will use below is our [blog](https://github.com/mrvautin/squido-blog-example) example. There is also a [documentation](https://github.com/mrvautin/squido-docs) website example you can use. 

``` plaintext
$ git clone https://github.com/mrvautin/squido-blog-example my-squido-website
```

Replace `my-squido-website` with your new website directory name
{.fst-italic}

Enter your new `squido` website directory:
``` plaintext
$ cd my-squido-website
```

Run the following command to build, clean, serve and watch for changes:
``` plaintext
$ squido serve -b -w -c
```

You can then visit your website here:
``` plaintext
http://localhost:4965
```

> `Clean` = removes everything in your `/build` directory.

> `Serve` = starts a web server so you can view your website.

### Without Git

Whilst it's best and easiest (depending on the user) to use `squido` with Git to manage deployment and source control. If you don't want to use Git you can use our [Post Build](/post-build-tasks/) tasks to easily deploy and manage your website. 

### Create Git repository

1. Create repository:

![Create repository](/content/images/github/create-repository-create.png)

2. Set the repository name:

![Set repository name](/content/images/github/create-repository-name.png)

3. Set public/private:

![Set repository name](/content/images/github/create-repository-public-private.png)

4. Finish creating the repository:

![Set repository name](/content/images/github/create-repository-button.png)

5. Add your new repository to your git remotes:

``` bash
$ git remote add origin https://github.com/user/repo.git
```

6. Check remote is correctly added:

``` bash
$ git remote -v
# Verify new remote
> origin  https://github.com/user/repo.git (fetch)
> origin  https://github.com/user/repo.git (push)
```

7. Create your first post: `/source/posts/hello-world.markdown`

``` yaml
---
title: Hello World
permalink: hello-world
description: Hello World
date: '2021-03-10 01:59:00'
---
```

8. Add your new files to first commit:

``` bash
$ git add .
```

9. Commit your files/changes:

``` bash
$ git commit -m "First commit"
```

10. Push your changes to your repository:

``` bash
$ git push
```

Setup the [deploy/hosting](https://docs.squido.org/deployment-and-hosting/).

## Demos

Blog style: [https://blog.squido.org](https://blog.squido.org)

Documentation style: This website

Traditional website: [https://squido.org](https://squido.org)