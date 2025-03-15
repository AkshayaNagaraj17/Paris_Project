
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './components/Navbar'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
function App() {


  return (
    <>
      
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
        
    </>
  )
}

export default App
