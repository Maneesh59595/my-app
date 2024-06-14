import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
 
import Layout from './compoents/Layout';
import Home from './compoents/home';
import About from './compoents/about';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
