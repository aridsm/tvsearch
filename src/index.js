import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import { ThemeModeContext } from './Components/ThemeModeContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeModeContext>
    <App />
    </ThemeModeContext>
  </React.StrictMode>,
);

