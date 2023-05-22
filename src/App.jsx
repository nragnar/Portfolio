import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>

    
    <div className="flex flex-col">
      <div className="">

      </div>
        <Navbar />
        <Hero />       
    </div>
        <Projects />
        <Contact />
      </BrowserRouter >
  )
}

export default App
