import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Register from './Components/RegistrationForm'
import HomePage from "./Components/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Routes>
          <Route path="/signin" element={<Register/>}/>
        </Routes>
     
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
