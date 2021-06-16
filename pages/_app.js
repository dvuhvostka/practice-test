import React from 'react'
import '../styles/promo/globals.css';
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
