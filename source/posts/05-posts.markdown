---
title: Posts
permalink: posts
description: Getting started with the squido post structure
date: '2021-03-06 01:55:00'
author: Mark Moffat
tags: 
  - customizing
---

Posts are essentially pages or blog posts or whatever you like. The content of the post/page is contained in markdown files within the `/source/posts` folder. The post markdown or contents is rendered using the `post.hbs` template file. You can edit this any which way your want. See [templates](/templates/) for more information.

Posts have a meta data component at the top of the file which directs how the file is built. The meta data is `yaml` formatted and sits between two `---` tags. Eg:

``` yaml
---
title: Caede virides oculos armentis
permalink: caede-virides-oculos-armentis
description: Caede virides oculos armentis
date: '2021-03-11 19:17:00'
template: post.hbs
ignore: true
hidden: false
tags: 
  - alter
  - tradere
---
```

You can add any data values your like but the example layouts uses the `title` and `description` for SEO for page title. 

New meta data values can be access in the layouts using `{{meta.<new value>}}`.

The permalink is required. Its used to build the URL for your website: Eg. The above will output a post at: `https://example.com/caede-virides-oculos-armentis`

The `visible` and `hidden` are optional tags for controlling the visibility of posts. `Defaults is "true"` or visible.

- `visible`: If set to `false`, the post will not be in the pagination and won't show on the index page.
- `hidden`: If set to `true`, the post will not be in the sitemap and RSS feeds.

### Template file

The default template file name for posts is `post.hbs` but this can be overwritten per post by adding a `template` meta value to your post. Eg:

``` yaml
---
template: template-name.hbs
---
```