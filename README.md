# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Step 1: Install Vite

npm create vite@latest

## Step 2: Project structure:

Delete content on index.css <br/>
Delete components in App.jsx <br/>
Delete App.css and its ref <br/>
Add dirs: Components (with index.jsx), pages, utils (common functions), services (backend API), templates <br/>
Add fontawesome CDN (in index.html) <br/>

## Step 3: React router dom: npm i react-router-dom

Add routes folder <br/>
useRoutes hook

## Step 4: Tailwind CSS

https://tailwindcss.com/docs/guides/vite

## Step 5: Ant Design UI components

ant.design <br/>
npm install antd --save

## Step 6: Redux toolkit (state management)

https://redux-toolkit.js.org/tutorials/quick-start <br/>
npm install @reduxjs/toolkit react-redux

Create redux store (store data outside of component context) <br/>
Add redux/configStore.js <br/>
Wrap provider tag in main.jsx <br/>
Install redux-devtools chrome extension <br/>

## Step 7: Axios

https://axios-http.com/docs/intro <br />
Interceptors: Handle data between BE and FE (token auth, response, status code ) <br/>
Add services/axios.config.js: https.interceptors.request.use <br/>
Use https from axios.config in component <br/>
baseURL in axios.create() <br/>
https://axios-http.com/docs/config_defaults <br />
Config response to get only the data part in https.interceptors.response <br/>

## Step 8: Formik (Form management and input validation)

Formik <br/>
yup validation <br/>

## Step 9: Nestjs backend

Instead of express:

## Step 10: Setup Database

Install Docker <br/>
Download MySQL docker image <br/>
Create a docker container with MySQL image <br/>
docker run --name monday-sql -e MYSQL_ROOT_PASSWORD=19941004 -p 3306:3306 -d mysql:latest <br/>
Table Plus <br/>

## Step 11: Swagger for nestjs

npm install --save @nestjs/swagger <br/>
setup in main.ts
