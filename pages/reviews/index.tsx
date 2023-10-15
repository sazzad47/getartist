import Head from 'next/head';
import ReviewPageUI from '../../components/reviews';

const ReviewsPage = () => {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="Read what our users say about us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <ReviewPageUI />
      </main>
    </>
  );
};

export default ReviewsPage;
