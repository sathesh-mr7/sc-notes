import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/reduxStore';
import { BrowserRouter } from 'react-router-dom';

test('renders SC notes app', () => {
  render(
    <BrowserRouter basename='/sc-notes'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
