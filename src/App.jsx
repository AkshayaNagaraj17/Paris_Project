
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './components/Navbar'
import Home from "./pages/Home"
import Food from "./pages/Food"
import Pictures from"./pages/Pictures"
import Explore from "./pages/Explore"
import History from './pages/History'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
      
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/food" element={<Food></Food>}></Route>
          <Route path="/pictures" element={<Pictures></Pictures>}></Route>
          <Route path="/places" element={<Explore></Explore>}></Route>
          <Route path="/history" element={<History></History>}></Route>
        </Routes>
      </Router>
        
    </>
  )
}

export default App
