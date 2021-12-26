import React from 'react';
import { render } from 'react-dom';
import App from './App';

const app = document.querySelector('#app');  // it's selecting the app id in the index.html file and inserting all the code from the App component in that spot when it renders in the port

render(<App />, app);