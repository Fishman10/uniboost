import { Provider } from 'react-redux';
import { useStore } from '../redux/store';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(null);
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default  MyApp
