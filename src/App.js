import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Images from "./Pages/Images";
import Gmail from "./Pages/Gmail";
import Search from "./Pages/Search";
import Searchpage from "./Pages/Searchpage";
import All from "./Pages/All";
// import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home /> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Gmail" element={<Gmail />}></Route>
          <Route path="/Store" element={<Store />}></Route>
          <Route path="/Images" element={<Images />}></Route>
          <Route path="/Searchpage" element={<Searchpage />}></Route>
          <Route path="/All" element={<All />}></Route>
        </Routes>
      </Router>
      {/* <h1>home dfff ...</h1> */}
    </div>
  );
}

export default App;
