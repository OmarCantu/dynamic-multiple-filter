import 'rxjs';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import AppContainer from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

registerServiceWorker();
