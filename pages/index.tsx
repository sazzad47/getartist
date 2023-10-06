import Head from 'next/head'
import HomePage from "../components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Get an artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main className='min-h-screen'>
        <HomePage/>
       
       </main>
    </>
  )
}
