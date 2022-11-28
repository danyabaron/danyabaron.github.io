// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
import './index.css'

// ReactDOM.render(<App/>, document.getElementById('root'));

import React, { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App  from './App';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);