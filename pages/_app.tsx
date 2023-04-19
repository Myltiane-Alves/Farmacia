import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>ML Farmacia</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
  
    </SessionProvider>
  ) 
}

{/* <ProvidersWrapper>
{children}
</ProvidersWrapper> */}