import Head from 'next/head';
import Link from 'next/link';

const MessagePage = () => {
  return (
    <>
      <Head>
        <title>Post a job</title>
        <meta name="description" content="Create and share creative job listings effortlessly. Connect with artists and professionals seeking opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex items-center justify-center">
        <div className="bg-gray-100 w-[600px] max-w-full">
        <div className="bg-white p-6 md:mx-auto">
            <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
            </svg>
            <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Add received!
            </h3>
            <p className="text-gray-600 my-2 text-[1.5em]">We will review your add and notify you if your add is approved.</p>
            <p className="text-gray-800 text-[1.3em]">Have a great day!</p>
            <div className="py-7 text-center">
                <Link href="/" className="px-12 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white font-semibold py-3">
                  Go to home
                </Link>
            </div>
            </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default MessagePage;
