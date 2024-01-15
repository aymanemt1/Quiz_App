import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Quiz/App/App';
import { LangueProvider } from './Context/LangueContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter  basename='Quiz_App'>
<LangueProvider>
    <App />
</LangueProvider>
  </BrowserRouter>
);



