import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.sass';
import App from './app';
import GenericContextStore from './app/contexts/GenericContextStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <GenericContextStore>
        <App />
    </GenericContextStore>,
    document.getElementById('root'),
);

serviceWorker.unregister();
