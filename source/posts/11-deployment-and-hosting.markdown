---
title: Deployment and hosting
permalink: deployment-and-hosting
description: Getting started with deploying and hosting your squido website. Deployment guides using Netlify, Github Pages, AWS Amplify, Cloudflare Pages, Digitalocean app and more
date: '2021-02-28 01:52:00'
author: Mark Moffat
tags: 
  - hosting
---

## Netlify

You can host this website anywhere static websites are supported. Some options are [https://www.netlify.com](https://www.netlify.com) as the deployments are just dead simple.

Simply connect your Git repo and set the `Build settings` settings like below:

![Netlify build](/content/images/netlify-build.png)

And set the Environment variable to align with your `config.js` file:

![Netlify environment](/content/images/netlify-environment.png)

You are done. Now each push to your Git repo will trigger the build and deploy on [Netlify](https://www.netlify.com).

## Github pages

Publishing to Github pages is easy. Simply set your config `buildDir` to `docs` and the correct `baseUrl`. Eg:

``` javascript
production: {
    name: 'squido',
    description: 'This is the blog description',
    twitterHandle: '@mrvautin',
    baseUrl: 'https://<github-username>.github.io',
    sourcesExt: 'markdown',
    sourceDir: 'source',
    buildDir: 'docs',
    summaryLength: 250,
    port: 4965,
    pagination: true,
    postPerPage: 8
}
```

Then simply build your website with `squido build -c` and push to your Github repo.

You then need to set `Source` to `/docs` as shown [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and may need to change the branch.

You can then either access at your Repo URL (`https://<github-username>.github.io`) or a [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#about-custom-domain-configuration)

## Amazon AWS Amplify

It's very easy to publish your `squido` website to [AWS Amplify](https://aws.amazon.com/amplify/). 

1. Login [here](https://console.aws.amazon.com/amplify/home)
2. Select `New App`
3. Select `Host web app`
4. Select the Git repository and authenticate. Eg: Github
5. Select the Repository name and branch from the populated list(s)
6. Click `Edit` on the build commands and ensure `baseDirectory` is set to `/build`. Eg Yaml file will look like:
``` yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: /build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
7. Click `Save and deploy` and wait for your website to be built!

## Cloudflare Pages

It's very easy to publish your `squido` website for `FREE` using [Cloudflare pages](https://pages.cloudflare.com/). Free SSL, custom domain, global CDN and more and just super simple to setup.

1. Login [here](https://pages.cloudflare.com/)
2. Select `Create new project`
3. Link your Github account and select your repository, then `Begin setup`
4. Setup like:

![Cloudflare setup](/content/images/cloudflare-pages.png)

5. Click `Save and deploy`
6. Wait for the build to complete
7. You can then setup `Custom domains` and you are done

## Digitalocean Apps

[Digitalocean Apps](https://cloud.digitalocean.com/apps?refcode=cd185d01653f) makes hosting your static HTML `squido` website for `FREE` just so bloody easy. [Digitalocean Apps](https://cloud.digitalocean.com/apps?refcode=cd185d01653f) offers free SSL, custom domain, global CDN and more.

1. Login [here](https://cloud.digitalocean.com/apps?refcode=cd185d01653f)
2. Select `Github` as source and choose your `squido` Repository:

![Digitalocean source](/content/images/digitalocean-source.png)

3. Hit `Next`
4. Setup like:

![Digitalocean setup](/content/images/digitalocean-config.png)

5. Hit `Next`.
5. Name your app then hit `Next` once more
6. Select the plan. Choose `Starter` for `FREE` hosting
7. Hit `Launch Starter App`
8. Wait for your app to build. Watch the logs by clicking the `View logs` button
9. Once your build is complete you can select `Settings` and configure your domain and more

You are done. Enjoy your super fast hosting on the awesome Digitalocean platform!

## Azure Static Web Apps

Publishing your `squido` website to [Azure Static Web Apps](https://azure.microsoft.com/en-au/services/app-service/static/) is very easy and low cost. 

1. Visit [portal.azure.com](portal.azure.com), login and create a free Static Web App. 
2. To use Azure DevOps instead of a Github repo, select `Other` under `Deployment details`.
3. Once the resource is provisioned, from the Static Web App Overview page, click `Manage Deployment Token`. Copy this token somewhere safe. It will be used later.

![image](/content/images/azure-setup.png)

4. Visit [devops.azure.com](devops.azure.com), login and create a New Project
5. Click `Repos` and clone the Azure repo to your local machine. Either move your existing `squido` site into this local repo, or create a new `squido` site. Commit and push code to this Azure DevOps repo
6. Click `Pipelines` and create a new Pipeline for the project. Select `Starter Pipeline` and paste in the yaml template below

``` yaml
trigger:
  - main
pool:
  vmImage: ubuntu-latest
variables:
- name: NODE_ENV
  value: production 
steps:
  - checkout: self
    submodules: true
  - task: AzureStaticWebApp@0
    inputs:
      app_location: '/'
      output_location: '/build'
      azure_static_web_apps_api_token: $(deployment_token)
```

7. Click `Variables` then `New Variable`
8. Name the variable `deployment_token` and paste in the `Deployment Token` from Step 1c. above
9. Save and run the Pipeline
10. Visit the URL shown in Static Web Apps in Azure Portal