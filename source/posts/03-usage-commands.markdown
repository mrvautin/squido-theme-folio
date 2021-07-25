---
title: Usage / Commands
permalink: usage-commands
description: Getting started with the squido commands
date: '2021-03-08 01:57:00'
author: Mark Moffat
tags: 
  - setup
---

The CLI comes with a few commands. 

``` bash
Usage: cli [options] [command]

Options:
  -V, --version    output the version number
  -h, --help       output usage information

Commands:
  build [options]  Builds your website
  clean            Clean your website build
  serve [options]  Serves website
```

#### Build command

The `build` command has the following options:

``` bash
Usage: build [options]

Builds your website

Options:
  -c --clean  Cleans build directory
  -h, --help  output usage information
```

#### Import command

The `import` command allows you to import content from external sources. It has the following options:

``` bash
Usage: import [options]

Import from external sources

Options:
  -f, --file <path>  Specify file to import
  -t, --type <type>  Specify the type of file to import. Eg: wordpress or ghost
  -h, --help         output usage information
```

#### Clean command

The `clean` command has the following options:

``` bash
Usage: clean [options]

Clean your website build

Options:
  -h, --help  output usage information
```

#### Serve command

The `serve` command has the following options:

``` bash
Usage: serve [options]

Serves website

Options:
  -w --watch  Watches for changes
  -b --build  Builds on start
  -c --clean  Cleans build directory
  -h, --help  output usage information
```

#### New command

This command sets up a new website from our blog template. 

<div class="bd-callout bd-callout-squido">
Warning: This will overwrite any existing content you've created
</div>

The `new` command has the following options:

``` bash
Usage: new [options]

Sets up a new website

Options:
  -h, --help  output usage information
```