import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App, { AppContext } from 'next/app';
import { initializeStore, useStore } from '../redux/store';
import '../styles/globals.css';

export default function MyApp({ Component, initialReduxState, pageProps }) {
  const store = useStore(initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const reduxStore = initializeStore(null);

  return { ...appProps, initialReduxState: reduxStore.getState() };
};

MyApp.propTypes = {
  Component: PropTypes.any,
  initialReduxState: PropTypes.object,
  pageProps: PropTypes.shape({}),
};
