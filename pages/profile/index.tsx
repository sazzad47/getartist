import Head from 'next/head';
import ProfileUI from '../../components/profile';

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Create and share creative job listings effortlessly. Connect with artists and professionals seeking opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <ProfileUI />
      </main>
    </>
  );
};

export default ProfilePage;
