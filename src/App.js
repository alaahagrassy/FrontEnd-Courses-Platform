import Footer from './Components/Footer'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Register from './Components/RegistrationForm'
import HomePage from "./Components/Home";
import LogIn from './Components/Login'
import Navbar from './Components/Navbar'
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        </Routes>

        <Routes>
        <Route path="/login" element={<LogIn/>}/>
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
