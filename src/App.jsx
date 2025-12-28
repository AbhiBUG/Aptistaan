import NavBar from './components/NavBar.jsx'
import Connect from './components/Connect.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Chat from './pages/Chat.jsx'
import Mail from './pages/Mail.jsx'
import Demo from './pages/Demo.jsx'
import Numerical from './pages/Numerical.jsx'
import Reasoning from './pages/Reasoning.jsx'


import './App.css'
import './index.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
{/*import Background from "./assets/background_doodle.png";*/}
import Background from "./assets/background.png";

function App() {
  

  return (
    <>
    {/*<div style={{ backgroundImage: `url(${Background})` }}> */}
    <div style={{ backgroundImage: `url(${Background})` }}> 
     <Router>
    <NavBar />
    <Connect />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Chat" element={<Chat/>}></Route>
          <Route path="/Mail" element={<Contact/>}></Route>
          <Route path="/Demo" element={<Demo/>}>
          
                <Route path="/Demo/Numerical" element={<Numerical/>}></Route> {/* Nesting prevents another page navigation */}
                <Route path="/Demo/Reasoning" element={<Reasoning/>}></Route>
               
          </Route>
          
        </Routes>
        
      </Router>
      
      </div>
    </>

  )

}

export default App
