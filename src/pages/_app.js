import '@/styles/globals.css'
import Navbar from "./Navbar"
import Top_footer from "./Top_footer"
export default function App({ Component, pageProps }) {

  return <>

    <Navbar />
    <main className=''>
      <Component {...pageProps} />
    </main>
    <Top_footer />

  </>
}
