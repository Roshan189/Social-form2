import { Route, Routes } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
