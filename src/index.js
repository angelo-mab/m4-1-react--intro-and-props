import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div>
    <App currentUser={data.george} conversation={data.conversation} />
    <App currentUser={data.elaine} conversation={data.conversation} />
  </div>,
  rootElement
);
