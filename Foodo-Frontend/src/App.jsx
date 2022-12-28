//whole of the app is contained here so placement of components will be here
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import SpecialMenu from './sections/SpecialMenu'
import Feedback from './sections/Feedback'
import Footer from './sections/Footer'
function App() {


  return (
    <>
    <div className='bg-gray-100 m-0 min-h-screen pb-10'>
      
        <NavBar />
        <Hero />
        <Features />
        <SpecialMenu />
        <Feedback />
    </div>

    <div className='bg-white'>
      <Footer />
    </div>
    </>
  )
}

export default App
