import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from "./components/index"
import Home from "./views/Home/Home"
import './App.css'

function App() {


  return (

     <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
