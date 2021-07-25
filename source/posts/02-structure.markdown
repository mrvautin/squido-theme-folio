---
title: Structure
permalink: structure
description: Getting started with the squido structure
date: '2021-03-09 01:58:00'
author: Mark Moffat
tags: 
  - setup
---

You can start by grabbing everything in the `/source` directory of [here](https://github.com/mrvautin/squido/tree/main/source).


The structure will look something like:

![Folder structure](/content/images/structure.png)

The `/<source_dir>` directory is the default directory for all the source files. You can change by adding another directory in the `sourceDir` of the `config.js` file.

File name                      | Usage                        
------------------------------ | ----------
`index.hbs`                    | The root of your website. The first page which will be rendered.
`post.hbs`                     | Will render the contents of the `.markdown` files in `/<source_dir>/posts`
`page.hbs`                     | Displayed at `/page/x` for the pagination of posts
`tag.hbs`                      | Displayed at `/tag/x` for the collection of posts by tag

{.table .table-bordered}

Your posts go in the `/<source_dir>/posts` directory. You will have `.markdown` files for each post/page you want.

The `content` directory contains the files used for your website. Eg: Stylesheets, images, javascript files etc.