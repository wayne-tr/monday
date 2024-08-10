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
