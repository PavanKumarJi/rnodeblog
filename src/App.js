import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Home from "./Pages/Home"
import Technology from "./Pages/Tecnology"
import Fitness from "./Pages/Fitness"
import Food from "./Pages/Food"
import "./Style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/technology" element = {<Technology />} />
        <Route path="/fitness" element = {<Fitness />} />
        <Route path="/food" element = {<Food />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
