import Head from 'next/head';
import Home from '../components/home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Explore and discover talented artists for your creative projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Home />
      </main>
    </>
  );
};

export default HomePage;
