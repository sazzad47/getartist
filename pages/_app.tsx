import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout'; 
import { Provider } from 'react-redux';
import store from '../store/store';
import LoadingSpinner from '../components/Loading';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LoadingSpinner/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
