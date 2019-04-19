import React from 'react';
import ReactDOM from 'react-dom';
import App from './componenets/App';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(<App />, document.querySelector('#root'));
