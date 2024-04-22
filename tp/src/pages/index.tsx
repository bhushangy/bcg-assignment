import Head from 'next/head';
import Home from '@/components/Home';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Tesla Power</title>
      </Head>
      <Home />
    </>
  );
}
