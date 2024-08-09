
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './page/Contact'
import Gallery from './page/Gallery'
import Hero from './page/Hero'
import Price from './page/Price'
import Products from './page/Products'
import Promo from './page/Promo'
import Service from './page/Service'
import Testimonials from './page/Testimonials'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Promo/>
      <Price />
      <Products/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>




    </>
  )
}

export default App
