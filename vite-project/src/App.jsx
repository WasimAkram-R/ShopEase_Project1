import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import All from './Components/Menu/All'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'





function App() {
 

  return (
    <>
     {/* <div className="container-fluid bg-body-tertiary pt-2 pb-5"> */}
     <BrowserRouter>
           <Routes>
           <Route path='/' element={<All/>}/>
          </Routes>
           </BrowserRouter>
     {/* </div> */}

     <About/>

     <Contact/>

    <Footer/>

    </>
  )
}

export default App
