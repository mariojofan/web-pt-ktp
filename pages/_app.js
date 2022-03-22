import 'tailwindcss/tailwind.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>PT. Klabat Tekno Perkasa</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <meta name='viewport' content='inital-scale=1.0, width=device-width Website PT. Klabat Tekno Perkasa' />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
