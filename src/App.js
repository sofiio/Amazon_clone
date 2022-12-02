import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CheckOut from "./CheckOut";
import Home from "./Home";
import Rules from "./Rules";
import Login from "./Login";


function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
