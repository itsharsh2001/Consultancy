import '../styles/globals.css'
import '../styles/nprogress.css'
import {Provider} from 'next-auth/client'
import Router from 'next/router'
import Head from 'next/head'
import Nprogress from 'nprogress'
Nprogress.configure({ showSpinner: false });
Nprogress.configure({ minimum: 0.8});
Nprogress.configure({ easing: 'ease-in', speed: 500 });



function MyApp({ Component, pageProps }) {

  Router.events.on('routeChangeStart',(url)=>{
    Nprogress.start();
  })

  Router.events.on('routeChangeComplete',(url)=>{
    Nprogress.done();
  })
  
  Router.events.on('routeChangeError',(url)=>{
    Nprogress.done();
  })


  return(

    
    <Provider session={pageProps.session}>
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
