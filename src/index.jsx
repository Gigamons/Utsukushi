import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './js/registerServiceWorker';
import i18n from './components/I18n'

i18n.on('initialized', () => {
  ReactDOM.render(<App/>, document.getElementById('root'));
  registerServiceWorker();
})