<h1 align="center">Next.js (12) Custom Server + React 17 + Redux + Redux Saga + Scss + Typescript Starter + Docker</h1>

<p align="center">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-v12-blueviolet.svg"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/React-v17.0.1-%238DD6F9.svg?logo=React"></a>
  <a href="https://github.com/prettier/prettier" target="_blank"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://github.com/codica2" target="_blank"><img src="https://img.shields.io/badge/licence-MIT-green.svg" /></a>
</p>

This project helps you learn server side-side reactjs quickly, does not apply to people who have just learned Reactjs.

1. Understand CSR (Client-Side) and SSR (Server-Side) correctly
2. Don't waste time learning about static resources (Image, CSS)
3. Jquery support (optional)
4. Can use both React Context or Redux, Redux Saga
5. Sharing environment configuration between CSR and SSR
6. Support accurate and complete SEO.
7. Can develop your project easily and quickly.

See more: https://nextjs.org/docs/getting-started

## Starting template with:
- React.js 
- Next.js ( latest ) - Custom server (express)
- Typescript
- SCSS
- Redux
- Redux Saga
- Formik
- Yup Validator
- Prettier
- Docker
- Reverse Proxy API for CORS Domain


## Changelog 

* 02/03/2022
  - Update React 17 && Next 12
  - Remove Webpack4, Upgrade Webpack5
  - Remove Next-CSS, Next-SASS
  - Update .ENV configuration with Server And Client


* 28/12/2021
	- Update React 17 && Next 10


## Config Environment And Secure

Just make sure that you reboot the server when updating .env file 
You can access your .env variables by deconstructing 'process.env' object, both on client and server
Because when Next builded config will public and then dont write secret key in this file. you can use process.env.SECRET_KEY

```
Can use process.env.ENV_KEY
```


## SSR AND SEO ( Google Bot, Facebook Index OG,etc...)

```
Please pass data for title, meta before UI rendered. 
Example /src/pages/users/index.js
```

## How to use (local)

```
Install Dependencies
npm i
```

```javascript
Start with Development Mode
npm run dev ( developepment )
```


```javascript
Start with Production Mode
npm run build
npm start ( production )
```

## How to use (Docker)

Docker build take faster for deploy production 

```javascript
docker build -t nextjs_image .
docker run -d -v /home/path_to_project:/home/source -p 4000:4000 --name nextjs_container nextjs_image
```

## Configuration

You should configure things like eslint, tsconfig, prettier etc. with things that suit you and your project.
Configuration in this project is not perfect - it's just my own preference, but I'm open to suggestions :)

## Offline Mode 

The Project support offline-mode (Service Worker) when server dont response. Please check next.config.js and uncomment it (line 27)
When you use the offline mode server function will build longer than usual, consider this.

## Proxy API

The project uses a proxy mechanism for APIs to avoid CORS errors in browsers. If you do not use, you can change the domain name in the config file and call it directly

## Formik and Yup

The Projects using Formik and Yup help you quickly set up forms and validator.

### Refer
- Restructure Redux folder (https://github.com/react-boilerplate/react-boilerplate)
- Example code Next (https://github.com/zeit/next.js/tree/canary/examples)
- Warning: https://github.com/jaredpalmer/formik/pull/423
