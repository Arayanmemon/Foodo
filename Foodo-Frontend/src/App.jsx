//whole of the app is contained here so placement of components will be here
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import SpecialMenu from './sections/SpecialMenu'
function App() {


  return (
    <>
    <div className='bg-gray-100 m-0 min-h-screen'>
      
        <NavBar />
        <Hero />
        <Features />
        <SpecialMenu />
    </div>
    </>
  )
}

export default App
