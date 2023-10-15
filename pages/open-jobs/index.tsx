import Head from 'next/head';
import OpenJobsUI from '../../components/openJobs';

const OpenJobsPage = () => {
  return (
    <>
      <Head>
        <title>Open Jobs</title>
        <meta name="description" content="Create and share creative job listings effortlessly. Connect with artists and professionals seeking opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <OpenJobsUI />
      </main>
    </>
  );
};

export default OpenJobsPage;
