import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <div className={`app-container ${inter.className}`}>
          <Header />
          <main className="app-content">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}
