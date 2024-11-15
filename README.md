### IdeaPlanAI - API - Transform ideas into real projects

A project analyzer which uses AI to calculate functional requirements, non functional requirements, project time estimate, recommended technologies and some possible challenges from purposed project

### Environment Variables:

`NVIDIA_NIM_API_KEY` - NVIDIA API Key.

### Project Setup

- Node.js v22 or v23 (v23 recommended for development)
- npm (or yarn, pnpm, bun...)

```sh
npm install
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Server

- Development (Node.js v23)

```sh
npm run start:dev
```

- Production (Node v22 or v23)

```sh
npm run start:prod
```

### Rotas - POST `/`

**Content-Type:** `application/json`

```json
{
  "text": "<your-project-idea>"
}
```
