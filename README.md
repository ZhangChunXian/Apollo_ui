<p align="center">
  <a href="https://github.com/FreedomIntelligence/Apollo?tab=Apache-2.0-1-ov-file">
    <img src="client/public/assets/logo.svg" height="256">
  </a>
  <h1 align="center">
    <a href="https://github.com/FreedomIntelligence/Apollo?tab=Apache-2.0-1-ov-file">Apollo Chat UI</a>
  </h1>
</p>

This is the Chat UI for [Apollo project](https://github.com/FreedomIntelligence/Apollo?tab=Apache-2.0-1-ov-file), base on [LibreChat](https://www.librechat.ai/)

# Deploy Locally

## Prerequisites

- Node.js 18+: https://nodejs.org/en/download
- Git: https://git-scm.com/download/
- MongoDB (Atlas or Community Server) running in port 27017
  - [MongoDB Atlas](https://www.librechat.ai/docs/configuration/mongodb/mongodb_atlas)
  - [MongoDB Community Server](https://www.librechat.ai/docs/configuration/mongodb/mongodb_community)

## Build and Start

Once you’ve completed the preparation steps, run the following commands:

1. Install dependencies

```bash
npm ci
```

2. Build the Frontend

```bash
npm run frontend
```

3. Start LibreChat!

```bash
npm run backend
```

🎉 Access LibreChat via http://localhost:3080/
