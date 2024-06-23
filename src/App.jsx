import { useState } from "react";
import "./App.css";
import logo from "./assets/Group 23.svg";
import ellipsepic from "./assets/Ellipse 372 (1).svg";
import Rximage from "./components/Rximage";
import Firstmainpart from "./components/Firstmainpart";
import Grocerylist from "./components/Grocerylist";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F7FDED]  w-full flex flex-col font-Roboto items-center ">
      <Rximage logo={logo} />
      <Firstmainpart ellipsepic={ellipsepic} />
      <Grocerylist />
      <Footer />
    </div>
  );
}

export default App;
