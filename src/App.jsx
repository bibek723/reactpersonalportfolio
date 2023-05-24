import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Socialmedia from "./components/Socialmedia";



const App = () => {
  

  return (
    
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          < Navbar />
          < Hero />
        </div>
        < About />
        < Experience />
        < Tech />
        < Works /> 
        {/* < Feedbacks /> */}
        
        <div className="relative z-0">
          <Contact />
          < Socialmedia />
          <StarsCanvas />
        </div>
       

        
      </div>
    
    </BrowserRouter>
    // Continue from 14:59
  )
}

export default App
