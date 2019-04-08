import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
