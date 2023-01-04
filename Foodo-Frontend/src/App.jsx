//whole of the app is contained here so placement of components will be here
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import SpecialMenu from './sections/SpecialMenu'
import Feedback from './sections/Feedback'
import Footer from './sections/Footer'
import Menu from './sections/Menu'
import { CartProvider } from './contexts/CartContext'
function App() {


  return (
    <>
    <CartProvider>

    <div className='bg-gray-100 pb-10 w-full'>
      
        <NavBar />
        <Hero />
        <Features />
        <SpecialMenu />
        <Menu />
        <Feedback />
    </div>

    <div className='bg-white'>
      <Footer />
    </div>
    </CartProvider>
    </>
  )
}

export default App
