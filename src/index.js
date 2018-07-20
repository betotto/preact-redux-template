import { Provider } from 'preact-redux';
import store from './store';
import { h, render } from 'preact';
import AppContainer from './modules/common/AppContainer';

store.dispatch({ type: 'BEGIN_AJAX_CALL' });

render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), document.body);
