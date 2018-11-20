import React from 'react';
import ReactDOM from 'react-dom';
import 'js-joda-timezone';

import registerServiceWorker from './registerServiceWorker';

import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
