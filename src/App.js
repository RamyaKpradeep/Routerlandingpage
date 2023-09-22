import  About  from "./About";
import { Login } from "./Login";
import Register from "./Register";
import  Home  from "./Home";
import "./App.css";
import { Navbar } from './Navbar';
import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;