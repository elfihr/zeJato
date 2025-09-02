
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
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import profile from './assets/whatsProfile.webp'

function App() {


  return (
    <>
      <Navbar />
      <Hero />

      <Service />
      <FloatingWhatsApp
        avatar={profile}
        accountName={'Zeca'}
        chatMessage={'Ola, Tudo bem? Posso ajudar Você?'}
        statusMessage={'Socio do Zé a Jato'}
        notification={true}
        notificationDelay={10}
        placeholder={'Mensagem'}
        />
      <Promo />
      <Price />
      <Products />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />




    </>
  )
}

export default App
