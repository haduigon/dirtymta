import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';
import { Root } from './Root';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <Root />
  //  </React.StrictMode>
);
