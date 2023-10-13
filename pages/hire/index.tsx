import Head from 'next/head';
import HirePageUI from '../../components/hire';

const HirePage = () => {
  return (
    <>
      <Head>
        <title>Hire an artist</title>
        <meta name="description" content="Discover the Artistry: Explore a World of Creative Expression" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <HirePageUI />
      </main>
    </>
  );
};

export default HirePage;
