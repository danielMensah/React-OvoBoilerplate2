import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configure from './store'
import routes from './routes';

const store = configure();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
