import Head from 'next/head';
import DiscoverPageUI from '../../components/discover';

const DiscoverPage = () => {
  return (
    <>
      <Head>
        <title>Discover Art</title>
        <meta name="description" content="Uncover a world of creativity. Explore diverse artworks and their stories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <DiscoverPageUI />
      </main>
    </>
  );
};

export default DiscoverPage;
