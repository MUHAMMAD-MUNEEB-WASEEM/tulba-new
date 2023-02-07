import "/styles/global.scss";
import Image from "next/image";
import Head from 'next/head';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';




function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tulba</title>
        <meta name="description" content="And we created you in pairs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
