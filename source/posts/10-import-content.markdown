---
title: Import content
permalink: import-content
description: Getting started with the importing content
date: '2021-03-01 01:53:00'
author: Mark Moffat
tags: 
  - other
---

`squido` allows the importing of content from [Ghost](https://ghost.org/) and [Wordpress](https://wordpress.org/).

We will use the [import](/usage-commands/#import-command) command. 

## Ghost

To import data, you first need to export your data from your Ghost site:

1. Login to the Ghost admin panel
2. Select the `cog` icon at the bottom of the sidebar
3. Select `Labs`
4. Click `Export your content`

To import that data into `squido` you need to run this command from the root of your `squido` website:

``` plaintext
$ squido import -f /path/to/file/ghost.json -t ghost
```

You will see a new folder with all your posts in Markdown format here: `/imported`.

You can check your files are imported correctly then move your newly imported Markdown files here: `/<source dir>/posts`.

## Wordpress

To import data, you first need to export your data from your Wordpress site:

1. Login to Wordpress admin panel
2. Select `Tools`
3. Select `Export`
4. Click `Export all`

To import that data into `squido` you need to run this command from the root of your `squido` website:

``` plaintext
$ squido import -f /path/to/file/wordpress.xml -t wordpress
```

You will see a new folder with all your posts in Markdown format here: `/imported`.

You can check your files are imported correctly then move your newly imported Markdown files here: `/<source dir>/posts`.