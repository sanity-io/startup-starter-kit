# Structured Content Startup Starter Kit 🚀

**Infrastructure:**

- [Sanity Structured Content](https://www.sanity.io)
- [Gatsby Frontend Templates](https://gatsbyjs.org)
- [Netlify Hosting](https://netlify.com)
- [Serverless Lambdas on Netlify](https://www.netlify.com/docs/functions/)
- [Google Assistant Chatbot](https://dialogflow.com)
- Rich text content on [Portable Text](https://www.portabletext.org)
- [LSTM Driven Startup Name Generator API on Zeit’s Now](https://zeit.co/now)
- [Sanity powered GraphQL API](https://www.sanity.io/help/graphql-beta)

**Featuring:**

- Block based front-page and landing pages
- Configurable routes
- Reusable landing page content
- Blog 
- Tiered pricing
- Social proof
- Feature list
- Chatbot content schemas
– Speech Synthesis (SSML) Editor


**The Structured Content Startup Starter Kit** is a monorepo with content schemas for [Sanity.io](https://sanity.io), a frontend in [Gatsby](https://gatsbyjs.com) using Sanity’s GraphQL API. Ready to be deployed on [Netlify](https://netlify.com).

The Structured Content Startup Starter Kit was built for a presentation at the [Google TED stage on Slush Helsinki 2018](https://events.withgoogle.com/google-at-slush-2018/speakers/#content).

This setup lets you use Sanity as a website builder with sections that can be shared and reused across multiple pages.

![Page builder](https://cdn.sanity.io/images/3do82whm/production/5cf34a82f25357642866cd0a1dfaaee05f0a9e47-2040x1846.png)

To demonstrate how you can create your own custom input types, we have included a toy “brand generator” that makes yp a company name using our [silly name generator API trained on the names of 40k funded startups](https://startup-name.now.sh/api/v1/names/random) (hosted on [Zeit’s `now`](https://zeit.co/now)). You can also generate a random SVG logo, and set brand colors that will be used on the Gatsby frontend.

![Brand generator](https://cdn.sanity.io/images/3do82whm/production/81ac4bc3d08ac6ea0bfe5aad24837fcc650fbf04-2038x1844.png)

This kit also comes with content schemas and a speech synthesis editor ready to use with [Google Dialogflow](https://dialogflow.com). To preview speech in the editor you'll need an API key with access to [Google’s Text to Speech](https://cloud.google.com/text-to-speech/). The key can be safely stored on Sanity. In the `/assistant` folder we have included a serverless function for Netlify that can be used as an endpoint for intents. A tutorial for how to set this up is forthcoming.

![Speech Synthesis Generator](https://cdn.sanity.io/images/3do82whm/production/b22242bf959838bb3fe28ed721a1a560e407b9a7-2040x1846.png)

## What you need before getting started

- Git [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Node.js v8.0.0 or newer [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Installation

```sh
git clone git@github.com:sanity-io/startup-starter-kit.git
cd startup-starter-kit
npm install
```

## Initialize a new Sanity project

```sh
npm run init-sanity
npm run graphql-deploy
```

:warning: This project runs on a tagged release of Sanity Studio. Do not run `sanity upgrade`. Keep an eye in our [Slack community](https://slack.sanity.io), or this min repo to get notice of the upgrade path. 

## Local development

Run development servers. We use [lerna](https://github.com/lerna/lerna) to start the backend (http://localhost:3000), frontend (http://localhost:8000) and the serverless functions (http://localhost:9000). Each service can be run individually within their respective folders.

```sh
npm run develop
```

# Backend: Sanity.io with GraphQL

This repo gives you access to the [beta release of Sanity’s GraphQL API](https://www.sanity.io/help/graphql-beta). It will be available for all Sanity users, including those on the [free developer plan](https://www.sanity.io/pricing/dev-2018-08-21). If you encounter bugs or have questions, you're more than welcome to join our [community on Slack](https://slack.sanity.io).

### Deploy GraphQL schema to the Sanity API

After updating the Sanity schemas in `backend/schemas`, we need to deploy the GraphQL schemas:

```sh
npm run graphql-deploy
```

### Deploy the studio

```sh
npm run studio-deploy
```

# Frontend: Gatsby

[Gatsby](https://gatsbyjs.org) is a static site generator for React. If you aren't familiar with Gatsby [you can find excellent documentation here](https://www.gatsbyjs.org/docs/). Gatsby will refresh with new data when you develop locally. If you change the content schema, you'll have to re-deploy the graphql API (`npm run graphql-deploy) and restart the development server.

The frontend has a general page template found in `page.js`. It also has dedicated templates for the following routes:

- `features`
- `pricing`
- `start`
- `blog` and `blog-posts` will appear if you add some content in `posts` in your Sanity project

# Deployment: Netlify
To sign up for [Netlify](https://netlify.com) and follow the instructions,pointing to your repo on GitHub/GitLab/BitBucket.

### Trigger rebuilds on published content

You can [add a webhook in Netlify](https://www.netlify.com/docs/webhooks/) that you can call to trigger rebuilds with new content. Copy the URL you're given by Netlify and add it to Sanity by running the command `sanity hook create` in the `/backend` folder.

# Google Assistant

Instructions are coming.
