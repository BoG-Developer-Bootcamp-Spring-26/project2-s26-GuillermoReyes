import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import LinesPage from "./pages/LinesPages";
import './App.css'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/lines/:lineColor" element={<LinesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}